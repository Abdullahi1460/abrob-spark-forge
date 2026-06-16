import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const BlogCard = ({ title, excerpt, date, readTime, category, image }: BlogCardProps) => {
  return (
    <Card className="overflow-hidden hover-scale shadow-card hover:shadow-glow transition-all duration-300 group">
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" 
        />
      </div>
      <CardHeader>
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
          <span className="px-2 py-1 rounded-full bg-primary/10 text-primary">{category}</span>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{readTime}</span>
          </div>
        </div>
        <CardTitle className="text-xl line-clamp-2">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-3">{excerpt}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="w-full">Read More →</Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
