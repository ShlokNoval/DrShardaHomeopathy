import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import ScrollReveal from "@/components/shared/ScrollReveal";
import FloatingGlobules from "@/components/shared/FloatingGlobules";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Health Insights",
  description: "Health articles and homeopathic wellness tips by Dr. Sharda Tawale. Read about skin care, respiratory health, women's health, and more.",
};

export default function BlogPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-primary to-primary-dark py-20 overflow-hidden">
        <FloatingGlobules count={10} opacity={0.2} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block border border-white/30 text-white text-sm px-4 py-1.5 rounded-full mb-4">📝 Blog</span>
          <h1 className="text-white mb-4">Health Insights</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Articles and tips from Dr. Sharda on homeopathic wellness</p>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.08}>
                <Link href={`/blog/${post.slug}`} className="group block bg-white rounded-2xl overflow-hidden card-hover h-full">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={post.featuredImage} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                    <span className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-2.5 py-1 rounded-full">{post.category}</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-4 text-muted text-xs mb-3">
                      <span className="flex items-center gap-1"><Calendar size={12} />{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                      <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                    </div>
                    <h3 className="font-semibold text-charcoal group-hover:text-primary transition-colors mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-muted text-sm line-clamp-3 mb-3">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">Read more <ArrowRight size={14} /></span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
