import { useState, useRef } from "react";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogData";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";

type SubscribeStatus = 'idle' | 'loading' | 'success' | 'duplicate' | 'error';

const Blog = () => {
  const [status, setStatus] = useState<SubscribeStatus>('idle');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [errorMessage, setErrorMessage] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);
  const formRef = useRef<HTMLFormElement>(null);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    const email = emailInput.value.trim();

    if (!email) {
      setStatus('error');
      setErrorMessage('Please enter your email address.');
      return;
    }
    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert({ email, source: 'blog_newsletter' });

      if (error) {
        if (error.code === '23505') {
          setStatus('duplicate');
        } else {
          console.error('Supabase error:', error);
          setStatus('error');
          setErrorMessage('Something went wrong. Please try again later.');
        }
        return;
      }

      setStatus('success');
      formRef.current?.reset();
    } catch (err) {
      console.error('Unexpected error:', err);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };
  const categories = ["All", "IoT", "Robotics", "Education", "Startups"];
  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter((post) => post.category === selectedCategory);
  const visiblePosts = filteredPosts.slice(0, visibleCount);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6">Blog & Insights</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stories, tutorials, and insights from the world of robotics, IoT, and technology education.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => { setSelectedCategory(category); setVisibleCount(6); }}
                className={`min-h-11 touch-manipulation rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "border-border bg-card text-foreground hover:-translate-y-0.5 hover:bg-muted hover:text-foreground"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visiblePosts.map((post, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <BlogCard {...post} />
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="py-12 text-center text-muted-foreground">No articles found in this category yet.</p>
        )}

        {/* Load More */}
        <div className="text-center mt-12 animate-fade-in">
          {visibleCount < filteredPosts.length && (
            <button type="button" onClick={() => setVisibleCount((count) => count + 3)} className="rounded-md border border-border px-8 py-3 transition-colors hover:bg-muted">
              Load More Articles
            </button>
          )}
        </div>

        {/* Newsletter CTA */}
        <section className="mt-20 p-12 rounded-lg gradient-hero text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
            Never Miss an Update
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest articles, project updates, and tech insights.
          </p>
          <form ref={formRef} onSubmit={handleSubscribe} noValidate className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input 
                type="email" 
                name="email"
                placeholder="Your email address" 
                disabled={status === 'loading'}
                className="flex-1 px-4 py-3 rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
              />
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3 rounded-md gradient-primary hover:opacity-90 transition-opacity font-medium flex items-center justify-center min-w-[100px] disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  'Subscribe'
                )}
              </button>
            </div>

            {/* Feedback messages */}
            {status === 'success' && (
              <p className="mt-4 flex items-center justify-center gap-1.5 text-sm text-green-400">
                <CheckCircle2 className="h-4 w-4" />
                You're subscribed! Thank you.
              </p>
            )}
            {status === 'duplicate' && (
              <p className="mt-4 flex items-center justify-center gap-1.5 text-sm text-yellow-400">
                <CheckCircle2 className="h-4 w-4" />
                You're already subscribed!
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 flex items-center justify-center gap-1.5 text-sm text-red-400">
                <AlertCircle className="h-4 w-4" />
                {errorMessage}
              </p>
            )}
          </form>
        </section>
      </div>
    </div>
  );
};

export default Blog;
