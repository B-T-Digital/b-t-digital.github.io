'use client';

import Link from 'next/link';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Ben Israel',
    role: 'Cloud Engineering Specialist',
    linkedin: 'https://www.linkedin.com/in/israelben/',
    headshot: '/assets/headshots/ben-israel.png'
  },
  {
    name: 'Tony Cerqui',
    role: 'Process Engineering Specialist',
    linkedin: 'https://www.linkedin.com/in/anthonycerqui/',
    headshot: '/assets/headshots/anthony-cerqui.png'
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="relative py-24 bg-background-secondary overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent via-primary/3 to-primary/8 dark:from-primary/12 dark:via-transparent dark:via-primary/5 dark:to-primary/12" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_50%_50%,rgba(96,165,250,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20 dark:opacity-15" />
      <div className="container relative mx-auto px-6 z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="bg-primary/10 dark:bg-primary/20 text-primary px-4 py-2 border-2 border-primary/30 text-sm font-black uppercase tracking-wider">
              Our Team
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 tracking-tight">
            Meet the{' '}
            <span className="text-primary">
              Team
            </span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <Link
              key={member.name}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-card p-8 shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 text-center border-2 border-border hover:border-primary hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/5 blur-xl transition-all duration-300" />
              <div className="relative z-10">
                <div className="w-32 h-32 bg-background-secondary rounded-full mx-auto mb-6 flex items-center justify-center border-2 border-primary/30 group-hover:border-primary group-hover:scale-110 transition-all duration-300 overflow-hidden shadow-lg group-hover:shadow-primary/30">
                  <Image
                    src={member.headshot}
                    alt={`${member.name} headshot`}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-black text-card-foreground mb-2 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-foreground-secondary font-medium">
                  {member.role}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
