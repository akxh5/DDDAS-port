import React from 'react';
import { Shield, Zap, Database, Monitor, Settings, Download, Hash, CheckCircle, Clock, ChevronRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-space-grey-900 text-white font-inter">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-dark-gradient"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(153,69,255,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,241,149,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.05),transparent_70%)]"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-solana-purple rounded-full animate-pulse-slow"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-neon-green-500 rounded-full animate-pulse-slow delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-cyber-cyan-500 rounded-full animate-pulse-slow delay-2000"></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <div className="animate-slide-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-solana-gradient bg-clip-text text-transparent leading-tight animate-gradient-shift bg-[length:200%_200%]">
              Redefining Digital<br />Cleanliness.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              A decentralized system that intercepts duplicate downloads, powered by cryptographic trust and blockchain verification.
            </p>
            <button className="group bg-solana-gradient text-white px-12 py-4 rounded-xl font-semibold text-lg hover:scale-105 transform transition-all duration-300 animate-glow shadow-2xl">
              Join Early Access
              <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-solana-green rounded-full flex justify-center">
            <div className="w-1 h-3 bg-solana-green rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* What is DDDAS */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-space-grey-900 via-space-grey-800 to-space-grey-900"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-solana-gradient bg-clip-text text-transparent">
            What is DDDAS
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            DDDAS (Decentralized Data Download Duplication Alert System) is a revolutionary browser-integrated solution that prevents redundant file downloads. 
            Using advanced SHA-256 hashing algorithms, local validation protocols, and optional Solana blockchain verification, 
            DDDAS creates an intelligent layer between your downloads and storage, ensuring digital efficiency without compromising privacy.
          </p>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-24 px-6 bg-gradient-to-br from-space-grey-800 via-space-grey-700 to-space-grey-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(153,69,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(20,241,149,0.08),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-solana-gradient bg-clip-text text-transparent">
            Why It Matters
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-solana-blue">The Digital Clutter Crisis</h3>
              <ul className="space-y-4 text-lg text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-solana-green rounded-full mr-4 animate-pulse-slow"></div>
                  Average user downloads 47% duplicate files annually
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-solana-green rounded-full mr-4 animate-pulse-slow delay-500"></div>
                  Storage waste costs enterprises $2.3B globally
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-solana-green rounded-full mr-4 animate-pulse-slow delay-1000"></div>
                  Manual file management consumes 12 hours monthly
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-solana-gradient opacity-20 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-space-grey-800/80 to-space-grey-700/80 p-8 rounded-2xl border border-solana-purple/30 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold mb-4 text-white">DDDAS Solution</h3>
                <p className="text-gray-300 leading-relaxed">
                  Eliminate data redundancy before it happens. DDDAS transforms your download workflow into an intelligent, 
                  privacy-preserving system that learns, adapts, and protects your digital ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-dark-gradient"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-solana-gradient bg-clip-text text-transparent">
            Cutting-Edge Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="Preemptive Intelligence"
              description="Detects potential duplicates before download completion using advanced pattern recognition."
              gradient="from-solana-purple to-solana-blue"
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Local-First Privacy"
              description="All hashing and validation happens locally. Your data never leaves your device without consent."
              gradient="from-solana-green to-solana-blue"
            />
            <FeatureCard
              icon={<Database className="w-8 h-8" />}
              title="Blockchain Augmented Memory"
              description="Optional Solana integration for distributed hash verification across trusted networks."
              gradient="from-solana-blue to-solana-purple"
            />
            <FeatureCard
              icon={<Monitor className="w-8 h-8" />}
              title="OS Harmony"
              description="Seamless integration across macOS, Windows, and Ubuntu with native performance."
              gradient="from-solana-purple to-solana-green"
            />
            <FeatureCard
              icon={<Settings className="w-8 h-8" />}
              title="Override-on-Demand"
              description="Smart controls let you bypass protection when intentional duplicates are needed."
              gradient="from-solana-green to-solana-purple"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-gradient-to-b from-space-grey-900 to-space-grey-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(153,69,255,0.1),transparent_60%)]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-solana-gradient bg-clip-text text-transparent">
            How It Works
          </h2>
          <div className="space-y-8">
            <ProcessStep
              number="01"
              title="Download Detection"
              description="Browser extension intercepts download requests in real-time"
              time="<50ms"
              icon={<Download className="w-6 h-6" />}
              color="solana-purple"
            />
            <ProcessStep
              number="02"
              title="Hash Generation"
              description="SHA-256 cryptographic fingerprint created from file metadata"
              time="<100ms"
              icon={<Hash className="w-6 h-6" />}
              color="solana-green"
            />
            <ProcessStep
              number="03"
              title="Local Validation"
              description="Hash compared against local database of existing files"
              time="<150ms"
              icon={<CheckCircle className="w-6 h-6" />}
              color="solana-blue"
            />
            <ProcessStep
              number="04"
              title="Blockchain Query"
              description="Optional Solana network check for distributed verification"
              time="<300ms"
              icon={<Database className="w-6 h-6" />}
              color="solana-purple"
            />
            <ProcessStep
              number="05"
              title="User Decision"
              description="Smart notification with override options and recommendations"
              time="<500ms"
              icon={<Settings className="w-6 h-6" />}
              color="solana-green"
            />
          </div>
        </div>
      </section>

      {/* Waitlist Signup */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-space-grey-800 via-space-grey-700 to-space-grey-800"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(153,69,255,0.15),transparent_70%)]"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-solana-gradient bg-clip-text text-transparent">
            Reserve Your Seat
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Launching Fall 2025. Be among the first to experience the future of digital cleanliness.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-space-grey-800/80 border border-solana-purple/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-solana-green focus:ring-1 focus:ring-solana-green backdrop-blur-sm"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-solana-gradient text-white font-semibold rounded-xl hover:scale-105 transform transition-all duration-300 shadow-lg"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-space-grey-900 border-t border-solana-purple/20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-space-grey-900 to-space-grey-800/50"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-solana-gradient bg-clip-text text-transparent">
                DDDAS
              </h3>
              <p className="text-gray-400">
                Redefining digital cleanliness through decentralized intelligence.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-solana-green transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-solana-green transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-solana-green transition-colors">API Reference</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-solana-green transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-solana-green transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-solana-green transition-colors">Community</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-solana-purple/20 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <span className="text-gray-400">Harnessed by</span>
              <div className="flex items-center gap-2">
                <Syn8xLogo />
                <span className="text-solana-blue font-semibold">Syn8x</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-400">Backed by the</span>
              <div className="flex items-center gap-2">
                <SolanaLogo />
                <span className="text-solana-green font-semibold">Solana Foundation</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

function FeatureCard({ icon, title, description, gradient }: FeatureCardProps) {
  return (
    <div className="group relative p-6 bg-gradient-to-br from-space-grey-800/80 to-space-grey-700/80 rounded-2xl border border-solana-purple/20 hover:border-solana-green/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
      <div className="relative z-10">
        <div className="text-solana-purple group-hover:text-solana-green mb-4 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  time: string;
  icon: React.ReactNode;
  color: string;
}

function ProcessStep({ number, title, description, time, icon, color }: ProcessStepProps) {
  const colorClasses = {
    'solana-purple': 'from-solana-purple to-solana-blue',
    'solana-green': 'from-solana-green to-solana-blue',
    'solana-blue': 'from-solana-blue to-solana-purple'
  };

  return (
    <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-space-grey-800/60 to-space-grey-700/60 rounded-2xl border border-solana-purple/20 hover:border-solana-green/30 transition-all duration-300 backdrop-blur-sm">
      <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
        {number}
      </div>
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
  <div className="text-solana-green">{icon}</div>
  <h3 className="text-xl font-semibold text-white">{title}</h3>
  <div className="flex items-center gap-1 text-solana-blue whitespace-nowrap">
    <Clock size={16} />
    <span className="text-sm font-medium">{time}</span>
  </div>
</div>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}

function Syn8xLogo() {
  return (
    <div className="relative w-8 h-8">
      <svg width="32" height="32" viewBox="0 0 32 32" className="text-solana-blue">
        <defs>
          <linearGradient id="syn8xGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9945ff" />
            <stop offset="50%" stopColor="#00d4ff" />
            <stop offset="100%" stopColor="#14f195" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Outer hexagon */}
        <path
          d="M16 2 L26 8 L26 24 L16 30 L6 24 L6 8 Z"
          fill="none"
          stroke="url(#syn8xGradient)"
          strokeWidth="1.5"
          filter="url(#glow)"
        />
        
        {/* Inner geometric pattern */}
        <g fill="url(#syn8xGradient)" opacity="0.8">
          {/* Central diamond */}
          <path d="M16 10 L20 16 L16 22 L12 16 Z" />
          
          {/* Corner triangles */}
          <path d="M16 6 L19 10 L13 10 Z" />
          <path d="M16 26 L19 22 L13 22 Z" />
          <path d="M8 16 L12 13 L12 19 Z" />
          <path d="M24 16 L20 13 L20 19 Z" />
        </g>
        
        {/* Central dot */}
        <circle cx="16" cy="16" r="2" fill="url(#syn8xGradient)" filter="url(#glow)" />
        
        {/* Connecting lines */}
        <g stroke="url(#syn8xGradient)" strokeWidth="0.8" opacity="0.6">
          <line x1="16" y1="8" x2="16" y2="12" />
          <line x1="16" y1="20" x2="16" y2="24" />
          <line x1="10" y1="16" x2="14" y2="16" />
          <line x1="18" y1="16" x2="22" y2="16" />
        </g>
      </svg>
    </div>
  );
}

function SolanaLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 397.7 311.7" className="text-solana-green">
      <defs>
        <linearGradient id="solanaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9945ff" />
          <stop offset="50%" stopColor="#14f195" />
          <stop offset="100%" stopColor="#00d4ff" />
        </linearGradient>
      </defs>
      <path
        fill="url(#solanaGradient)"
        d="M64.6,237.9c2.4-2.4,5.7-3.8,9.2-3.8h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5c-5.8,0-8.7-7-4.6-11.1L64.6,237.9z"
      />
      <path
        fill="url(#solanaGradient)"
        d="M64.6,3.8C67.1,1.4,70.4,0,73.8,0h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5c-5.8,0-8.7-7-4.6-11.1L64.6,3.8z"
      />
      <path
        fill="url(#solanaGradient)"
        d="M333.1,120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8,0-8.7,7-4.6,11.1l62.7,62.7c2.4,2.4,5.7,3.8,9.2,3.8h317.4c5.8,0,8.7-7,4.6-11.1L333.1,120.1z"
      />
    </svg>
  );
}

export default App;
