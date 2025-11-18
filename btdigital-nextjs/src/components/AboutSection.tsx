'use client';

import { Code, Cloud, Database, Network, Zap, Shield } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent via-primary/3 to-primary/8 dark:from-primary/12 dark:via-transparent dark:via-primary/5 dark:to-primary/12" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(59,130,246,0.12),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_30%_20%,rgba(96,165,250,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(59,130,246,0.1),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_70%_80%,rgba(96,165,250,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20 dark:opacity-15" />
      <div className="container relative mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/30 blur-2xl opacity-40 animate-pulse" />
            <div className="relative bg-gradient-to-br from-background-secondary via-background to-background-tertiary p-8 aspect-video flex items-center justify-center border-2 border-primary/50 shadow-2xl hover:shadow-primary/30 hover:border-primary transition-all duration-300 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 w-full h-full p-8">
                  <div className="flex flex-col items-center justify-center space-y-2 animate-float" style={{ animationDelay: '0s' }}>
                    <div className="p-4 border-2 border-primary/40 bg-gradient-to-br from-primary/20 to-primary-600/20 group-hover:scale-110 group-hover:border-primary transition-all duration-300 shadow-lg group-hover:shadow-primary/40">
                      <Cloud className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-2 animate-float" style={{ animationDelay: '0.5s' }}>
                    <div className="p-4 border-2 border-primary-600/40 bg-gradient-to-br from-primary-600/20 to-primary-700/20 group-hover:scale-110 group-hover:border-primary-600 transition-all duration-300 shadow-lg group-hover:shadow-primary-600/40">
                      <Code className="w-8 h-8 text-primary-600" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-2 animate-float" style={{ animationDelay: '1s' }}>
                    <div className="p-4 border-2 border-primary-700/40 bg-gradient-to-br from-primary-700/20 to-primary-800/20 group-hover:scale-110 group-hover:border-primary-700 transition-all duration-300 shadow-lg group-hover:shadow-primary-700/40">
                      <Database className="w-8 h-8 text-primary-700" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-2 animate-float" style={{ animationDelay: '1.5s' }}>
                    <div className="p-4 border-2 border-primary-400/40 bg-gradient-to-br from-primary-400/20 to-primary-500/20 group-hover:scale-110 group-hover:border-primary-400 transition-all duration-300 shadow-lg group-hover:shadow-primary-400/40">
                      <Network className="w-8 h-8 text-primary-400" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-2 animate-float" style={{ animationDelay: '2s' }}>
                    <div className="p-4 border-2 border-primary/40 bg-gradient-to-br from-primary/20 to-primary-600/20 group-hover:scale-110 group-hover:border-primary transition-all duration-300 shadow-lg group-hover:shadow-primary/40">
                      <Zap className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-2 animate-float" style={{ animationDelay: '2.5s' }}>
                    <div className="p-4 border-2 border-primary-600/40 bg-gradient-to-br from-primary-600/20 to-primary-700/20 group-hover:scale-110 group-hover:border-primary-600 transition-all duration-300 shadow-lg group-hover:shadow-primary-600/40">
                      <Shield className="w-8 h-8 text-primary-600" />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/10 animate-pulse" />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-block">
              <span className="bg-primary/10 dark:bg-primary/20 text-primary px-4 py-2 border-2 border-primary/30 text-sm font-black uppercase tracking-wider">
                What we are
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight tracking-tight">
              A technological partner for{' '}
              <span className="text-primary">
                Growing Businesses
              </span>
            </h2>
            <p className="text-lg md:text-xl text-foreground-secondary leading-relaxed font-medium">
              We specialise in helping small to medium technical businesses build and manage their technology and digital processes, such that reporting, operating and decision making is easier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
