import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  features?: string[];
}

const ProductCard = ({ title, description, image, features }: ProductCardProps) => {
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
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {features && features.length > 0 && (
        <CardContent>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2 text-primary">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
      )}
      <CardFooter className="gap-2">
        <Button variant="default" className="flex-1 gradient-primary">View Details</Button>
        <Button variant="outline" className="flex-1">Order Now</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
