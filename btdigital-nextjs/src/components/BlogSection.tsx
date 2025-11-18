'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getAllHighlightedBlogPosts, type HighlightedBlogPost } from '@/app/blog/highlightedblogs';

/**
 * Blog Section Component
 * 
 * Functional Requirements:
 * - Display featured blog posts from highlightedblogs.ts
 * - Show blog post images with proper alt text and responsive sizing
 * - Provide reading time and publication date information
 * - Support hover effects and smooth transitions
 * - Maintain responsive grid layout for different screen sizes
 * - Link to individual blog post pages
 */

export default function BlogSection() {
  const blogPosts = getAllHighlightedBlogPosts();

  return (
    <section id="blog" className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent via-primary/3 to-primary/8 dark:from-primary/12 dark:via-transparent dark:via-primary/5 dark:to-primary/12" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(59,130,246,0.1),transparent_65%)] dark:bg-[radial-gradient(ellipse_at_50%_30%,rgba(96,165,250,0.15),transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_70%,rgba(59,130,246,0.08),transparent_65%)] dark:bg-[radial-gradient(ellipse_at_50%_70%,rgba(96,165,250,0.12),transparent_65%)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20 dark:opacity-15" />
      <div className="container relative mx-auto px-6 z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="bg-primary/10 dark:bg-primary/20 text-primary px-4 py-2 border-2 border-primary/30 text-sm font-black uppercase tracking-wider">
              Featured Blogs
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 tracking-tight">
            Insights &{' '}
            <span className="text-primary">
              Updates
            </span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post: HighlightedBlogPost) => (
            <article key={post.id} className="group relative bg-background-secondary overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 border-2 border-border hover:border-primary hover:-translate-y-2">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/5 blur-xl transition-all duration-300" />
              <div className="h-48 relative overflow-hidden border-b-2 border-border group-hover:border-primary transition-colors bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20">
                {post.imagePath.endsWith('.svg') ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={post.imagePath}
                      alt={post.imageAlt}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                ) : (
                  <Image
                    src={post.imagePath}
                    alt={post.imageAlt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110 dark:brightness-90 dark:contrast-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/20">
                            <svg class="w-24 h-24 text-primary opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                        `;
                      }
                    }}
                  />
                )}
              </div>
              <div className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-primary font-black">{post.date}</p>
                  <p className="text-xs text-foreground-muted font-bold">{post.readingTime} min read</p>
                </div>
                <h3 className="text-lg font-black text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-foreground-secondary text-sm mb-4 line-clamp-3 font-medium">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs bg-primary/10 text-primary px-2 py-1 border border-primary/30 font-bold uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="text-primary hover:text-primary/80 font-black text-sm transition-colors inline-flex items-center gap-1 uppercase tracking-wide"
                >
                  Read More 
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
