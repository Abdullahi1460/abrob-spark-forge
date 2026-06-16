import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Radio, Zap, Microscope, ArrowRight } from "lucide-react";
import PillarCard from "@/components/PillarCard";
import heroImage from "@/assets/hero-robotics.jpg";
const Index = () => {
  const pillars = [{
    icon: Radio,
    title: "IoT & Robotics Solutions",
    description: "Cutting-edge GPS trackers, smart devices, and automation systems for real-world applications."
  }, {
    icon: Zap,
    title: "STEAM Education & Training",
    description: "Hands-on learning programs for kids and adults in robotics, electronics, and programming."
  }, {
    icon: Microscope,
    title: "Research & Innovation",
    description: "Developing next-generation technology solutions from prototype to production."
  }];
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0" style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />
        <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-6 text-foreground">
            Innovating the Future of<br />
            <span className="text-primary">Robotics, IoT & STEAM Education</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Building technology. Training innovators. Solving real problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-lg px-8" onClick={() => scrollToSection('solutions')}>
              🚀 Explore Solutions
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection('education')}>
              🎓 Start Learning
            </Button>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section id="pillars" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-center mb-12 animate-fade-in">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => <div key={index} className="animate-fade-in" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <PillarCard {...pillar} />
              </div>)}
          </div>
        </div>
      </section>

      {/* Quick Solutions Preview */}
      <section id="solutions" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
              Our Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From GPS tracking to smart automation, we build technology that works.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'GPS Trackers', desc: 'Real-time vehicle tracking with Firebase integration and SMS alerts.', link: '/solutions#gps-tracker' },
              { name: 'Smart Medicine Box', desc: 'IoT-powered medication management with scheduled reminders.', link: '/solutions#smart-medicine' },
              { name: 'Robotics Kits', desc: 'Complete kits with Arduino, sensors, and motors for learning.', link: '/solutions#robotics-kits' },
              { name: 'Solar Generators', desc: 'Portable solar power solutions for off-grid applications.', link: '/solutions#solar-generator' },
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-lg border border-border hover:border-primary transition-all hover-scale shadow-card hover:shadow-glow animate-fade-in flex flex-col" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{item.desc}</p>
                <Link to={item.link}>
                  <Button variant="ghost" size="sm" className="w-full justify-start hover:text-primary">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Preview */}
      <section id="education" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
                Empowering the Next Generation
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our STEAM education programs teach kids and adults hands-on robotics, programming, and electronics through engaging, project-based learning.
              </p>
              <ul className="space-y-3 mb-8">
  <li className="flex items-start">
    <span className="text-secondary mr-2 text-xl">✓</span>
    <span>Raspberry Pi Pico & MicroPython</span>
  </li>
  <li className="flex items-start">
    <span className="text-secondary mr-2 text-xl">✓</span>
    <span>Arduino & ESP32 Programming</span>
  </li>
  <li className="flex items-start">
    <span className="text-secondary mr-2 text-xl">✓</span>
    <span>Robotics & Electronics kit</span>
  </li>
  <li className="flex items-start">
    <span className="text-secondary mr-2 text-xl">✓</span>
    <span>CNC Machines & Automation</span>
  </li>
</ul>
              <a
                href="https://wa.me/2347070879257?text=Hello%20ABROB%20INDUSTRY!%20I%27m%20interested%20in%20joining%20one%20of%20your%20STEAM%20classes.%20Please%20share%20more%20details."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gradient-secondary flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.856L.057 23.887a.5.5 0 0 0 .608.63l6.247-1.635A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.001-1.368l-.358-.214-3.712.972.99-3.616-.234-.372A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                  </svg>
                  Join a Class Today
                </Button>
              </a>
            </div>
            <div className="rounded-lg overflow-hidden shadow-card animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              <img alt="Students learning robotics" className="w-full h-full object-cover" src="/lovable-uploads/b162befb-e461-45a2-a5ae-b2a480154606.png" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            Ready to Innovate?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you need custom IoT solutions or want to learn robotics, we're here to help.
          </p>
          <a
            href="https://wa.me/2347070879257?text=Hello%20ABROB%20INDUSTRY!%20I%27d%20like%20to%20get%20started.%20Please%20tell%20me%20more%20about%20your%20IoT%20solutions%20and%20robotics%20services."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="gradient-primary text-lg px-8 flex items-center gap-2 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.856L.057 23.887a.5.5 0 0 0 .608.63l6.247-1.635A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.001-1.368l-.358-.214-3.712.972.99-3.616-.234-.372A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
              </svg>
              Get Started Today
            </Button>
          </a>
        </div>
      </section>
    </div>;
};
export default Index;