import React from 'react';

interface StatsCardProps {
  value: string;
  label: string;
  sublabel: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ value, label, sublabel }) => {
  return (
    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all">
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-lg text-blue-100/80 mb-1">{label}</div>
      <div className="text-sm text-blue-100/60">{sublabel}</div>
    </div>
  );
};

export default StatsCard;