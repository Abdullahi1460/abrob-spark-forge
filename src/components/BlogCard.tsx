import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const BlogCard = ({ slug, title, excerpt, date, readTime, category, image }: BlogCardProps) => {
  return (
    <Card className="group overflow-hidden shadow-card transition-all duration-300 hover-scale hover:shadow-glow">
      <div className="overflow-hidden"><img src={image} alt={title} className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110" /></div>
      <CardHeader>
        <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground"><span className="rounded-full bg-primary/10 px-2 py-1 text-primary">{category}</span><div className="flex items-center gap-1"><Calendar className="h-3 w-3" /><span>{date}</span></div><div className="flex items-center gap-1"><Clock className="h-3 w-3" /><span>{readTime}</span></div></div>
        <CardTitle className="line-clamp-2 text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent><CardDescription className="line-clamp-3">{excerpt}</CardDescription></CardContent>
      <CardFooter><Link to={`/blog/${slug}`} className="w-full"><Button variant="ghost" className="w-full">Read More <ArrowRight className="ml-2 h-4 w-4" /></Button></Link></CardFooter>
    </Card>
  );
};

export default BlogCard;
