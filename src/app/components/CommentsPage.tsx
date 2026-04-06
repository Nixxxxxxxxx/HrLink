import React, { useState, useRef, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import svgPaths from "../../imports/svg-j754ybfc47";

interface Comment {
  id: string;
  author: string;
  avatar?: string;
  initials?: string;
  bgColor?: string;
  text: string;
  date: string;
  likes?: number;
  isLiked?: boolean;
  replies?: Comment[];
}

const INITIAL_COMMENTS: Comment[] = [
  {
    id: '1',
    author: 'Александр Иванов',
    avatar: "https://images.unsplash.com/photo-1616015060912-48a864032a88?q=80&w=100&h=100&auto=format&fit=crop",
    text: 'Отличные новости! Горжусь нашим комбинатом. Модернизация пятой домны действительно дала свои плоды.',
    date: 'Вчера, 15:20',
    likes: 12,
    isLiked: false,
    replies: [
      {
        id: '1-1',
        author: 'Мария Петрова',
        avatar: "https://images.unsplash.com/photo-1636624498155-d87727494812?q=80&w=100&h=100&auto=format&fit=crop",
        text: 'Согласна, результаты впечатляют!',
        date: 'Вчера, 16:45',
        likes: 3,
        isLiked: false,
      }
    ]
  },
  {
    id: '2',
    author: 'Дмитрий Соколов',
    initials: 'ДС',
    bgColor: '#DA1E28',
    text: 'А что по поводу экологических фильтров на новой установке? Были ли замеры после запуска?',
    date: 'Вчера, 18:10',
    likes: 5,
    isLiked: false,
  },
  {
    id: '3',
    author: 'Сергей Волков',
    avatar: "https://images.unsplash.com/photo-1563464080969-69a12a230687?q=80&w=100&h=100&auto=format&fit=crop",
    text: 'Ждем годовой отчет, там цифры будут еще интереснее.',
    date: 'Сегодня, 10:05',
    likes: 8,
    isLiked: true,
  }
];

interface CommentsPageProps {
  newsId: string;
  onBack: () => void;
}

export const CommentsPage: React.FC<CommentsPageProps> = ({ newsId, onBack }) => {
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);
  const [replyTo, setReplyTo] = useState<{ id: string, author: string } | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const savedComments = localStorage.getItem(`comments_${newsId}`);
    if (savedComments) {
      try {
        setComments(JSON.parse(savedComments));
      } catch (e) {
        setComments(INITIAL_COMMENTS.slice(0, Math.floor(Math.random() * 14)));
      }
    } else {
      // Special case for deep nesting example in "Important News"
      if (newsId === 'important-9') {
        const deepThread: Comment = {
          id: 'root',
          author: 'Александр Иванов',
          avatar: "https://images.unsplash.com/photo-1616015060912-48a864032a88?q=80&w=100&h=100&auto=format&fit=crop",
          text: 'Это пример глубокой ветки комментариев для проверки верстки.',
          date: '10:00',
          likes: 5,
          replies: [
            {
              id: 'd1',
              author: 'Мария Петрова',
              text: 'Первый уровень вложенности (отступ есть)',
              date: '10:05',
              replies: [
                {
                  id: 'd2',
                  author: 'Дмитрий Соколов',
                  text: 'Второй уровень (отступ есть)',
                  date: '10:10',
                  replies: [
                    {
                      id: 'd3',
                      author: 'Сергей Волков',
                      text: 'Третий уровень (последний с отступом)',
                      date: '10:15',
                      replies: [
                        {
                          id: 'd4',
                          author: 'Елена Козлова',
                          text: 'Четвертый уровень (отступа нет, есть индикатор автора)',
                          date: '10:20',
                          replies: [
                            {
                              id: 'd5',
                              author: 'Иван Сидоров',
                              text: 'Пятый уровень (отступа нет, текст на всю ширину)',
                              date: '10:25',
                              replies: [
                                {
                                  id: 'd6',
                                  author: 'Анна Морозова',
                                  text: 'Шестой уровень ответа.',
                                  date: '10:30'
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        };
        setComments([deepThread]);
      } else {
        // Set initial comments between 0 and 13 as per requirement
        const randomCount = Math.floor(Math.random() * 14);
        setComments(INITIAL_COMMENTS.slice(0, randomCount));
      }
    }
  }, [newsId]);

  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem(`comments_${newsId}`, JSON.stringify(comments));
    }
  }, [comments, newsId]);

  const handleSend = () => {
    if (!commentText.trim()) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      author: 'Юрий Александров',
      initials: 'ЮА',
      bgColor: '#0F62FE',
      text: commentText,
      date: 'Только что',
      likes: 0,
      isLiked: false,
    };

    if (replyTo) {
      setComments(prev => {
        const updateReplies = (items: Comment[]): Comment[] => {
          return items.map(item => {
            if (item.id === replyTo.id) {
              return { ...item, replies: [...(item.replies || []), newComment] };
            }
            if (item.replies) {
              return { ...item, replies: updateReplies(item.replies) };
            }
            return item;
          });
        };
        return updateReplies(prev);
      });
      setReplyTo(null);
    } else {
      setComments(prev => [...prev, newComment]);
    }
    
    setCommentText('');
    
    setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTo({
          top: scrollRef.current.scrollHeight,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const handleLike = (commentId: string) => {
    setComments(prev => {
      const updateLikes = (items: Comment[]): Comment[] => {
        return items.map(item => {
          if (item.id === commentId) {
            const isLiked = !item.isLiked;
            return { 
              ...item, 
              isLiked, 
              likes: (item.likes || 0) + (isLiked ? 1 : -1) 
            };
          }
          if (item.replies) {
            return { ...item, replies: updateLikes(item.replies) };
          }
          return item;
        });
      };
      return updateLikes(prev);
    });
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '38px';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [commentText]);

  return (
    <div className="flex flex-col h-full bg-white font-['IBM_Plex_Sans'] relative">
      <div className="px-4 flex items-center h-[66px] gap-4 border-b border-[rgba(0,0,0,0.1)] shrink-0">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center hover:bg-black/5 rounded-full transition-colors cursor-pointer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d={svgPaths.p3e016100} fill="#161616" />
          </svg>
        </button>
        <h1 className="flex-1 text-[18px] font-semibold text-[#161616] text-center pr-10">Комментарии</h1>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-6 pb-32">
        {comments.map((comment) => (
          <CommentItem 
            key={comment.id} 
            comment={comment} 
            depth={0}
            onReply={(id, author) => {
              setReplyTo({ id, author });
              textareaRef.current?.focus();
            }}
            onLike={handleLike}
          />
        ))}
      </div>

      <div className="p-3 pb-8 border-t border-[rgba(0,0,0,0.1)] bg-white sticky bottom-0 z-50">
        {replyTo && (
          <div className="flex items-center justify-between px-3 py-1 mb-2 bg-[#F4F4F4] rounded-lg">
            <span className="text-[12px] text-black/60 truncate">Ответ для {replyTo.author}</span>
            <button onClick={() => setReplyTo(null)} className="text-[12px] text-[#0F62FE] font-medium">Отмена</button>
          </div>
        )}
        <div className="flex items-center gap-3">
          <div className="w-[36px] h-[36px] rounded-full bg-[#0F62FE] flex items-center justify-center text-white text-[16px] font-medium shrink-0">
            ЮА
          </div>
          <div className="flex-1 relative flex items-center bg-[#F4F4F4] rounded-[20px] px-3">
            <textarea 
              ref={textareaRef}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder={replyTo ? "Ваш ответ..." : "Ваш комментарий..."}
              className="w-full bg-transparent py-2 text-[15px] outline-none min-h-[38px] max-h-[120px] resize-none leading-[20px]"
              rows={1}
            />
          </div>
          <button 
            onClick={handleSend}
            disabled={!commentText.trim()}
            className={`w-[40px] h-[40px] flex items-center justify-center rounded-full transition-all shrink-0 cursor-pointer ${
              commentText.trim() ? 'bg-[#0F62FE] hover:bg-[#0043ce]' : 'bg-transparent opacity-20'
            }`}
          >
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill={commentText.trim() ? "white" : "#161616"} />
             </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const CommentItem: React.FC<{ 
  comment: Comment; 
  depth: number;
  onReply: (id: string, author: string) => void;
  onLike: (id: string) => void;
  parentAuthor?: string;
}> = ({ comment, depth, onReply, onLike, parentAuthor }) => {
  const replyCount = comment.replies?.length || 0;
  const MAX_INDENT_DEPTH = 3;
  const isFlattened = depth >= MAX_INDENT_DEPTH;

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <div className="shrink-0">
          {comment.avatar ? (
            <div className="w-[36px] h-[36px] rounded-full overflow-hidden">
              <ImageWithFallback src={comment.avatar} alt={comment.author} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div 
              className="w-[36px] h-[36px] rounded-full flex items-center justify-center text-white text-[16px] font-medium"
              style={{ backgroundColor: comment.bgColor || '#0F62FE' }}
            >
              {comment.initials}
            </div>
          )}
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="text-[14px] font-semibold text-[#161616]">{comment.author}</span>
            {isFlattened && parentAuthor && (
              <div className="flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="opacity-40">
                   <path d="M10 9V5L3 12L10 19V14.9C15 14.9 18.5 16.5 21 20C20 15 17 10 10 9Z" fill="currentColor" />
                </svg>
                <span className="text-[12px] text-[#0F62FE] font-medium">{parentAuthor}</span>
              </div>
            )}
            <span className="text-[12px] text-black/40">{comment.date}</span>
          </div>
          <p className="text-[15px] text-[#161616] leading-[20px]">{comment.text}</p>
          <div className="mt-2 flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => onReply(comment.id, comment.author)}
                className="text-[13px] text-black/60 font-medium active:text-[#0F62FE] hover:text-[#0F62FE] transition-colors cursor-pointer"
              >
                Ответить
              </button>
              <button 
                onClick={() => onLike(comment.id)}
                className="flex items-center gap-1 group cursor-pointer"
              >
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill={comment.isLiked ? "#DA1E28" : "none"} 
                  stroke={comment.isLiked ? "#DA1E28" : "currentColor"} 
                  strokeWidth="2" 
                  className={`transition-all ${comment.isLiked ? 'scale-110' : 'opacity-40 group-hover:opacity-70 group-active:scale-125'}`}
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                <span className={`text-[12px] font-medium transition-colors ${comment.isLiked ? 'text-[#DA1E28]' : 'text-black/60 group-hover:text-black'}`}>
                  {comment.likes || 0}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {comment.replies && comment.replies.length > 0 && (
        <div className={`${isFlattened ? 'ml-0' : 'ml-12 border-l-2 border-[rgba(0,0,0,0.05)] pl-4'} space-y-4`}>
          {comment.replies.map(reply => (
            <CommentItem 
              key={reply.id} 
              comment={reply} 
              depth={depth + 1}
              parentAuthor={comment.author}
              onReply={onReply}
              onLike={onLike}
            />
          ))}
        </div>
      )}
    </div>
  );
};
