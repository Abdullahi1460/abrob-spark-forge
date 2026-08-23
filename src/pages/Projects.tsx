import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import solarImage from "@/assets/solar-generator.jpg";
const iotFieldImage = "/assets/abrob-iot-field.jpg";
const gpsTrackingImage = "/assets/abrob-gps-tracking.jpg";
const automationFloorImage = "/assets/abrob-automation-floor.jpg";
const solarIoTImage = "/assets/abrob-solar-iot.jpg";
const electronicsImage = "/assets/abrob-electronics-workbench.jpg";
const roboticsPrototypeImage = "/assets/abrob-robotics-prototype.jpg";
const steamImage = "/assets/abrob-steam-classroom.jpg";

const Projects = () => {
  const projects = [
    {
      title: "ABROB-GT GPS Tracker",
      problem: "Vehicle theft and lack of real-time location monitoring in Nigeria",
      solution: "Developed a cost-effective GPS tracker with Firebase integration, real-time tracking, and SMS alerts",
      results: "Successfully deployed in 50+ vehicles with 99.9% uptime and improved security",
      image: gpsTrackingImage,
      tags: ["IoT", "GPS", "Firebase", "Security"]
    },
    {
      title: "Smart Medicine Reminder System",
      problem: "Elderly patients forgetting to take medications on time",
      solution: "Built an IoT-powered reminder system with scheduled alerts, LCD display, and SMS notifications",
      results: "Improved medication adherence by 85% in test group of 20 users",
      image: electronicsImage,
      tags: ["IoT", "Healthcare", "SMS", "Arduino"]
    },
    {
      title: "Autonomous Grass-Cutting Robot",
      problem: "Labor-intensive lawn maintenance and high costs",
      solution: "Created an autonomous robot with obstacle detection, GPS navigation, and solar charging",
      results: "Reduced maintenance costs by 60% and improved efficiency",
      image: automationFloorImage,
      tags: ["Robotics", "Automation", "Solar", "AI"]
    },
    {
      title: "CNC Writing Machine",
      problem: "Need for precise, repeatable writing and drawing for educational demos",
      solution: "Built a 3-axis CNC machine with custom G-code interpreter for automated writing and drawing",
      results: "Used in 10+ educational workshops, demonstrated precision engineering concepts",
      image: electronicsImage,
      tags: ["CNC", "Automation", "Education", "Precision"]
    },
    {
      title: "DC Solar Generator",
      problem: "Unreliable power supply in rural areas and need for clean energy solutions",
      solution: "Designed a portable solar generator with battery storage, multiple outputs, and power management",
      results: "Provided power to 15+ households, 100% renewable energy",
      image: solarIoTImage,
      tags: ["Solar", "Clean Energy", "IoT", "Monitoring"]
    },
    {
      title: "STEAM Education Platform",
      problem: "Limited access to quality STEM education and hands-on learning resources",
      solution: "Developed comprehensive robotics curriculum with kits, tutorials, and project-based learning",
      results: "Trained 500+ students, 95% completion rate, multiple award-winning student projects",
      image: steamImage,
      tags: ["Education", "STEAM", "Curriculum", "Robotics"]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6">Projects & R&D</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world innovation through robotics, IoT, and technology education.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden shadow-card hover:shadow-glow transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover hover-scale transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-3xl mb-4">{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-destructive">Problem</h3>
                      <p className="text-muted-foreground">{project.problem}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-primary">Solution</h3>
                      <p className="text-muted-foreground">{project.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-secondary">Results</h3>
                      <p className="text-muted-foreground">{project.results}</p>
                    </div>
                    {project.title === "ABROB-GT GPS Tracker" ? <Link to="/tracker"><Button variant="outline" className="mt-4">Explore ABROB-GT →</Button></Link> : <Button variant="outline" className="mt-4">View Case Study →</Button>}
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <section className="mt-20 p-12 rounded-lg gradient-hero text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We love tackling challenging problems. Let's collaborate on your next innovation.
          </p>
          <a
            href="https://wa.me/2347070879257?text=Hello%20ABROB%20INDUSTRY!%20I%20have%20a%20project%20in%20mind%20and%20would%20like%20to%20discuss%20collaboration%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="gradient-primary">Start a Conversation</Button>
          </a>
        </section>
      </div>
    </div>
  );
};

export default Projects;
