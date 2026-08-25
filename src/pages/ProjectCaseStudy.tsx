import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Cpu, Layers3, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { getProjectBySlug } from "@/data/projectData";

const ProjectCaseStudy = () => {
  const { slug } = useParams();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <main className="container mx-auto min-h-[70vh] px-4 py-24 text-center">
        <h1 className="mb-4 text-4xl font-bold">Project not found</h1>
        <p className="mb-8 text-muted-foreground">The case study you requested is not available.</p>
        <Link to="/projects"><Button><ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects</Button></Link>
      </main>
    );
  }

  return (
    <>
      <SEO title={`${project.shortTitle} | ABROB INDUSTRY`} description={project.summary} />
      <main className="min-h-screen pb-24">
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 md:py-28">
          <div className="container relative mx-auto px-4">
            <Link to="/projects" className="mb-8 inline-flex items-center text-sm font-semibold text-primary transition hover:gap-3">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Link>
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
              <div className="animate-fade-in">
                <p className="mb-4 text-sm font-bold uppercase tracking-[.2em] text-primary">{project.eyebrow}</p>
                <h1 className="mb-6 max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">{project.title}</h1>
                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">{project.summary}</p>
                <div className="mt-7 flex flex-wrap gap-2">{project.tags.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}</div>
              </div>
              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-glow animate-fade-in">
                <img src={project.image} alt={project.title} className="aspect-[4/3] w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <section className="grid gap-6 py-16 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6"><Target className="mb-4 h-7 w-7 text-destructive" /><h2 className="mb-3 text-xl font-bold">The challenge</h2><p className="leading-relaxed text-muted-foreground">{project.problem}</p></div>
            <div className="rounded-2xl border border-border bg-card p-6"><Cpu className="mb-4 h-7 w-7 text-primary" /><h2 className="mb-3 text-xl font-bold">The approach</h2><p className="leading-relaxed text-muted-foreground">{project.solution}</p></div>
            <div className="rounded-2xl border border-border bg-card p-6"><Layers3 className="mb-4 h-7 w-7 text-secondary" /><h2 className="mb-3 text-xl font-bold">The direction</h2><p className="leading-relaxed text-muted-foreground">{project.development}</p></div>
          </section>

          <section className="grid gap-12 border-t border-border py-16 lg:grid-cols-2">
            <div><h2 className="mb-6 text-3xl font-bold">How the system works</h2><div className="space-y-3">{project.architecture.map((step, index) => <div key={step} className="flex items-start gap-4 rounded-xl border border-border bg-card p-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{index + 1}</span><p className="pt-1 font-medium">{step}</p></div>)}</div></div>
            <div><h2 className="mb-6 text-3xl font-bold">Core technologies</h2><div className="grid gap-3 sm:grid-cols-2">{project.technologies.map((tech) => <div key={tech} className="flex items-center gap-3 rounded-xl bg-muted/60 p-4"><CheckCircle2 className="h-5 w-5 shrink-0 text-primary" /><span className="text-sm font-medium">{tech}</span></div>)}</div></div>
          </section>

          <section className="grid gap-12 border-t border-border py-16 lg:grid-cols-2">
            <div><h2 className="mb-6 text-3xl font-bold">Capabilities</h2><ul className="space-y-4">{project.capabilities.map((item) => <li key={item} className="flex gap-3 text-muted-foreground"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{item}</li>)}</ul></div>
            <div><h2 className="mb-6 text-3xl font-bold">Where it can create value</h2><ul className="space-y-4">{project.applications.map((item) => <li key={item} className="flex gap-3 text-muted-foreground"><ArrowUpRight className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />{item}</li>)}</ul></div>
          </section>

          <section className="rounded-3xl bg-primary p-8 text-primary-foreground md:p-12">
            <div className="max-w-3xl"><p className="mb-3 text-sm font-bold uppercase tracking-[.2em] text-primary-foreground/70">Build with ABROB</p><h2 className="mb-4 text-3xl font-bold md:text-4xl">Have a challenge that needs practical engineering?</h2><p className="mb-7 text-primary-foreground/80">Our projects begin with real problems and grow through prototyping, testing, and product development. Let’s discuss what we can build together.</p><a href="https://wa.me/2347070879257?text=Hello%20ABROB%20INDUSTRY!%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer"><Button variant="secondary" size="lg">Start a Conversation <ArrowUpRight className="ml-2 h-4 w-4" /></Button></a></div>
          </section>
        </div>
      </main>
    </>
  );
};

export default ProjectCaseStudy;
