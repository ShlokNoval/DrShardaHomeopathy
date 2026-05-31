import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import CTABanner from "@/components/home/CTABanner";
import type { Metadata } from "next";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default function BlogDetail({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* Hero Image */}
      <section className="relative h-72 sm:h-96">
        <Image src={post.featuredImage} alt={post.title} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-4 transition-colors">
              <ArrowLeft size={16} /> Back to Blog
            </Link>
            <span className="block text-secondary text-sm font-medium mb-2">{post.category}</span>
            <h1 className="text-white text-2xl sm:text-4xl font-playfair mb-3">{post.title}</h1>
            <div className="flex items-center gap-4 text-white/70 text-sm">
              <span className="flex items-center gap-1"><Calendar size={14} />{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
              <span className="flex items-center gap-1"><Clock size={14} />{post.readTime}</span>
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-12 sm:py-16">
        <article className="max-w-3xl mx-auto px-4 prose prose-lg prose-headings:font-playfair prose-headings:text-charcoal prose-p:text-muted prose-a:text-primary prose-li:text-muted prose-strong:text-charcoal" dangerouslySetInnerHTML={{ __html: post.content }} />
      </section>

      {/* Related Posts */}
      <section className="bg-cream py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-playfair text-2xl text-charcoal text-center mb-8">More Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {otherPosts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group block bg-white rounded-2xl overflow-hidden card-hover">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={p.featuredImage} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="33vw" />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-charcoal group-hover:text-primary transition-colors text-sm line-clamp-2">{p.title}</h4>
                  <p className="text-muted text-xs mt-2">{p.readTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
