import React from 'react';
import { Home, Download, FolderHeart, Settings, Zap, Shield } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <div className="hidden md:flex w-64 bg-white border-r border-slate-200 flex-col h-screen sticky top-0 shrink-0">
      <div className="p-8">
        <div className="flex items-center space-x-3 mb-10">
          <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-500/30">
             <Zap className="w-6 h-6 text-white" />
          </div>
          <span className="font-bold text-xl text-slate-800 tracking-tight">Groppi</span>
        </div>

        <nav className="space-y-2">
          <a href="#" className="flex items-center space-x-3 px-4 py-3 bg-blue-50 text-blue-700 rounded-2xl font-semibold transition-all">
            <Home className="w-5 h-5" />
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-2xl font-medium transition-all">
            <Download className="w-5 h-5" />
            <span>My Files</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-2xl font-medium transition-all">
            <FolderHeart className="w-5 h-5" />
            <span>Favorites</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-2xl font-medium transition-all">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </a>
        </nav>
      </div>

      <div className="mt-auto p-6">
        <div className="bg-slate-900 rounded-3xl p-5 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500 rounded-full blur-2xl opacity-20 -mr-10 -mt-10"></div>
          <div className="flex items-center gap-2 mb-3">
             <Shield className="w-5 h-5 text-green-400" />
             <span className="font-bold text-sm">AI Protection</span>
          </div>
          <p className="text-xs text-slate-400 mb-4">Gemini 2.5 Flash analyzing all downloads for safety.</p>
          <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
             <div className="h-full bg-green-500 w-full animate-pulse"></div>
          </div>
          <p className="text-[10px] text-slate-500 mt-2 text-right">System Active</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;