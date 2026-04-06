import React from 'react';
import { Node, mergeAttributes } from '@tiptap/react';
import { ReactNodeViewRenderer, NodeViewWrapper } from '@tiptap/react';
import { FileText, File, FileImage, FileSpreadsheet, FileArchive, FileCode, FileMusic, FileVideo, X } from 'lucide-react';

// Format file size to human-readable string
function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Б';
  const units = ['Б', 'КБ', 'МБ', 'ГБ'];
  const k = 1024;
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const size = parseFloat((bytes / Math.pow(k, i)).toFixed(1));
  return `${size} ${units[i]}`;
}

// Get icon and color based on file extension
function getFileTypeInfo(extension: string): { icon: React.ElementType; color: string; bgColor: string } {
  const ext = extension.toLowerCase();
  
  // Documents
  if (['pdf'].includes(ext)) return { icon: FileText, color: '#DA1E28', bgColor: '#FFF1F1' };
  if (['doc', 'docx', 'rtf', 'odt'].includes(ext)) return { icon: FileText, color: '#0F62FE', bgColor: '#EDF5FF' };
  if (['xls', 'xlsx', 'csv', 'ods'].includes(ext)) return { icon: FileSpreadsheet, color: '#24A148', bgColor: '#DEFBE6' };
  if (['ppt', 'pptx', 'odp'].includes(ext)) return { icon: FileText, color: '#FF832B', bgColor: '#FFF8E1' };
  
  // Images
  if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'bmp', 'ico'].includes(ext)) return { icon: FileImage, color: '#8A3FFC', bgColor: '#F6F2FF' };
  
  // Archives
  if (['zip', 'rar', '7z', 'tar', 'gz'].includes(ext)) return { icon: FileArchive, color: '#A56A00', bgColor: '#FFF8E1' };
  
  // Code
  if (['js', 'ts', 'tsx', 'jsx', 'html', 'css', 'json', 'xml', 'py', 'java', 'cpp'].includes(ext)) return { icon: FileCode, color: '#525252', bgColor: '#F2F4F8' };
  
  // Audio
  if (['mp3', 'wav', 'ogg', 'flac', 'aac'].includes(ext)) return { icon: FileMusic, color: '#D02670', bgColor: '#FFF0F7' };
  
  // Video
  if (['mp4', 'avi', 'mkv', 'mov', 'wmv', 'webm'].includes(ext)) return { icon: FileVideo, color: '#0E6027', bgColor: '#DEFBE6' };
  
  // Default
  return { icon: File, color: '#525252', bgColor: '#F2F4F8' };
}

// React component for rendering the file attachment in the editor
const FileAttachmentComponent = ({ node, deleteNode }: { node: { attrs: Record<string, string> }; deleteNode: () => void }) => {
  const { fileName, fileExtension, fileSize, fileUrl } = node.attrs;
  const { icon: Icon, color, bgColor } = getFileTypeInfo(fileExtension);
  const sizeFormatted = formatFileSize(Number(fileSize));

  const handleClick = () => {
    if (fileUrl) {
      const a = document.createElement('a');
      a.href = fileUrl;
      a.download = fileName;
      a.click();
    }
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    deleteNode();
  };

  return (
    <NodeViewWrapper className="my-2" data-type="file-attachment">
      <div
        contentEditable={false}
        className="relative inline-flex items-center gap-[12px] w-full max-w-[400px] px-[12px] py-[10px] rounded-[8px] border border-[#E0E4EA] bg-white hover:bg-[#F9FAFB] transition-colors cursor-pointer group select-none"
        onClick={handleClick}
      >
        {/* Delete button */}
        <button
          onClick={handleDelete}
          className="absolute -top-[6px] -right-[6px] w-[20px] h-[20px] rounded-full bg-[#DA1E28] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-[#A2191F] z-10 cursor-pointer"
        >
          <X size={12} color="#fff" strokeWidth={2.5} />
        </button>

        {/* File type icon */}
        <div
          className="w-[40px] h-[40px] rounded-[8px] flex items-center justify-center shrink-0"
          style={{ backgroundColor: bgColor }}
        >
          <Icon size={20} style={{ color }} />
        </div>

        {/* File info */}
        <div className="flex flex-col gap-[2px] min-w-0 flex-1">
          <span className="text-[14px] text-[#161616] leading-[18px] tracking-[0.16px] truncate font-medium font-['IBM_Plex_Sans']">
            {fileName}
          </span>
          <span className="text-[12px] text-[#8D8D8D] leading-[16px] tracking-[0.32px] font-['IBM_Plex_Sans']">
            {fileExtension.toUpperCase()} · {sizeFormatted}
          </span>
        </div>

        {/* Download indicator */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 11L3.5 6.5L4.56 5.44L7.25 8.13V1H8.75V8.13L11.44 5.44L12.5 6.5L8 11Z" fill="#525252"/>
            <path d="M13.5 14H2.5V11H4V12.5H12V11H13.5V14Z" fill="#525252"/>
          </svg>
        </div>
      </div>
    </NodeViewWrapper>
  );
};

// TipTap Node Extension
export const FileAttachment = Node.create({
  name: 'fileAttachment',
  group: 'block',
  atom: true,
  draggable: true,

  addAttributes() {
    return {
      fileName: {
        default: 'file',
      },
      fileExtension: {
        default: '',
      },
      fileSize: {
        default: '0',
      },
      fileUrl: {
        default: null,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-type="file-attachment"]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, { 'data-type': 'file-attachment' })];
  },

  addNodeView() {
    return ReactNodeViewRenderer(FileAttachmentComponent);
  },
});

export { formatFileSize, getFileTypeInfo };