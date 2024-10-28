import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  metrics: {
    label: string;
    value: string;
  }[];
  icon: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, metrics, icon }) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="relative z-20 p-6 -mt-20">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20">
            {icon}
          </div>
          <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 transition-all">
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-blue-100/70 mb-4 line-clamp-2">{description}</p>
        <div className="grid grid-cols-2 gap-4">
          {metrics.map((metric, index) => (
            <div key={index}>
              <div className="text-lg font-semibold text-white">{metric.value}</div>
              <div className="text-sm text-blue-100/60">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;