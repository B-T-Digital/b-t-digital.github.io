'use client';

import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const clients = [
  {
    name: 'Well Tested',
    url: 'https://welltested.btdigital.com.au',
    initials: 'WT',
    gradient: 'from-primary to-primary-600'
  },
  {
    name: 'Spectra Ingenuity',
    url: 'https://spectra-ingenuity.com.au',
    initials: 'SI',
    gradient: 'from-primary-600 to-primary-700'
  },
  {
    name: 'OnSpec',
    url: 'https://www.onspecdaq.com/',
    initials: 'OS',
    gradient: 'from-primary-700 to-primary-800'
  },
  {
    name: 'Innovera Partners',
    url: 'https://www.innoverapartners.com/',
    initials: 'IP',
    gradient: 'from-primary-400 to-primary-500'
  },
  {
    name: 'Circulr',
    url: 'https://www.circulr.earth/',
    initials: 'C',
    gradient: 'from-primary to-primary-600'
  },
  {
    name: 'ApiOro',
    url: 'https://www.apioro.com',
    initials: 'AO',
    gradient: 'from-primary-600 to-primary-700'
  }
];

export default function ClientsSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-background-secondary via-background to-background-secondary overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(59,130,246,0.06),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_50%_50%,rgba(96,165,250,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_50%,rgba(59,130,246,0.04),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_25%_50%,rgba(96,165,250,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_50%,rgba(59,130,246,0.04),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_75%_50%,rgba(96,165,250,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-15 dark:opacity-10" />
      <div className="container relative mx-auto px-6 z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="bg-primary/10 dark:bg-primary/20 text-primary px-4 py-2 border-2 border-primary/30 text-sm font-black uppercase tracking-wider">
              Our Partners
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 tracking-tight">
            Trusted by{' '}
            <span className="text-primary">
              the Best
            </span>
          </h2>
          <p className="text-foreground-secondary text-lg max-w-2xl mx-auto font-medium">
            We're proud to work with innovative companies across various industries
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {clients.map((client) => (
            <Link
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-card p-6 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 text-center border-2 border-border hover:border-primary hover:-translate-y-2 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${client.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/5 blur-xl transition-all duration-300" />
              <div className="relative z-10">
                <div className={`h-20 w-20 mx-auto mb-4 border-2 border-white/20 bg-gradient-to-br ${client.gradient} flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-primary/30 group-hover:scale-110 transition-all duration-300`}>
                  <span className="text-2xl font-black text-white">{client.initials}</span>
                </div>
                <h3 className="text-sm font-black text-card-foreground group-hover:text-primary transition-colors mb-1">
                  {client.name}
                </h3>
                <div className="flex items-center justify-center gap-1 text-foreground-muted group-hover:text-primary transition-colors">
                  <span className="text-xs font-bold">Visit</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
