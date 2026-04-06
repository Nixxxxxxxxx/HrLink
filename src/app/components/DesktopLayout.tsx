import React, { useState, useMemo } from 'react';
import { Resizable } from 're-resizable';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { Tabs } from './Tabs';
import { ForMeTab } from './ForMeTab';
import { AllChannelsTab } from './AllChannelsTab';
import { ChannelPage } from './ChannelPage';
import { CommentsPage } from './CommentsPage';
import { motion, AnimatePresence } from 'motion/react';
import { Channel, CHANNELS_DATA, NewsItem } from '../data/channels';
import svgPaths from "../../imports/svg-f1uge3s9tz";
import { X, Search as SearchIcon, MessageSquare } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { EditorNewsPage } from './EditorNewsPage';
import { NewsEditor } from './NewsEditor';
import type { Template } from './TemplatesView';

import { RightSidebarContent } from './RightSidebarContent';

const imgPinnedNews = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop";

interface DesktopLayoutProps {
  activeTab: 'for-me' | 'all';
  setActiveTab: (tab: 'for-me' | 'all') => void;
  selectedChannelId: string | null;
  onChannelSelect: (id: string, messageId?: string) => void;
  onOpenComments: (newsId: string) => void;
  currentPage: string;
  selectedNewsId: string | null;
  scrollToMessageId: string | null;
  onCloseComments: () => void;
  isAdmin?: boolean;
  onToggleRole?: () => void;
  adminView: 'list' | 'editor' | 'template-editor';
  setAdminView: (view: 'list' | 'editor' | 'template-editor') => void;
  forMeChannels?: Channel[];
  allOthersChannels?: Channel[];
  toggleSubscription?: (id: string) => void;
  isSubscribed?: (id: string) => boolean;
  channels: Channel[];
  onPublishNews: (channelId: string, news: NewsItem) => void;
  setChannels: React.Dispatch<React.SetStateAction<Channel[]>>;
}

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

