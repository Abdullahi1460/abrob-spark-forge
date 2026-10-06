import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  features?: string[];
  detailPath?: string;
  orderMessage?: string;
}

const ProductCard = ({ title, description, image, features, detailPath = "/solutions", orderMessage }: ProductCardProps) => {
  const message = orderMessage ?? `Hello ABROB INDUSTRY! I would like to order ${title}. Please share availability and pricing.`;
  const orderUrl = `https://wa.me/2347070879257?text=${encodeURIComponent(message)}`;

  return (
    <Card className="group overflow-hidden shadow-card transition-all duration-300 hover-scale hover:shadow-glow">
      <div className="overflow-hidden"><img src={image} alt={title} loading="lazy" decoding="async" className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110" /></div>
      <CardHeader><CardTitle className="text-xl">{title}</CardTitle><CardDescription>{description}</CardDescription></CardHeader>
      {features && features.length > 0 && <CardContent><ul className="space-y-1 text-sm text-muted-foreground">{features.map((feature) => <li key={feature} className="flex items-center"><span className="mr-2 text-primary">✓</span>{feature}</li>)}</ul></CardContent>}
      <CardFooter className="gap-2"><Link to={detailPath} className="flex-1"><Button variant="default" className="w-full gradient-primary">View Details <ArrowUpRight className="ml-1 h-4 w-4" /></Button></Link><a href={orderUrl} target="_blank" rel="noreferrer" className="flex-1"><Button variant="outline" className="w-full">Order Now</Button></a></CardFooter>
    </Card>
  );
};

export default ProductCard;
