import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { DownloadItem, FileCategory } from '../types';

interface StatsProps {
  downloads: DownloadItem[];
}

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#64748b'];

const Stats: React.FC<StatsProps> = ({ downloads }) => {
  const data = Object.values(FileCategory).map(cat => {
    return {
      name: cat,
      value: downloads.filter(d => d.category === cat).length
    };
  }).filter(item => item.value > 0);

  const chartData = data.length > 0 ? data : [{ name: 'Empty', value: 1 }];
  const chartColors = data.length > 0 ? COLORS : ['#e2e8f0'];

  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col h-full">
      <h3 className="text-lg font-bold text-slate-800 mb-2">Storage Overview</h3>
      <div className="flex-1 min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
              ))}
            </Pie>
            <Tooltip 
               contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Legend verticalAlign="bottom" height={36} iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Stats;