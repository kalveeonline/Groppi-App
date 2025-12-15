import React, { useState, useEffect, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import Stats from './components/Stats';
import DownloadList from './components/DownloadList';
import { DownloadItem, DownloadStatus, FileCategory } from './types';
import { analyzeUrlWithGemini } from './services/geminiService';
import { Plus, Search, Bell, Sparkles, Home, Download, FolderHeart, Settings, Zap } from 'lucide-react';

const App: React.FC = () => {
  const [downloads, setDownloads] = useState<DownloadItem[]>([]);
  const [newUrl, setNewUrl] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  // Simulate download progress
  useEffect(() => {
    const interval = setInterval(() => {
      setDownloads(prev => prev.map(item => {
        if (item.status === DownloadStatus.Downloading) {
          const increment = Math.random() * 8 + 0.5;
          const newProgress = Math.min(item.progress + increment, 100);
          return {
            ...item,
            progress: newProgress,
            status: newProgress >= 100 ? DownloadStatus.Completed : DownloadStatus.Downloading,
            speed: newProgress >= 100 ? '' : `${(Math.random() * 15 + 2).toFixed(1)} MB/s`
          };
        }
        return item;
      }));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const handleAddDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUrl) return;

    setIsAdding(true);
    const tempId = Date.now().toString();
    
    // Add placeholder
    const newItem: DownloadItem = {
      id: tempId,
      filename: 'Analyzing Link...',
      url: newUrl,
      size: 'Pending',
      progress: 0,
      speed: '0 MB/s',
      status: DownloadStatus.Analyzing,
      category: FileCategory.Other,
      dateAdded: new Date(),
    };

    setDownloads(prev => [newItem, ...prev]);
    setNewUrl('');
    setIsModalOpen(false);

    try {
      // Analyze with Gemini
      const analysis = await analyzeUrlWithGemini(newItem.url);
      
      setDownloads(prev => prev.map(d => {
        if (d.id === tempId) {
          return {
            ...d,
            filename: analysis.suggestedFilename,
            category: analysis.category,
            aiSummary: analysis.summary,
            aiSafetyScore: analysis.safetyScore,
            aiTags: analysis.tags,
            status: DownloadStatus.Downloading,
            size: `${(Math.random() * 100 + 10).toFixed(1)} MB` // Simulated size
          };
        }
        return d;
      }));
    } catch (error) {
      setDownloads(prev => prev.map(d => {
        if (d.id === tempId) {
          return { ...d, status: DownloadStatus.Error, filename: 'Analysis Failed' };
        }
        return d;
      }));
    } finally {
      setIsAdding(false);
    }
  };

  const handlePauseResume = useCallback((id: string) => {
    setDownloads(prev => prev.map(item => {
      if (item.id === id) {
        return {
          ...item,
          status: item.status === DownloadStatus.Downloading ? DownloadStatus.Paused : 
                  item.status === DownloadStatus.Paused ? DownloadStatus.Downloading : item.status
        };
      }
      return item;
    }));
  }, []);

  const handleDelete = useCallback((id: string) => {
    setDownloads(prev => prev.filter(item => item.id !== id));
  }, []);

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-sans overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <div className="flex-1 overflow-y-auto p-4 md:p-8 pb-32 md:pb-8">
          {/* Mobile Header */}
          <div className="md:hidden flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-slate-800 tracking-tight">Groppi</span>
            </div>
            <button className="bg-white p-2 rounded-full shadow-sm border border-slate-200">
               <Bell className="w-5 h-5 text-slate-600" />
            </button>
          </div>

          {/* Desktop Header */}
          <header className="hidden md:flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
              <p className="text-slate-500 text-sm">Manage your intelligent downloads</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-white px-4 py-2.5 rounded-2xl border border-slate-200 shadow-sm focus-within:ring-2 focus-within:ring-blue-100 transition-all w-64">
                <Search className="w-4 h-4 text-slate-400 mr-2" />
                <input 
                  type="text" 
                  placeholder="Search files..." 
                  className="bg-transparent border-none focus:outline-none text-sm w-full text-slate-700 placeholder:text-slate-400"
                />
              </div>
              <button className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm relative hover:bg-slate-50 transition-colors">
                <Bell className="w-5 h-5 text-slate-600" />
                <span className="absolute top-2.5 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
            </div>
          </header>

          {/* AI Banner */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 md:p-8 text-white shadow-lg shadow-blue-500/20 mb-8 relative overflow-hidden">
             <div className="relative z-10">
               <div className="flex items-center gap-2 mb-3 bg-white/20 w-fit px-3 py-1 rounded-full backdrop-blur-md border border-white/10 shadow-inner">
                 <Sparkles className="w-3 h-3 text-yellow-300" />
                 <span className="text-xs font-semibold tracking-wide">Gemini 2.5 Powered</span>
               </div>
               <h2 className="text-2xl md:text-3xl font-bold mb-2">Smart Manager</h2>
               <p className="text-blue-100 max-w-md text-sm md:text-base leading-relaxed opacity-90">
                 Automatically categorize, virus-scan, and organize your files with Google Gemini AI intelligence.
               </p>
             </div>
             <div className="absolute -right-10 -bottom-10 opacity-20 pointer-events-none">
                <Sparkles className="w-64 h-64 text-white rotate-12" />
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-800 text-lg">Active Downloads</h3>
                {downloads.length > 0 && (
                  <span className="text-xs font-medium text-slate-500 bg-white border border-slate-200 px-2 py-1 rounded-lg shadow-sm">
                    {downloads.length} items
                  </span>
                )}
              </div>
              <DownloadList 
                downloads={downloads} 
                onPauseResume={handlePauseResume} 
                onDelete={handleDelete} 
              />
            </div>
            <div className="lg:col-span-1 hidden lg:block">
               <Stats downloads={downloads} />
            </div>
          </div>
        </div>

        {/* FAB */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="fixed z-50 bottom-24 right-6 md:bottom-10 md:right-10 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl shadow-blue-600/40 flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
        >
          <Plus className="w-7 h-7" />
        </button>

        {/* Mobile Nav */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-6 py-4 flex justify-between items-center z-40 pb-safe">
          <button className="flex flex-col items-center gap-1 text-blue-600">
            <Home className="w-6 h-6" />
            <span className="text-[10px] font-medium">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400">
            <Download className="w-6 h-6" />
            <span className="text-[10px] font-medium">Files</span>
          </button>
          <div className="w-8"></div> {/* Spacer for FAB */}
          <button className="flex flex-col items-center gap-1 text-slate-400">
            <FolderHeart className="w-6 h-6" />
            <span className="text-[10px] font-medium">Saved</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400">
            <Settings className="w-6 h-6" />
            <span className="text-[10px] font-medium">Settings</span>
          </button>
        </div>
      </main>

      {/* Add Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl w-full max-w-md p-6 shadow-2xl scale-100 transition-transform">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Add Download</h2>
            <form onSubmit={handleAddDownload}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-1.5 ml-1">Link Address</label>
                <div className="relative">
                  <input 
                    type="url" 
                    required
                    value={newUrl}
                    onChange={(e) => setNewUrl(e.target.value)}
                    placeholder="https://"
                    className="w-full pl-4 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 transition-all font-medium"
                    autoFocus
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <Download className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
              </div>
              <div className="flex items-start bg-blue-50 p-4 rounded-2xl mb-6 border border-blue-100">
                <Sparkles className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-blue-800 leading-relaxed font-medium">
                  Groppi AI will analyze the link to predict file type, ensure safety, and organize it automatically before starting.
                </p>
              </div>
              <div className="flex gap-3">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-3 border border-slate-200 rounded-xl text-slate-600 font-semibold hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={isAdding}
                  className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
                >
                  {isAdding ? (
                    <>
                      <Sparkles className="w-4 h-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    'Download'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;