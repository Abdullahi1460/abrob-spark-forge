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
          <p className="mb-4 text-sm font-bold uppercase tracking-[.2em] text-primary">Evidence-led engineering portfolio</p>
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">Projects &amp; Case Studies</h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">The real problems behind our work, the systems we are building, and the outcomes we are committed to measuring across robotics, IoT, energy, and education.</p>
        </div>

        <div className="space-y-12">
          {projectCaseStudies.map((project, index) => (
            <Card key={project.slug} className="overflow-hidden shadow-card transition-all animate-fade-in hover:shadow-glow" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="overflow-hidden">
                  <img src={project.image} alt={project.title} loading="lazy" decoding="async" className="h-full min-h-64 w-full object-cover transition-transform duration-300 hover:scale-105" />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-8">
                  <CardHeader className="mb-4 p-0">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[.18em] text-primary">{project.eyebrow}</p>
                    <CardTitle className="mb-4 text-3xl">{project.shortTitle}</CardTitle>
                    <div className="flex flex-wrap gap-2">{project.tags.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}</div>
                    <div className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> {project.stage}</div>
                  </CardHeader>
                  <CardContent className="space-y-4 p-0">
                    <p className="leading-relaxed text-muted-foreground">{project.summary}</p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl bg-destructive/5 p-4"><h3 className="mb-2 text-sm font-semibold text-destructive">Challenge</h3><p className="text-sm leading-relaxed text-muted-foreground">{project.problem}</p></div>
                      <div className="rounded-2xl bg-primary/5 p-4"><p className="mb-2 text-xs font-bold uppercase tracking-[.14em] text-primary">Impact focus</p><h3 className="text-lg font-bold">{project.impactHighlights[0].value}</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{project.impactHighlights[0].detail}</p></div>
                    </div>
                    <Link to={`/projects/${project.slug}`} className="inline-block">
                      <Button variant="outline" className="mt-3">Explore the Case Study <ArrowUpRight className="ml-2 h-4 w-4" /></Button>
                    </Link>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <section className="mt-20 rounded-lg gradient-hero p-12 text-center animate-fade-in">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Have a Project in Mind?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">Bring us the challenge, context, and outcome you have in mind. We&apos;ll help you identify a practical next step.</p>
          <Link to="/contact?intent=consultation#consultation"><Button size="lg" className="gradient-primary">Book a consultation <ArrowUpRight className="ml-2 h-4 w-4" /></Button></Link>
        </section>
      </div>
    </div>
  );
};

export default Projects;