export const DesktopLayout: React.FC<DesktopLayoutProps> = ({
  activeTab,
  setActiveTab,
  selectedChannelId,
  onChannelSelect,
  onOpenComments,
  currentPage,
  selectedNewsId,
  scrollToMessageId,
  onCloseComments,
  isAdmin = false,
  onToggleRole,
  adminView,
  setAdminView,
  forMeChannels = [],
  allOthersChannels = [],
  toggleSubscription = () => {},
  isSubscribed = () => true,
  channels,
  onPublishNews,
  setChannels
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchCategory, setSearchCategory] = useState<'news' | 'channels'>('news');
  const [editingTemplate, setEditingTemplate] = useState<Template | null>(null);
  const [editingNews, setEditingNews] = useState<{ title: string; content: string; image?: string; channelId: string; channelTitle: string } | null>(null);

  const selectedChannel = channels.find(c => c.id === selectedChannelId) || channels[0];

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
      // Channels
      if (searchCategory === 'channels') {
        if (channel.title.toLowerCase().includes(query) || channel.subtitle.toLowerCase().includes(query)) {
          results.push({ type: 'channel', channel });
        }
      }

      // News
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
  };

  return (
    <div className="flex flex-col h-screen bg-[#F4F6F9] overflow-hidden font-['IBM_Plex_Sans']">
      <TopBar isAdmin={isAdmin} onToggleRole={onToggleRole} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        
        <main className="flex-1 flex overflow-hidden">
          {isAdmin ? (
            <AnimatePresence mode="wait">
              {adminView === 'list' ? (
                <motion.div 
                  key="admin-list"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 flex overflow-hidden"
                >
                  <EditorNewsPage 
                    onAddNews={() => setAdminView('editor')} 
                    onAddTemplate={() => { setEditingTemplate(null); setAdminView('template-editor'); }}
                    onEditTemplate={(tpl) => { setEditingTemplate(tpl); setAdminView('template-editor'); }}
                    onEditNews={(newsData) => { setEditingNews(newsData); setAdminView('editor'); }}
                    channels={channels} 
                    setChannels={setChannels} 
                  />
                </motion.div>
              ) : adminView === 'template-editor' ? (
                <motion.div 
                  key="admin-template-editor"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 flex overflow-hidden"
                >
                  <NewsEditor onBack={() => { setEditingTemplate(null); setAdminView('list'); }} onPublish={onPublishNews} mode="template" initialTemplate={editingTemplate} />
                </motion.div>
              ) : (
                <motion.div 
                  key="admin-editor"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 flex overflow-hidden"
                >
                  <NewsEditor onBack={() => { setEditingNews(null); setAdminView('list'); }} onPublish={onPublishNews} initialNews={editingNews} />
                </motion.div>
              )}
            </AnimatePresence>
          ) : (
            <>
              {/* Left Column: Channel List (Resizable) */}
              <Resizable
                defaultSize={{ width: 384, height: '100%' }}
                minWidth={320}
                maxWidth={480}
                enable={{ right: true }}
                handleStyles={{
                  right: {
                    width: '4px',
                    right: '-2px',
                    cursor: 'col-resize',
                    zIndex: 10
                  }
                }}
                handleClasses={{
                  right: 'hover:bg-[#0F62FE]/30 transition-colors'
                }}
                className="bg-white border-r border-[#E0E0E0] flex flex-col shrink-0 overflow-hidden"
              >
                <div className="flex flex-col h-full w-full">
                  <div className="pt-4 px-4 pb-3 flex flex-col gap-3">
                    <h1 className="text-[24px] font-semibold text-[#161616] font-['Montserrat'] leading-[32px]">Новости</h1>
                    
                    <div className="relative group">
                      <input 
                        type="text" 
                        value={searchQuery}
                        onChange={(e) => {
                          setSearchQuery(e.target.value);
                          setIsSearching(e.target.value.length > 0);
                        }}
                        onFocus={() => searchQuery.length > 0 && setIsSearching(true)}
                        placeholder="Поиск по новостям" 
                        className="w-full bg-[#F2F4F8] rounded-[4px] py-[11px] pl-10 pr-10 text-[14px] outline-none border-none hover:bg-[#E8E8E8] focus:bg-[#F2F4F8] focus:ring-1 focus:ring-[#0F62FE] transition-all font-['IBM_Plex_Sans'] tracking-[0.16px]"
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

                  {!isSearching ? (
                    <>
                      <Tabs activeTab={activeTab} onTabChange={setActiveTab} allChannelsCount={allOthersChannels.length} />
                      <div className="flex-1 relative overflow-hidden">
                        <AnimatePresence mode="wait" initial={false}>
                          <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: activeTab === 'for-me' ? -20 : 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: activeTab === 'for-me' ? 20 : -20 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute inset-0 overflow-y-auto"
                          >
                            {activeTab === 'for-me' ? (
                              <ForMeTab onChannelClick={onChannelSelect} selectedChannelId={selectedChannelId} isDesktop channels={forMeChannels} />
                            ) : (
                              <AllChannelsTab onChannelClick={onChannelSelect} isDesktop channels={allOthersChannels} onToggleSubscribe={toggleSubscription} />
                            )}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </>
                  ) : (
                    <div className="flex-1 flex flex-col overflow-hidden">
                    <div className="flex border-b border-[#E0E4EA] gap-[12px] px-4 pt-[8px] pb-[0px]">
                      <button 
                        onClick={() => setSearchCategory('news')}
                        className={`pb-[12px] px-1 text-[13px] tracking-[0.16px] leading-[18px] relative transition-colors flex items-center gap-1.5 ${searchCategory === 'news' ? 'font-semibold text-[#161616]' : 'font-normal text-[#525252]'}`}
                      >
                        Новости
                        {newsCount > 0 && (
                          <div className={`px-1.5 rounded-[9px] min-w-[18px] h-[18px] flex items-center justify-center transition-colors ${searchCategory === 'news' ? 'bg-[#0F62FE]/10 text-[#0F62FE]' : 'bg-[#F2F4F8] text-[#525252]'}`}>
                            <span className="text-[11px] font-medium">{newsCount}</span>
                          </div>
                        )}
                        <AnimatePresence>
                          {searchCategory === 'news' && (
                            <motion.div 
                              layoutId="desktop-search-tab-underline" 
                              className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0F62FE]" 
                              transition={{ duration: 0.2 }}
                            />
                          )}
                        </AnimatePresence>
                      </button>
                      <button 
                        onClick={() => setSearchCategory('channels')}
                        className={`pb-[12px] px-1 text-[13px] tracking-[0.16px] leading-[18px] relative transition-colors flex items-center gap-1.5 ${searchCategory === 'channels' ? 'font-semibold text-[#161616]' : 'font-normal text-[#525252]'}`}
                      >
                        Каналы
                        {channelsCount > 0 && (
                          <div className={`px-1.5 rounded-[9px] min-w-[18px] h-[18px] flex items-center justify-center transition-colors ${searchCategory === 'channels' ? 'bg-[#0F62FE]/10 text-[#0F62FE]' : 'bg-[#F2F4F8] text-[#525252]'}`}>
                            <span className="text-[11px] font-medium">{channelsCount}</span>
                          </div>
                        )}
                        <AnimatePresence>
                          {searchCategory === 'channels' && (
                            <motion.div 
                              layoutId="desktop-search-tab-underline" 
                              className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0F62FE]" 
                              transition={{ duration: 0.2 }}
                            />
                          )}
                        </AnimatePresence>
                      </button>
                    </div>
                      <div className="flex-1 overflow-y-auto pt-2">
                        {searchResults.length > 0 ? (
                          <div className="flex flex-col">
                            {searchResults.map((result, idx) => (
                              <div 
                                key={`${result.type}-${idx}`}
                                onClick={() => {
                                  if (result.type === 'channel') {
                                    onChannelSelect(result.channel.id);
                                  } else {
                                    onChannelSelect(result.channel.id, result.news.id);
                                  }
                                }}
                                className={`py-2 px-4 cursor-pointer transition-colors ${
                                  result.type === 'channel' && selectedChannelId === result.channel.id && !searchQuery.includes(' ')
                                    ? 'bg-[#EDF5FF]' 
                                    : 'hover:bg-gray-50'
                                }`}
                              >
                                <div className="flex items-start gap-3">
                                  <div className="w-9 h-9 shrink-0 rounded-full overflow-hidden bg-[#014cda] flex items-center justify-center relative isolation-isolate">
                                    {result.channel.avatar ? (
                                      <ImageWithFallback src={result.channel.avatar} alt="" className="w-full h-full object-cover" />
                                    ) : (
                                      <>
                                        <div 
                                          className="absolute inset-0 rounded-full shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)] mix-blend-color-dodge pointer-events-none" 
                                          style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                                        />
                                        <div className="absolute inset-0 rounded-full border border-[#397dfe] pointer-events-none" aria-hidden="true" />
                                        <span className="text-[13px] font-medium text-white/90 relative z-10">{result.channel.initial || result.channel.title[0]}</span>
                                      </>
                                    )}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-2">
                                      <h4 className="text-[13px] font-semibold text-[#161616] truncate">{result.channel.title}</h4>
                                      {result.type === 'news' && (
                                        <span className="text-[11px] text-[#525252] font-normal shrink-0">{result.news.date}</span>
                                      )}
                                    </div>
                                    
                                    {result.type === 'channel' ? (
                                      <div className="mt-0">
                                        <p className="text-[12px] text-[#525252] line-clamp-1 leading-[16px]">
                                          <Highlighter text={result.channel.subtitle} query={searchQuery} />
                                        </p>
                                        {result.channel.isStream && (
                                          <div className="flex items-center gap-1 mt-0.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#DA1E28] animate-pulse" />
                                            <span className="text-[10px] font-medium text-[#DA1E28]">LIVE</span>
                                          </div>
                                        )}
                                      </div>
                                    ) : (
                                      <div className="mt-0.5">
                                        <p className="text-[13px] font-medium text-[#161616] line-clamp-1 leading-[18px]">
                                          <Highlighter text={result.news.title} query={searchQuery} isTitle />
                                        </p>
                                        <p className="text-[12px] text-[#525252] mt-0 leading-[16px]">
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
                          <div className="p-8 text-center">
                            <p className="text-[14px] text-[#525252]">Ничего не найдено</p>
                            <p className="text-[12px] text-[#525252]/60 mt-1">Попробуйте изменить запрос</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </Resizable>

              {/* Center Column: Feed with Overlaying Comments */}
              <div className="flex-1 overflow-hidden bg-white border-r border-[#E0E0E0] relative">
                <div className="h-full relative overflow-hidden">
                  <div className="absolute inset-0">
                    <div className="w-full h-full">
                      <ChannelPage 
                        channel={selectedChannel}
                        scrollToMessageId={scrollToMessageId}
                        onBack={() => {}} 
                        onOpenComments={onOpenComments}
                        isDesktop
                        isSubscribed={isSubscribed(selectedChannel.id)}
                        onToggleSubscribe={toggleSubscription}
                      />
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {currentPage === 'comments' && (
                    <motion.div
                      initial={{ x: '100%' }}
                      animate={{ x: 0 }}
                      exit={{ x: '100%' }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="absolute inset-0 bg-white z-[100]"
                    >
                      <CommentsPage 
                        newsId={selectedNewsId || ''} 
                        onBack={onCloseComments} 
                        isDesktop={true}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Right Column: Pinned / Pinned news */}
              <div className="w-[296px] shrink-0 bg-[#F4F6F9] overflow-y-auto hidden lg:block pl-[0px] pr-[12px] py-[8px]">
                <RightSidebarContent onOpenComments={onOpenComments} onChannelSelect={onChannelSelect} />
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};