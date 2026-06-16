import BlogCard from "@/components/BlogCard";

const Blog = () => {
  const posts = [
    {
      title: "How IoT is Shaping Africa's Future",
      excerpt: "Exploring the transformative potential of Internet of Things technology across African nations and how it's solving unique challenges.",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      category: "IoT",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f"
    },
    {
      title: "Prototyping vs Product Development: What's the Difference?",
      excerpt: "Understanding the critical distinctions between building a prototype and developing a market-ready product.",
      date: "Jan 10, 2025",
      readTime: "7 min read",
      category: "Startups",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Why Kids Should Learn Robotics Early",
      excerpt: "The cognitive and practical benefits of introducing children to robotics and programming at a young age.",
      date: "Jan 5, 2025",
      readTime: "4 min read",
      category: "Education",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789"
    },
    {
      title: "Building Your First Arduino Robot: A Beginner's Guide",
      excerpt: "Step-by-step tutorial for creating a simple obstacle-avoiding robot using Arduino and ultrasonic sensors.",
      date: "Dec 28, 2024",
      readTime: "10 min read",
      category: "Robotics",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      title: "The Future of Smart Cities in Nigeria",
      excerpt: "How IoT infrastructure and smart technology can transform urban planning and city management in Nigeria.",
      date: "Dec 20, 2024",
      readTime: "6 min read",
      category: "IoT",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b"
    },
    {
      title: "5 STEAM Projects Every Kid Should Try",
      excerpt: "Hands-on project ideas that combine science, technology, engineering, arts, and math for young learners.",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "Education",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
    },
    {
      title: "GPS Tracking Systems: Security and Privacy Balance",
      excerpt: "Discussing the benefits and ethical considerations of real-time location tracking technology.",
      date: "Dec 10, 2024",
      readTime: "5 min read",
      category: "IoT",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    },
    {
      title: "From Classroom to Career: Success Stories",
      excerpt: "Inspiring stories of students who started with our robotics classes and built successful tech careers.",
      date: "Dec 5, 2024",
      readTime: "6 min read",
      category: "Education",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c"
    },
    {
      title: "Solar Energy for Robotics Projects",
      excerpt: "How to integrate solar panels and power management into your robotics and IoT projects for sustainability.",
      date: "Nov 28, 2024",
      readTime: "7 min read",
      category: "Robotics",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276"
    }
  ];

  const categories = ["All", "IoT", "Robotics", "Education", "Startups"];

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
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                index === 0
                  ? "bg-primary text-primary-foreground"
                  : "bg-card hover:bg-muted border border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <BlogCard {...post} />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12 animate-fade-in">
          <button className="px-8 py-3 rounded-md border border-border hover:bg-muted transition-colors">
            Load More Articles
          </button>
        </div>

        {/* Newsletter CTA */}
        <section className="mt-20 p-12 rounded-lg gradient-hero text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
            Never Miss an Update
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest articles, project updates, and tech insights.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="px-6 py-3 rounded-md gradient-primary hover:opacity-90 transition-opacity font-medium">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
