import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import { getBlogPostBySlug } from "@/data/blogData";

const BlogArticle = () => {
  const { slug } = useParams();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) return <main className="container mx-auto min-h-[70vh] px-4 py-24 text-center"><h1 className="mb-4 text-4xl font-bold">Article not found</h1><Link to="/blog"><Button><ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog</Button></Link></main>;

  return <>
    <SEO title={`${post.title} | ABROB INDUSTRY`} description={post.excerpt} />
    <main className="min-h-screen pb-24">
      <section className="border-b border-border bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 md:py-28"><div className="container mx-auto max-w-5xl px-4"><Link to="/blog" className="mb-8 inline-flex items-center text-sm font-semibold text-primary"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog</Link><Badge className="mb-5">{post.category}</Badge><h1 className="max-w-4xl text-4xl font-extrabold tracking-tight md:text-6xl">{post.title}</h1><div className="mt-6 flex flex-wrap gap-5 text-sm text-muted-foreground"><span className="flex items-center gap-2"><Calendar className="h-4 w-4" />{post.date}</span><span className="flex items-center gap-2"><Clock className="h-4 w-4" />{post.readTime}</span></div></div></section>
      <article className="container mx-auto max-w-5xl px-4"><img src={post.image} alt={post.title} className="-mt-8 aspect-[16/7] w-full rounded-3xl border border-border object-cover shadow-glow" /><div className="mx-auto max-w-3xl py-14"><p className="mb-10 text-xl leading-relaxed text-muted-foreground">{post.excerpt}</p><div className="space-y-7">{post.body.map((paragraph) => <p key={paragraph} className="text-lg leading-relaxed text-foreground/80">{paragraph}</p>)}</div><div className="mt-14 rounded-3xl bg-primary p-8 text-primary-foreground"><h2 className="mb-3 text-2xl font-bold">Want to build with ABROB?</h2><p className="mb-6 text-primary-foreground/80">Let&apos;s discuss a practical robotics, IoT, energy, or education project.</p><a href="https://wa.me/2347070879257?text=Hello%20ABROB%20INDUSTRY!%20I%20read%20your%20article%20and%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer"><Button variant="secondary">Start a Conversation <ArrowUpRight className="ml-2 h-4 w-4" /></Button></a></div></div></article>
    </main>
  </>;
};

export default BlogArticle;
