import SEO from "@/components/SEO";
import { HardDrive, Cpu, Brain, BookOpen, Target, Eye, Award, Users, Linkedin, Twitter, Github } from "lucide-react";

const About = () => {
  return <>
      <SEO title="About ABROB INDUSTRY – DeepTech in Africa" description="DeepTech, Africa, Nigeria, Hardtech, IoT, Robotics, Embedded Systems – learn about our mission and vision." />
      <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6">About ABROB INDUSTRY</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to bring technology education and innovation to all across Africa.
          </p>
        </div>

<section className="mb-20 animate-fade-in">
  <div className="grid md:grid-cols-2 gap-12 items-center">
    <div className="text-left">
      <h2 className="text-3xl font-poppins font-bold mb-6">Who We Are</h2>
      <p className="text-lg text-muted-foreground mb-4">
        ABROB INDUSTRY is a pioneering robotics, IoT, and STEAM education startup based in Nigeria. We specialize in creating innovative technology solutions while empowering the next generation through hands-on learning experiences.
      </p>
      
      <p className="text-lg text-muted-foreground mb-8">
        From GPS tracking systems to robotics kits, we bridge the gap between cutting‑edge technology and practical education, making STEM accessible to everyone.
      </p>
      
      {/* Company Overview */}
      <div className="flex justify-center space-x-6">
        <div className="flex flex-col items-center">
          <HardDrive className="h-8 w-8 text-primary" />
          <span className="mt-2 text-sm font-medium">Hardtech</span>
        </div>
        <div className="flex flex-col items-center">
          <Cpu className="h-8 w-8 text-primary" />
          <span className="mt-2 text-sm font-medium">IoT</span>
        </div>
        <div className="flex flex-col items-center">
          <Cpu className="h-8 w-8 text-primary" />
          <span className="mt-2 text-sm font-medium">Robotics</span>
        </div>
        <div className="flex flex-col items-center">
          <Brain className="h-8 w-8 text-primary" />
          <span className="mt-2 text-sm font-medium">AI</span>
        </div>
        <div className="flex flex-col items-center">
          <BookOpen className="h-8 w-8 text-primary" />
          <span className="mt-2 text-sm font-medium">Education</span>
        </div>
      </div>
    </div>
    <div className="rounded-lg overflow-hidden shadow-card">
      <img alt="Technology and innovation" className="w-full h-full object-cover" src="/lovable-uploads/95a3cc17-4112-4e22-94ab-f0eedb434fb1.jpg" />
    </div>
  </div>
</section>

        {/* Mission, Vision, Values */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg bg-card shadow-card hover:shadow-glow transition-all hover-scale animate-fade-in">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-poppins font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                Empowering the next generation through robotics and IoT innovation while providing practical solutions to real-world challenges.
              </p>
            </div>
            <div className="p-8 rounded-lg bg-card shadow-card hover:shadow-glow transition-all hover-scale animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
              <Eye className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-poppins font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                Our main vision is to empower Africa through robotics and IoT innovation, fostering a generation of technology creators and problem solvers.
              </p>
            </div>
            <div className="p-8 rounded-lg bg-card shadow-card hover:shadow-glow transition-all hover-scale animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-poppins font-bold mb-4">Our Values</h3>
              <p className="text-muted-foreground">
                Innovation, Education, Quality, Accessibility, and Community. We believe technology should be for everyone.
              </p>
            </div>
          </div>
        </section>



        {/* Team Section */}
        <section className="mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <div className="inline-flex h-9 items-center justify-center rounded-full bg-muted px-4 text-sm font-medium text-primary mb-4 border border-border">
              <Users className="h-4 w-4 mr-2" /> Our Team
            </div>
            <h2 className="text-4xl font-poppins font-bold mb-4">Meet the Innovators</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate minds driving pioneering advancements in robotics, IoT, and STEAM education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Abdullahi Adamu",
                role: "Founder & CEO",
                bio: "Robotics engineer and IoT architect dedicated to bringing practical technology education and hardware solutions to Africa.",
                initials: "AA",
                image: "/founder.jpg",
                socials: {
                  linkedin: "https://www.linkedin.com/in/abdullahi-adamu-581894376",
                  twitter: "https://x.com/AbbaA67604",
                  github: "https://github.com/Abdullahi1460"
                }
              },
              {
                name: "Abdurrahman Adam",
                role: "Head of STEAM Education",
                bio: "Curriculum designer specializing in hands-on student engagement, interactive electronics kits, and coding bootcamps.",
                initials: "AA",
                image: "/maryam-yusuf.jpg",
                socials: {
                  linkedin: "https://linkedin.com",
                  twitter: "https://twitter.com",
                  github: "https://github.com"
                }
              },
              {
                name: "Ibrahim Bello",
                role: "Senior Embedded Engineer",
                bio: "Microcontroller design expert specializing in Arduino/ESP32 firmware, custom PCB layouts, and automation systems.",
                initials: "IB",
                socials: {
                  linkedin: "https://linkedin.com",
                  twitter: "https://twitter.com",
                  github: "https://github.com"
                }
              }
            ].map((member, index) => (
              <div 
                key={index} 
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-scale shadow-card hover:shadow-glow text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {member.image ? (
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-border shadow-inner transition-transform duration-300 group-hover:scale-105">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-primary-foreground text-2xl font-bold font-poppins mx-auto mb-4 border-2 border-border shadow-inner transition-transform duration-300 group-hover:scale-105">
                    {member.initials}
                  </div>
                )}
                <h3 className="text-xl font-poppins font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-secondary mb-4">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                  {member.bio}
                </p>
                <div className="flex justify-center space-x-4">
                  <a 
                    href={member.socials.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a 
                    href={member.socials.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a 
                    href={member.socials.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  </>;
};
export default About;