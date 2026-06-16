import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface PillarCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const PillarCard = ({ icon: Icon, title, description }: PillarCardProps) => {
  return (
    <Card className="hover-scale shadow-card hover:shadow-glow transition-all duration-300 group text-center">
      <CardHeader>
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default PillarCard;
