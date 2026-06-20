import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { blogPosts } from "@/data/blog";
import { Calendar, Clock } from "lucide-react";

export default function BlogPreview() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <ScrollReveal className="hidden md:block">
      <section className="relative bg-cream-alt py-16 sm:py-24 overflow-hidden">
        <Image
          src="/insights-bg.jpg"
          alt="Health Insights Background"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Health Insights"
            subtitle="Articles and tips from Dr. Sharda on homeopathic wellness"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {latestPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden card-hover border border-transparent"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-5">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-muted text-xs mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(post.date).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="font-semibold text-charcoal group-hover:text-primary transition-colors mb-2 line-clamp-2">
                      {post.title}
                    </h4>

                    {/* Excerpt */}
                    <p className="text-muted text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/blog" className="btn-ghost text-base px-8 py-3">
              View All Articles &rarr;
            </Link>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
