'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-600" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(255,255,255,0.2),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(59,130,246,0.3),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(255,255,255,0.05)_60deg,transparent_120deg,rgba(255,255,255,0.05)_180deg,transparent_240deg,rgba(255,255,255,0.05)_300deg,transparent_360deg)] opacity-50" style={{ animation: 'spin 15s linear infinite' }} />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wOCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
      
      <div className="container relative mx-auto px-6 text-center z-10">
        <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 border-2 border-primary-foreground/30 mb-8">
          <Sparkles className="w-4 h-4 text-primary-foreground" />
          <span className="text-primary-foreground/90 text-sm font-black uppercase tracking-wider">Ready to Get Started?</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground mb-6 leading-tight tracking-tight">
          Experience a smarter way to do business.
        </h2>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed font-black">
          Get support from people who understand your business.
        </p>
        <Link 
          href="tel:+61487631858" 
          className="group inline-flex items-center gap-3 bg-background text-foreground hover:bg-background/95 px-10 py-5 border-2 border-background font-black text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl hover:shadow-primary-foreground/20 hover:scale-105 uppercase tracking-wide"
        >
          Get in Contact
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
