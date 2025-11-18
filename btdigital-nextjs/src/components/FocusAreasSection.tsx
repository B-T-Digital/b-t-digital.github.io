'use client';

import { Globe, Link2, Database } from 'lucide-react';

const focusAreas = [
  {
    category: 'PROCESS',
    title: 'IoT Development',
    description: 'We specialise in seamlessly deploying IoT devices and integrating them with cloud computing, analytics, and human expertise to digitise your industrial processes. Our IoT solutions empower asset-intensive companies to connect hundreds of devices through AWS, driving improvements in predictive quality, maintenance analytics, asset condition monitoring, and process optimisation.',
    icon: Globe,
    gradient: 'from-primary/10 to-primary-600/10',
    iconColor: 'text-primary'
  },
  {
    category: 'OPERATIONS',
    title: 'Systems Integrations',
    description: 'Our commitment to excellence in system integration means we meticulously assess, design, and implement solutions that harmonize your technology ecosystem. By seamlessly bridging the gaps between business units, we empower your company with real-time data accessibility, fostering better decision-making and process optimization.',
    icon: Link2,
    gradient: 'from-primary-600/10 to-primary-700/10',
    iconColor: 'text-primary-600'
  },
  {
    category: 'DATA SERVICE',
    title: 'Data Management',
    description: 'Our cloud-based data management services provide a robust and scalable solution for efficiently storing, organizing, and securing your valuable data assets. Leveraging the power of cloud technology, we offer a comprehensive suite of services that encompass data storage, backup, synchronization, and access control.',
    icon: Database,
    gradient: 'from-primary-700/10 to-primary-800/10',
    iconColor: 'text-primary-700'
  }
];

export default function FocusAreasSection() {
  return (
    <section id="news" className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent via-primary/3 to-accent/8 dark:from-primary/12 dark:via-transparent dark:via-primary/5 dark:to-accent/12" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(59,130,246,0.1),transparent_65%)] dark:bg-[radial-gradient(ellipse_at_50%_30%,rgba(96,165,250,0.15),transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_70%,rgba(59,130,246,0.08),transparent_65%)] dark:bg-[radial-gradient(ellipse_at_50%_70%,rgba(96,165,250,0.12),transparent_65%)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20 dark:opacity-15" />
      <div className="container relative mx-auto px-6 z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 tracking-tight">
            Areas of{' '}
            <span className="text-primary">
              Focus
            </span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {focusAreas.map((area) => {
            const IconComponent = area.icon;
            return (
              <div 
                key={area.title} 
                className="group relative bg-background-secondary p-8 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 border-2 border-border hover:border-primary hover:-translate-y-2 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/5 blur-xl transition-all duration-300" />
                <div className="relative z-10">
                  <div className={`inline-flex p-4 border-2 border-primary/30 bg-gradient-to-br ${area.gradient} mb-6 group-hover:scale-110 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300`}>
                    <IconComponent className={`w-8 h-8 ${area.iconColor}`} />
                  </div>
                  <div className="mb-4">
                    <span className="bg-primary/10 dark:bg-primary/20 text-primary px-4 py-1.5 border-2 border-primary/30 text-xs font-black uppercase tracking-wider">
                      {area.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-foreground mb-4 group-hover:text-primary transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-foreground-secondary leading-relaxed font-medium">
                    {area.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
