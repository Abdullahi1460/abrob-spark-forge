import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { projectCaseStudies } from "@/data/projectData";

const Projects = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 animate-fade-in text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[.2em] text-primary">Engineering portfolio</p>
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">Projects & R&amp;D</h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">Real-world innovation through robotics, IoT, energy technology, embedded systems, automation, and hands-on technical education.</p>
        </div>

        <div className="space-y-12">
          {projectCaseStudies.map((project, index) => (
            <Card key={project.slug} className="overflow-hidden shadow-card transition-all animate-fade-in hover:shadow-glow" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="overflow-hidden">
                  <img src={project.image} alt={project.title} className="h-full min-h-64 w-full object-cover transition-transform duration-300 hover:scale-105" />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-8">
                  <CardHeader className="mb-4 p-0">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[.18em] text-primary">{project.eyebrow}</p>
                    <CardTitle className="mb-4 text-3xl">{project.shortTitle}</CardTitle>
                    <div className="flex flex-wrap gap-2">{project.tags.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}</div>
                  </CardHeader>
                  <CardContent className="space-y-4 p-0">
                    <p className="leading-relaxed text-muted-foreground">{project.summary}</p>
                    <div><h3 className="mb-1 font-semibold text-destructive">Challenge</h3><p className="text-sm text-muted-foreground">{project.problem}</p></div>
                    <div><h3 className="mb-1 font-semibold text-primary">Approach</h3><p className="text-sm text-muted-foreground">{project.solution}</p></div>
                    <Link to={`/projects/${project.slug}`} className="inline-block">
                      <Button variant="outline" className="mt-3">View Case Study <ArrowUpRight className="ml-2 h-4 w-4" /></Button>
                    </Link>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <section className="mt-20 rounded-lg gradient-hero p-12 text-center animate-fade-in">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Have a Project in Mind?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">We love tackling challenging problems. Let&apos;s collaborate on your next innovation.</p>
          <a href="https://wa.me/2347070879257?text=Hello%20ABROB%20INDUSTRY!%20I%20have%20a%20project%20in%20mind%20and%20would%20like%20to%20discuss%20collaboration%20with%20you." target="_blank" rel="noopener noreferrer"><Button size="lg" className="gradient-primary">Start a Conversation <ArrowUpRight className="ml-2 h-4 w-4" /></Button></a>
        </section>
      </div>
    </div>
  );
};

export default Projects;
