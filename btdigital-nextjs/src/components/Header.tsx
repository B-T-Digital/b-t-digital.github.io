'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { SimpleThemeToggle } from '@/components/ui/SimpleThemeToggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-border backdrop-blur-xl bg-background/80 dark:bg-background/90 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 text-2xl font-black group transition-transform hover:scale-105">
              <Image
                src="/logo.png"
                alt="B&T Digital"
                width={220}
                height={60}
                className="h-12 w-auto transition-opacity group-hover:opacity-90"
                priority
              />
              <span className="text-foreground">
                B&T Digital
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-4 md:space-x-6">
            <div className="hidden md:flex items-center space-x-2 px-4 py-2 border-2 border-border hover:bg-background-secondary transition-colors">
              <Phone 
                size={18}
                className="text-primary"
              />
              <Link 
                href="tel:+61457271181" 
                className="text-foreground-secondary hover:text-foreground transition-colors text-sm font-bold"
              >
                +61 457 271 181
              </Link>
            </div>
            <SimpleThemeToggle />
            <Link 
              href="mailto:bandtdigital.contact@gmail.com" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 border-2 border-primary font-bold transition-all duration-300 text-sm shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 uppercase tracking-wide"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
