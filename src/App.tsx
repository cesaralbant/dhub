import React from 'react';
import { Brain, LineChart, Network, ArrowRight, Database, Cpu, Globe2 } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import StatsCard from './components/StatsCard';
import { projects, stats } from './data';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
                <Brain className="w-12 h-12 text-blue-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              USFQ DataHub
            </h1>
            <p className="text-xl text-blue-100/80 max-w-2xl mx-auto mb-12">
              Pioneering the future of data science through innovative research and cutting-edge analytics
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <button className="px-8 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-all">
                Explore Projects
              </button>
              <button className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur-lg transition-all border border-white/20">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-blue-100/60 max-w-2xl mx-auto">
            Discover our groundbreaking research initiatives pushing the boundaries of data science
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all">
            <Database className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Big Data Processing</h3>
            <p className="text-blue-100/60">Advanced infrastructure handling petabytes of research data</p>
          </div>
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all">
            <Cpu className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">AI & Machine Learning</h3>
            <p className="text-blue-100/60">State-of-the-art algorithms and neural networks</p>
          </div>
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all">
            <Globe2 className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Global Impact</h3>
            <p className="text-blue-100/60">Research outcomes benefiting communities worldwide</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;