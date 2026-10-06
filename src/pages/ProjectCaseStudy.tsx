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

  const contactUrl = `https://wa.me/2347070879257?text=${encodeURIComponent(`Hello ABROB INDUSTRY! I would like to discuss ${project.shortTitle}.`)}`;

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
                <div className="mt-7 max-w-2xl rounded-2xl border border-primary/15 bg-background/80 p-4 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-[.16em] text-primary">Current stage</p>
                  <p className="mt-1 font-bold">{project.stage}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.stageDetail}</p>
                  <a href={contactUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline">Discuss this project <ArrowUpRight className="ml-1 h-4 w-4" /></a>
                </div>
              </div>
              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-glow animate-fade-in">
                <img src={project.image} alt={project.title} decoding="async" fetchPriority="high" className="aspect-[4/3] w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <section className="grid gap-6 py-16 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6"><Target className="mb-4 h-7 w-7 text-destructive" /><h2 className="mb-3 text-xl font-bold">The challenge</h2><p className="leading-relaxed text-muted-foreground">{project.problem}</p></div>
            <div className="rounded-2xl border border-border bg-card p-6"><Cpu className="mb-4 h-7 w-7 text-primary" /><h2 className="mb-3 text-xl font-bold">The solution</h2><p className="leading-relaxed text-muted-foreground">{project.solution}</p></div>
            <div className="rounded-2xl border border-border bg-card p-6"><Layers3 className="mb-4 h-7 w-7 text-secondary" /><h2 className="mb-3 text-xl font-bold">Current stage</h2><p className="leading-relaxed text-muted-foreground">{project.stageDetail}</p></div>
          </section>

          <section className="border-t border-border py-16">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[.2em] text-primary">Impact snapshot</p>
              <h2 className="text-3xl font-bold md:text-4xl">What this work is designed to change</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">These are the concrete outcomes and validation signals at the project&apos;s current stage. We separate intended impact from verified deployment data so each case study stays trustworthy.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {project.impactHighlights.map((highlight) => <article key={highlight.value} className="rounded-2xl border border-primary/15 bg-primary/5 p-6"><p className="text-2xl font-extrabold text-primary">{highlight.value}</p><h3 className="mt-5 text-lg font-bold">{highlight.label}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{highlight.detail}</p></article>)}
            </div>
          </section>

          <section className="grid gap-12 border-t border-border py-16 lg:grid-cols-2">
            <div><h2 className="mb-6 text-3xl font-bold">How the system works</h2><div className="space-y-3">{project.architecture.map((step, index) => <div key={step} className="flex items-start gap-4 rounded-xl border border-border bg-card p-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{index + 1}</span><p className="pt-1 font-medium">{step}</p></div>)}</div></div>
            <div><h2 className="mb-6 text-3xl font-bold">Core technologies</h2><div className="grid gap-3 sm:grid-cols-2">{project.technologies.map((tech) => <div key={tech} className="flex items-center gap-3 rounded-xl bg-muted/60 p-4"><CheckCircle2 className="h-5 w-5 shrink-0 text-primary" /><span className="text-sm font-medium">{tech}</span></div>)}</div></div>
          </section>

          <section className="grid gap-12 border-t border-border py-16 lg:grid-cols-2">
            <div><h2 className="mb-6 text-3xl font-bold">Capabilities</h2><ul className="space-y-4">{project.capabilities.map((item) => <li key={item} className="flex gap-3 text-muted-foreground"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{item}</li>)}</ul></div>
            <div><h2 className="mb-6 text-3xl font-bold">Where it can create value</h2><ul className="space-y-4">{project.applications.map((item) => <li key={item} className="flex gap-3 text-muted-foreground"><ArrowUpRight className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />{item}</li>)}</ul></div>
          </section>

          <section className="border-t border-border py-16">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[.2em] text-primary">Project evidence</p>
              <h2 className="text-3xl font-bold md:text-4xl">Engineering in context</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">A closer look at the people, prototypes, and environments that inform this work.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {project.gallery.map((item) => <figure key={item.src} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm"><div className="overflow-hidden"><img src={item.src} alt={item.alt} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" /></div><figcaption className="p-4"><p className="text-xs font-bold uppercase tracking-[.14em] text-primary">{item.label}</p><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.alt}</p></figcaption></figure>)}
            </div>
          </section>

          <section className="border-t border-border py-16">
            <div className="rounded-3xl bg-muted/60 p-8 md:p-10">
              <p className="mb-3 text-sm font-bold uppercase tracking-[.2em] text-primary">How we measure success</p>
              <h2 className="max-w-2xl text-3xl font-bold md:text-4xl">The proof points we will track as this work grows</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-3">{project.successMeasures.map((measure, index) => <div key={measure} className="rounded-2xl bg-background p-5 shadow-sm"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{index + 1}</span><p className="mt-4 font-semibold leading-relaxed">{measure}</p></div>)}</div>
              <p className="mt-7 max-w-3xl text-sm leading-relaxed text-muted-foreground">Verified figures will be added as pilots, customer use, and deployments provide measurable data.</p>
            </div>
          </section>

          <section className="rounded-3xl bg-primary p-8 text-primary-foreground md:p-12">
            <div className="max-w-3xl"><p className="mb-3 text-sm font-bold uppercase tracking-[.2em] text-primary-foreground/70">Build with ABROB</p><h2 className="mb-4 text-3xl font-bold md:text-4xl">Have a challenge that needs practical engineering?</h2><p className="mb-7 text-primary-foreground/80">Our projects begin with real problems and grow through prototyping, testing, and product development. Let’s discuss what we can build together.</p><Link to="/contact?intent=consultation#consultation"><Button variant="secondary" size="lg">Book a consultation <ArrowUpRight className="ml-2 h-4 w-4" /></Button></Link></div>
          </section>
        </div>
      </main>
    </>
  );
};

export default ProjectCaseStudy;
