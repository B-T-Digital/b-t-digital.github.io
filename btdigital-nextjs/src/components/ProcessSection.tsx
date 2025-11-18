'use client';

import { Palette, Code, Settings } from 'lucide-react';

/**
 * FUNCTIONAL REQUIREMENTS:
 * - Display process steps in equal-width grid layout
 * - Ensure responsive design across all screen sizes
 * - Maintain visual hierarchy with numbered circles
 * - Center content and maintain consistent spacing
 * - Support mobile-first responsive breakpoints
 */

const processSteps = [
  {
    title: 'Design',
    description: 'Plan and architect your solution',
    icon: Palette,
    gradient: 'from-primary to-primary-600'
  },
  {
    title: 'Build',
    description: 'Develop and implement your system',
    icon: Code,
    gradient: 'from-primary-600 to-primary-700'
  },
  {
    title: 'Manage',
    description: 'Maintain and optimize your technology',
    icon: Settings,
    gradient: 'from-primary-700 to-primary-800'
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-24 bg-gradient-to-b from-background-secondary via-background to-background-secondary overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(59,130,246,0.08),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_50%_50%,rgba(96,165,250,0.12),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(59,130,246,0.05),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_30%_50%,rgba(96,165,250,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(59,130,246,0.05),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_70%_50%,rgba(96,165,250,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,transparent_0deg,rgba(59,130,246,0.02)_90deg,transparent_180deg,rgba(59,130,246,0.02)_270deg,transparent_360deg)] dark:bg-[conic-gradient(from_180deg_at_50%_50%,transparent_0deg,rgba(96,165,250,0.03)_90deg,transparent_180deg,rgba(96,165,250,0.03)_270deg,transparent_360deg)] opacity-30" style={{ animation: 'spin 25s linear infinite' }} />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-15 dark:opacity-10" />
      <div className="container relative mx-auto px-6 z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="bg-primary/10 dark:bg-primary/20 text-primary px-4 py-2 border-2 border-primary/30 text-sm font-black uppercase tracking-wider">
              Our process
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.title} className="group flex flex-col items-center text-center relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
                <div className={`relative w-28 h-28 bg-gradient-to-br ${step.gradient} border-2 border-white/20 flex items-center justify-center mb-6 shadow-xl group-hover:shadow-2xl group-hover:shadow-primary/40 group-hover:scale-110 transition-all duration-300`}>
                  <IconComponent className="w-12 h-12 text-white" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-background flex items-center justify-center border-2 border-primary shadow-lg group-hover:shadow-primary/30 group-hover:scale-110 transition-all duration-300">
                    <span className="text-primary font-black text-sm">{index + 1}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-black text-foreground mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-foreground-secondary leading-relaxed max-w-xs font-medium">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
