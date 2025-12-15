import React from 'react';
import { DownloadItem, DownloadStatus, FileCategory } from '../types';
import { File, Image, Video, Music, Package, ShieldCheck, ShieldAlert, Sparkles, FileText, Pause, Play, Trash2 } from 'lucide-react';

interface DownloadListProps {
  downloads: DownloadItem[];
  onPauseResume: (id: string) => void;
  onDelete: (id: string) => void;
}

const getCategoryIcon = (category: FileCategory) => {
  switch (category) {
    case FileCategory.Image: return <Image className="w-6 h-6 text-purple-600" />;
    case FileCategory.Video: return <Video className="w-6 h-6 text-red-500" />;
    case FileCategory.Audio: return <Music className="w-6 h-6 text-pink-500" />;
    case FileCategory.Archive: return <Package className="w-6 h-6 text-orange-500" />;
    case FileCategory.Document: return <FileText className="w-6 h-6 text-blue-500" />;
    default: return <File className="w-6 h-6 text-slate-500" />;
  }
};

const DownloadList: React.FC<DownloadListProps> = ({ downloads, onPauseResume, onDelete }) => {
  if (downloads.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-slate-400 bg-white rounded-3xl border border-slate-100 shadow-sm mx-auto max-w-2xl">
        <Package className="w-16 h-16 mb-4 opacity-20" />
        <p className="font-medium">No downloads yet</p>
        <p className="text-sm mt-1">Tap + to add a link</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 pb-24">
      {downloads.map((item) => (
        <div key={item.id} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex items-center gap-4 transition-all hover:shadow-md animate-in fade-in slide-in-from-bottom-2">
          <div className="p-3 bg-slate-50 rounded-2xl shrink-0">
            {getCategoryIcon(item.category)}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-center mb-1">
               <h4 className="font-semibold text-slate-800 truncate pr-2 text-sm md:text-base" title={item.filename}>{item.filename}</h4>
               {item.aiSafetyScore !== undefined && (
                  <div className="flex items-center shrink-0" title={`Safety Score: ${item.aiSafetyScore}/100`}>
                    {item.aiSafetyScore > 80 ? (
                      <ShieldCheck className="w-4 h-4 text-green-500" />
                    ) : (
                      <ShieldAlert className="w-4 h-4 text-amber-500" />
                    )}
                  </div>
               )}
            </div>
            
            <div className="w-full bg-slate-100 rounded-full h-1.5 mb-2 overflow-hidden">
               <div 
                 className={`h-1.5 rounded-full ${item.status === DownloadStatus.Completed ? 'bg-green-500' : item.status === DownloadStatus.Error ? 'bg-red-500' : 'bg-blue-600'}`}
                 style={{ width: `${item.progress}%`, transition: 'width 0.5s ease-out' }}
               ></div>
            </div>
            
            <div className="flex justify-between items-center text-xs text-slate-500">
              <span className="flex items-center gap-1">
                {item.status === DownloadStatus.Analyzing && <Sparkles className="w-3 h-3 text-purple-500 animate-pulse" />}
                <span className={item.status === DownloadStatus.Error ? 'text-red-500' : ''}>{item.status}</span>
                {item.status === DownloadStatus.Downloading && ` • ${item.speed}`}
              </span>
              <span>{item.size} • {item.progress.toFixed(0)}%</span>
            </div>

            {item.aiSummary && (
               <div className="mt-2 flex flex-wrap gap-1">
                 {item.aiTags?.slice(0, 3).map(tag => (
                   <span key={tag} className="px-1.5 py-0.5 bg-slate-100 text-slate-600 text-[10px] rounded-md font-medium">{tag}</span>
                 ))}
               </div>
            )}
          </div>

          <div className="flex flex-col gap-1 shrink-0">
             {item.status === DownloadStatus.Downloading || item.status === DownloadStatus.Paused ? (
                <button onClick={() => onPauseResume(item.id)} className="p-2 hover:bg-slate-100 rounded-full text-slate-600 transition-colors">
                  {item.status === DownloadStatus.Paused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                </button>
             ) : null}
             <button onClick={() => onDelete(item.id)} className="p-2 hover:bg-red-50 rounded-full text-red-500 transition-colors">
               <Trash2 className="w-4 h-4" />
             </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DownloadList;