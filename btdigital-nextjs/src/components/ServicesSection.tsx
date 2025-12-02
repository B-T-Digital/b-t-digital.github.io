'use client';

import { Brain, Settings, Video, Database } from 'lucide-react';

/**
 * Functional Requirements:
 * - Display four service offerings in a responsive grid layout (2 columns on desktop, 1 on mobile)
 * - Render each service with icon, title, and description
 * - Provide hover effects with gradient overlays and elevation changes
 * - Maintain consistent spacing and visual hierarchy
 * - Support theme-aware styling for light and dark modes
 * - Ensure accessibility with semantic HTML and proper contrast ratios
 */

const services = [
  {
    id: 'applications',
    title: 'Applications, Integrations, and Automation',
    description: 'We provide comprehensive application, integration, and automation services, including custom application builds, seamless migrations, expert integration services, and tailored configuration. We aim to optimise usability and performance and enhance operational efficiency. Our integration experience covers a broad range of SaaS platforms.',
    icon: Settings,
    gradient: 'from-primary-600/10 to-primary-700/10',
    iconColor: 'text-primary-600'
  },
    {
      id: 'data-warehousing',
    title: 'Data Warehousing',
    description: 'We provide comprehensive data warehousing solutions, including Snowflake implementation, data architecture design, ETL/ELT pipeline development, and data governance. Our services help you build scalable, performant data warehouses that enable advanced analytics and business intelligence.',
    icon: Database,
    gradient: 'from-primary-400/10 to-primary-500/10',
    iconColor: 'text-primary-400'
  },
  {
    id: 'ai-services',
    title: 'Machine Learning Services',
    description: 'We offer comprehensive machine learning and AI services, including machine learning model development, LLM integration and fine-tuning, AI strategy consulting, and custom AI solutions tailored to your business needs. Our expertise spans traditional ML approaches enhanced with modern LLM capabilities to deliver real ROI.',
    icon: Brain,
    gradient: 'from-primary/10 to-primary-600/10',
    iconColor: 'text-primary'
  },
  {
    id: 'surveillance',
    title: 'Integrated Surveillance',
    description: 'We deliver integrated surveillance and monitoring solutions encompassing high-quality camera and sensor deployment, network integration, and virtual counter part technology. Our seamless integration with virtual replica platforms enables real-time monitoring, analysis, and decision-making based on physical visualised data.',
    icon: Video,
    gradient: 'from-primary-700/10 to-primary-800/10',
    iconColor: 'text-primary-700'
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-background-secondary via-background to-background-secondary overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(59,130,246,0.06),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_50%_50%,rgba(96,165,250,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(59,130,246,0.04),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_20%_50%,rgba(96,165,250,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(59,130,246,0.04),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_80%_50%,rgba(96,165,250,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-15 dark:opacity-10" />
      <div className="container relative mx-auto px-6 z-10">
        <div className="text-center mb-20">
          <p className="inline-block bg-primary/10 dark:bg-primary/20 text-primary px-4 py-2 border-2 border-primary/30 text-sm font-black uppercase tracking-wider mb-6">
            OUR SERVICES
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 tracking-tight">
            Services to help your business{' '}
            <span className="text-primary">achieve success</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id} 
                className="group relative bg-card p-8 shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 border-2 border-border hover:border-primary hover:-translate-y-2 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/5 blur-xl transition-all duration-300" />
                <div className="relative z-10">
                  <div className={`inline-flex p-4 border-2 border-primary/30 bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300`}>
                    <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-black text-card-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground-secondary leading-relaxed font-medium">
                    {service.description}
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
