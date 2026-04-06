import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DesktopLayout } from './components/DesktopLayout';
import { BottomNav } from './components/BottomNav';
import { ForMeTab } from './components/ForMeTab';
import { AllChannelsTab } from './components/AllChannelsTab';
import { ChannelPage } from './components/ChannelPage';
import { CommentsPage } from './components/CommentsPage';
import { CHANNELS_DATA, Channel, NewsItem } from './data/channels';
import { X, Search as SearchIcon, MessageSquare } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { PinnedNewsCard } from './components/PinnedNewsCard';
import { ToastProvider } from './components/Toast';

type SearchResult = 
  | { type: 'channel'; channel: Channel }
  | { type: 'news'; news: NewsItem; channel: Channel };

const Highlighter: React.FC<{ text: string; query: string; isTitle?: boolean }> = ({ text, query, isTitle = false }) => {
  if (!query.trim()) return <span className="contents">{isTitle ? text : (text.length > 80 ? text.substring(0, 80) + '...' : text)}</span>;

  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  
  if (isTitle) {
    const parts = text.split(regex);
    return (
      <span className="contents">
        {parts.map((part, i) => 
          part.toLowerCase() === query.toLowerCase() 
            ? <mark key={i} className="bg-[#0F62FE]/20 text-[#0F62FE] rounded-sm px-0.5 font-semibold">{part}</mark> 
            : part
        )}
      </span>
    );
  }

  const matchIndex = text.toLowerCase().indexOf(query.toLowerCase());
  if (matchIndex === -1) return <span className="contents">{text.length > 80 ? text.substring(0, 80) + '...' : text}</span>;

  const start = Math.max(0, matchIndex - 40);
  const end = Math.min(text.length, matchIndex + 80);
  let contextText = text.substring(start, end);
  
  if (start > 0) contextText = '...' + contextText;
  if (end < text.length) contextText = contextText + '...';

  const contextParts = contextText.split(regex);

  return (
    <span className="contents">
      {contextParts.map((part, i) => 
        part.toLowerCase() === query.toLowerCase() 
          ? <mark key={i} className="bg-[#0F62FE]/20 text-[#0F62FE] rounded-sm px-0.5 font-semibold">{part}</mark> 
          : part
      )}
    </span>
  );
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'for-me' | 'all'>('for-me');
  const [selectedChannelId, setSelectedChannelId] = useState<string | null>(() => {
    const saved = localStorage.getItem('channels_data');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed[0].id;
      } catch (e) {
        return CHANNELS_DATA[0].id;
      }
    }
    return CHANNELS_DATA[0].id;
  });
  const [currentPage, setCurrentPage] = useState<string>('channels');
  const [selectedNewsId, setSelectedNewsId] = useState<string | null>(null);
  const [scrollToMessageId, setScrollToMessageId] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(() => localStorage.getItem('is_admin') === 'true');
  const [adminView, setAdminView] = useState<'list' | 'editor' | 'template-editor'>(() => (localStorage.getItem('admin_view') as 'list' | 'editor' | 'template-editor') || 'list');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    localStorage.setItem('is_admin', isAdmin.toString());
  }, [isAdmin]);

  useEffect(() => {
    localStorage.setItem('admin_view', adminView);
  }, [adminView]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchCategory, setSearchCategory] = useState<'news' | 'channels'>('news');
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  // Subscriptions logic
  const [subscribedIds, setSubscribedIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('subscribed_ids');
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as string[];
        // Migrate old 'severstal' IDs to 'prominvest'
        return parsed.map(id => id === 'severstal' ? 'prominvest' : id === 'severstal-life' ? 'prominvest-life' : id);
      } catch (e) {
        return ['important', 'prominvest', 'dev-team', 'itogi-goda'];
      }
    }
    // Default subscriptions: Important, ПромИнвест, Dev-team, Itogi Goda
    return ['important', 'prominvest', 'dev-team', 'itogi-goda'];
  });

  useEffect(() => {
    localStorage.setItem('subscribed_ids', JSON.stringify(subscribedIds));
  }, [subscribedIds]);

  const toggleSubscription = (id: string) => {
    // Prevent unsubscription from system channels
    const systemIds = ['important', 'prominvest', 'dev-team'];
    if (systemIds.includes(id) && subscribedIds.includes(id)) {
      return;
    }

    setSubscribedIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(sid => sid !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  // Channels state with persistence
  const CHANNELS_STORAGE_KEY = 'channels_data_v3';
  const [channels, setChannels] = useState<Channel[]>(() => {
    // Clear old keys
    localStorage.removeItem('channels_data');
    localStorage.removeItem('channels_data_v2');
    const saved = localStorage.getItem(CHANNELS_STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return CHANNELS_DATA;
      }
    }
    return CHANNELS_DATA;
  });

  useEffect(() => {
    localStorage.setItem(CHANNELS_STORAGE_KEY, JSON.stringify(channels));
  }, [channels]);

  const handlePublishNews = (channelId: string, news: NewsItem) => {
    setChannels(prev => {
      const updatedChannels = prev.map(channel => {
        if (channel.id === channelId) {
          return {
            ...channel,
            news: [news, ...channel.news], // Add to top
            lastMessage: news.title,
            lastMessageContent: news.content,
            lastNewsId: news.id
          };
        }
        // Also add to 'important' channel if it's an important news
        if (channel.id === 'important' && (news.type === 'important' || news.type === 'important_mandatory')) {
           return {
            ...channel,
            news: [news, ...channel.news], // Add to top
            lastMessage: news.title,
            lastMessageContent: news.content,
            lastNewsId: news.id
          };
        }
        return channel;
      });
      return updatedChannels;
    });
    setAdminView('list');
  };

  const forMeChannels = useMemo(() => {
    return channels.filter(c => subscribedIds.includes(c.id));
  }, [subscribedIds, channels]);

  const allOthersChannels = useMemo(() => {
    return channels.filter(c => !subscribedIds.includes(c.id));
  }, [subscribedIds, channels]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Force reset scroll state when returning to channels list or changing layout
    if (currentPage === 'channels' && scrollRef.current) {
      const currentScroll = scrollRef.current.scrollTop;
      setIsScrolled(currentScroll > 10);
    }

    const handleScroll = () => {
      if (scrollRef.current && currentPage === 'channels') {
        const currentScroll = scrollRef.current.scrollTop;
        if (currentScroll > 10) {
          if (!isScrolled) setIsScrolled(true);
        } else {
          if (isScrolled) setIsScrolled(false);
        }
      }
    };

    const scrollEl = scrollRef.current;
    if (scrollEl) {
      scrollEl.addEventListener('scroll', handleScroll, { passive: true });
    }
    return () => {
      if (scrollEl) {
        scrollEl.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isScrolled, currentPage, isMobile]);

  const { newsCount, channelsCount } = useMemo(() => {
    if (!searchQuery.trim()) return { newsCount: 0, channelsCount: 0 };
    const query = searchQuery.toLowerCase();
    let nCnt = 0;
    let cCnt = 0;

    channels.forEach(channel => {
      if (channel.title.toLowerCase().includes(query) || channel.subtitle.toLowerCase().includes(query)) {
        cCnt++;
      }
      channel.news.forEach(news => {
        if (news.title.toLowerCase().includes(query) || news.content.toLowerCase().includes(query)) {
          nCnt++;
        }
      });
    });

    return { newsCount: nCnt, channelsCount: cCnt };
  }, [searchQuery, channels]);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    const results: SearchResult[] = [];

    channels.forEach(channel => {
      if (searchCategory === 'channels') {
        if (channel.title.toLowerCase().includes(query) || channel.subtitle.toLowerCase().includes(query)) {
          results.push({ type: 'channel', channel });
        }
      }
      
      if (searchCategory === 'news') {
        channel.news.forEach(news => {
          if (news.title.toLowerCase().includes(query) || news.content.toLowerCase().includes(query)) {
            results.push({ type: 'news', news, channel });
          }
        });
      }
    });

    return results;
  }, [searchQuery, searchCategory, channels]);

  const handleClearSearch = () => {
    setSearchQuery('');
    setIsSearching(false);
    setSearchCategory('news');
  };

  const handleChannelSelect = (id: string, messageId?: string) => {
    setSelectedChannelId(id);
    if (messageId) {
      setScrollToMessageId(messageId);
    } else {
      setScrollToMessageId(null);
    }
    
    if (isMobile) {
      setCurrentPage('channel-detail');
      setIsSearching(false);
      setSearchQuery('');
    } else {
      setCurrentPage('channels');
    }
  };

  const handleOpenComments = (newsId: string) => {
    setSelectedNewsId(newsId);
    setCurrentPage('comments');
  };

  const handleCloseComments = () => {
    if (isMobile) {
      setCurrentPage('channel-detail');
    } else {
      setCurrentPage('channels');
      setSelectedNewsId(null);
    }
  };

  const selectedChannel = channels.find(c => c.id === selectedChannelId) || channels[0];

  const iosTransition = {
    type: "spring",
    stiffness: 400,
    damping: 38,
    mass: 1,
  };

  const isSubscribed = (id: string) => subscribedIds.includes(id);

  return (
    <ToastProvider>
    <div className="flex flex-col h-screen bg-white font-['IBM_Plex_Sans'] overflow-hidden">
      {isMobile ? (
        <div className="flex-1 flex flex-col overflow-hidden relative bg-white">
          <motion.div 
            key="channels-list"
            initial={false}
            animate={{ 
              x: currentPage !== 'channels' ? -100 : 0,
              opacity: currentPage !== 'channels' ? 0.9 : 1,
              scale: currentPage !== 'channels' ? 0.98 : 1
            }}
            transition={iosTransition}
            className="flex-1 flex flex-col overflow-hidden bg-white h-full"
          >
            <div className="shrink-0 bg-white z-20 sticky top-0 border-b border-[#E0E4EA]">
              <div className="mb-2 px-[20px] pt-[24px] pb-[0px]">
                <h1 className="text-[24px] font-semibold text-[#161616] leading-[32px] font-['Montserrat']">Новости</h1>
              </div>

              <AnimatePresence initial={false}>
                {(!isScrolled || isSearching) && (
                  <motion.div 
                    key="search-bar-container"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                    className="overflow-hidden px-5"
                  >
                    <div className="pb-2">
                      <div className="relative">
                        <input 
                          type="text" 
                          value={searchQuery}
                          onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setIsSearching(e.target.value.length > 0);
                          }}
                          onFocus={() => searchQuery.length > 0 && setIsSearching(true)}
                          placeholder="Поиск по новостям" 
                          className="w-full bg-[#f2f4f8] rounded-[4px] py-2.5 pl-10 pr-10 text-[14px] outline-none border border-transparent focus:border-[#0F62FE] transition-all"
                        />
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#525252]">
                          <SearchIcon size={16} />
                        </div>
                        {searchQuery && (
                          <button 
                            onClick={handleClearSearch}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#525252] hover:text-[#161616] p-1 rounded-full hover:bg-black/5 transition-colors"
                          >
                            <X size={16} />
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                layout
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              >
                {!isSearching && (
                  <PinnedNewsCard 
                    news={channels.find(c => c.id === 'important')?.news[channels.find(c => c.id === 'important')?.news.length! - 1]}
                    channel={channels.find(c => c.id === 'important')}
                    onClick={handleChannelSelect}
                  />
                )}
              </motion.div>

              <AnimatePresence initial={false}>
                {(!isScrolled || isSearching) && (
                  <motion.div 
                    key="tabs-container"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="flex gap-[12px] px-[20px] pt-[8px]">
                      {isSearching ? (
                        <>
                          <button 
                            onClick={() => setSearchCategory('news')}
                            className={`pb-[12px] px-1 text-[14px] tracking-[0.16px] leading-[18px] relative transition-colors flex items-center gap-1.5 ${searchCategory === 'news' ? 'font-semibold text-[#161616]' : 'font-normal text-[#525252]'}`}
                          >
                            Новости
                            {newsCount > 0 && (
                              <div className={`px-1.5 rounded-[9px] min-w-[18px] h-[18px] flex items-center justify-center transition-colors ${searchCategory === 'news' ? 'bg-[#0F62FE]/10 text-[#0F62FE]' : 'bg-[#F2F4F8] text-[#525252]'}`}>
                                <span className="text-[12px] font-medium">{newsCount}</span>
                              </div>
                            )}
                            {searchCategory === 'news' && (
                              <motion.div 
                                layoutId="search-tab-underline" 
                                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0F62FE]" 
                                transition={{ duration: 0.2 }}
                              />
                            )}
                          </button>
                          <button 
                            onClick={() => setSearchCategory('channels')}
                            className={`pb-[12px] px-1 text-[14px] tracking-[0.16px] leading-[18px] relative transition-colors flex items-center gap-1.5 ${searchCategory === 'channels' ? 'font-semibold text-[#161616]' : 'font-normal text-[#525252]'}`}
                          >
                            Каналы
                            {channelsCount > 0 && (
                              <div className={`px-1.5 rounded-[9px] min-w-[18px] h-[18px] flex items-center justify-center transition-colors ${searchCategory === 'channels' ? 'bg-[#0F62FE]/10 text-[#0F62FE]' : 'bg-[#F2F4F8] text-[#525252]'}`}>
                                <span className="text-[12px] font-medium">{channelsCount}</span>
                              </div>
                            )}
                            {searchCategory === 'channels' && (
                              <motion.div 
                                layoutId="search-tab-underline" 
                                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0F62FE]" 
                                transition={{ duration: 0.2 }}
                              />
                            )}
                          </button>
                        </>
                      ) : (
                        <>
                          <button 
                            onClick={() => setActiveTab('for-me')}
                            className={`pb-[12px] px-1 text-[14px] tracking-[0.16px] leading-[18px] relative transition-colors ${activeTab === 'for-me' ? 'font-semibold text-[#161616]' : 'font-normal text-[#525252]'}`}
                          >
                            Для меня
                            {activeTab === 'for-me' && (
                              <motion.div 
                                layoutId="tab-underline" 
                                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0F62FE]" 
                                transition={{ duration: 0.2 }}
                              />
                            )}
                          </button>
                          <button 
                            onClick={() => setActiveTab('all')}
                            className={`pb-[12px] px-1 text-[14px] tracking-[0.16px] leading-[18px] relative transition-colors flex items-center gap-1.5 ${activeTab === 'all' ? 'font-semibold text-[#161616]' : 'font-normal text-[#525252]'}`}
                          >
                            Все каналы
                            {allOthersChannels.length > 0 && (
                              <div className="bg-[#0F62FE]/10 px-1.5 rounded-[9px] min-w-[18px] h-[18px] flex items-center justify-center">
                                <span className="text-[#0F62FE] text-[12px]">{allOthersChannels.length}</span>
                              </div>
                            )}
                            {activeTab === 'all' && (
                              <motion.div 
                                layoutId="tab-underline" 
                                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0F62FE]" 
                                transition={{ duration: 0.2 }}
                              />
                            )}
                          </button>
                        </>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto pb-24 pt-2">
              {!isSearching ? (
                activeTab === 'for-me' ? (
                  <ForMeTab onChannelClick={handleChannelSelect} channels={forMeChannels} />
                ) : (
                  <AllChannelsTab onChannelClick={handleChannelSelect} channels={allOthersChannels} onToggleSubscribe={toggleSubscription} />
                )
              ) : (
                <div className="flex flex-col">
                  {searchResults.length > 0 ? (
                    <div className="flex flex-col">
                      {searchResults.map((result, idx) => (
                        <div 
                          key={`${result.type}-${idx}`}
                          onClick={() => handleChannelSelect(result.channel.id, result.type === 'news' ? result.news.id : undefined)}
                          className="active:bg-[#EDF5FF] transition-colors px-[20px] py-[12px]"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-[#014cda] flex items-center justify-center relative isolation-isolate">
                              {result.channel.avatar ? (
                                <ImageWithFallback src={result.channel.avatar} alt="" className="w-full h-full object-cover" />
                              ) : (
                                <>
                                  <div 
                                    className="absolute inset-0 rounded-full shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)] mix-blend-color-dodge pointer-events-none" 
                                    style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                                  />
                                  <div className="absolute inset-0 rounded-full border border-[#397dfe] pointer-events-none" aria-hidden="true" />
                                  <span className="text-[14px] font-medium text-white/90 relative z-10">{result.channel.initial || result.channel.title[0]}</span>
                                </>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2">
                                <h4 className="font-semibold text-[#161616] truncate text-[14px]">{result.channel.title}</h4>
                                {result.type === 'news' && (
                                  <span className="text-[#525252] shrink-0 font-normal text-[12px]">{result.news.date}</span>
                                )}
                              </div>
                              
                              {result.type === 'channel' ? (
                                <div className="mt-0.5">
                                  <p className="text-[13px] text-[#525252] line-clamp-1 leading-[16px]">
                                    <Highlighter text={result.channel.subtitle} query={searchQuery} />
                                  </p>
                                  {result.channel.isStream && (
                                    <div className="flex items-center gap-1 mt-1">
                                      <div className="w-1.5 h-1.5 rounded-full bg-[#DA1E28] animate-pulse" />
                                      <span className="text-[11px] font-medium text-[#DA1E28]">В эфире</span>
                                    </div>
                                  )}
                                </div>
                              ) : (
                                <div className="mt-0.5">
                                  <p className="text-[14px] font-medium text-[#161616] line-clamp-1 leading-[18px]">
                                    <Highlighter text={result.news.title} query={searchQuery} isTitle />
                                  </p>
                                  <p className="text-[#525252] leading-[16px] text-[14px] mt-0.5">
                                    <Highlighter text={result.news.content} query={searchQuery} />
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-10 text-center">
                      <p className="text-[16px] text-[#525252]">Ничего не найдено</p>
                      <p className="text-[14px] text-[#525252]/60 mt-1">Попробуйте изменить запрос</p>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            <BottomNav />
          </motion.div>

          <AnimatePresence>
            {(currentPage === 'channel-detail' || currentPage === 'comments') && (
              <motion.div 
                key="channel-detail"
                initial={{ x: '100%' }}
                animate={{ 
                  x: currentPage === 'comments' ? -40 : 0,
                  opacity: 1,
                  scale: currentPage === 'comments' ? 0.98 : 1
                }}
                exit={{ x: '100%' }}
                transition={iosTransition}
                className="fixed inset-0 z-[100] bg-white shadow-2xl overflow-hidden flex flex-col"
              >
                <ChannelPage 
                  channel={selectedChannel}
                  onBack={() => setCurrentPage('channels')}
                  onOpenComments={handleOpenComments}
                  scrollToMessageId={scrollToMessageId}
                  isDesktop={false}
                  isSubscribed={isSubscribed(selectedChannel.id)}
                  onToggleSubscribe={toggleSubscription}
                />
              </motion.div>
            )}

            {currentPage === 'comments' && (
              <motion.div 
                key="comments-view"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={iosTransition}
                className="fixed inset-0 z-[200] bg-white shadow-2xl flex flex-col"
              >
                <CommentsPage 
                  newsId={selectedNewsId || ''}
                  onBack={handleCloseComments}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <DesktopLayout 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          selectedChannelId={selectedChannelId}
          onChannelSelect={handleChannelSelect}
          onOpenComments={handleOpenComments}
          currentPage={currentPage}
          selectedNewsId={selectedNewsId}
          scrollToMessageId={scrollToMessageId}
          onCloseComments={handleCloseComments}
          isAdmin={isAdmin}
          onToggleRole={() => setIsAdmin(!isAdmin)}
          adminView={adminView}
          setAdminView={setAdminView}
          forMeChannels={forMeChannels}
          allOthersChannels={allOthersChannels}
          toggleSubscription={toggleSubscription}
          isSubscribed={isSubscribed}
          channels={channels}
          onPublishNews={handlePublishNews}
          setChannels={setChannels}
        />
      )}
    </div>
    </ToastProvider>
  );
};

export default App;