import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, Cpu, Lightbulb, Users } from "lucide-react";
import kidsLearning from "@/assets/kids-learning.jpg";
import studentsRobotics from "@/assets/students-robotics-1.png";
import studentsLearning from "@/assets/students-learning.png";

const Education = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Kids Tech Academy",
      description: "Introduction to robotics, Arduino programming, and electronics for ages 8-15.",
      duration: "8 weeks",
      level: "Beginner"
    },
    {
      icon: Cpu,
      title: "Advanced Robotics",
      description: "Build complex robots, learn ESP32, Raspberry Pi, and advanced automation.",
      duration: "12 weeks",
      level: "Intermediate"
    },
    {
      icon: Lightbulb,
      title: "STEAM Innovation Lab",
      description: "Hands-on projects with LEGO, electronics kits, and creative problem-solving.",
      duration: "6 weeks",
      level: "All Levels"
    },
    {
      icon: Users,
      title: "Maker Workshops",
      description: "Weekend workshops on specific topics like CNC machines, 3D printing, and IoT.",
      duration: "2 days",
      level: "All Levels"
    }
  ];

  const curriculum = [
    { week: 1, topic: "LEGO Robotics Basics", description: "Build your first robot and understand basic mechanics" },
    { week: 2, topic: "Introduction to Electronics", description: "Learn circuits, resistors, LEDs, and basic components" },
    { week: 3, topic: "Arduino Programming", description: "Write your first code and control LEDs and motors" },
    { week: 4, topic: "Sensors & Input", description: "Work with distance sensors, buttons, and light sensors" },
    { week: 5, topic: "Robot Car Project", description: "Build and program an autonomous robot car" },
    { week: 6, topic: "IoT Fundamentals", description: "Connect devices to the internet and send data" },
    { week: 7, topic: "Innovation Challenge", description: "Design and build a solution to a real problem" },
    { week: 8, topic: "Final Showcase", description: "Present your project to parents and peers" }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6">Education & Training</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering learners of all ages with hands-on robotics and technology education.
          </p>
        </div>

        {/* Hero Images */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
          <div className="rounded-lg overflow-hidden shadow-card">
            <img src={studentsRobotics} alt="Students building robotics projects" className="w-full h-80 object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-card">
            <img src={studentsLearning} alt="Students learning technology" className="w-full h-80 object-cover" />
          </div>
        </div>

        {/* Programs */}
        <section className="mb-20">
          <h2 className="text-4xl font-poppins font-bold text-center mb-12 animate-fade-in">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="shadow-card hover:shadow-glow transition-all hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <program.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-muted-foreground mb-4">
                    <span>Duration: {program.duration}</span>
                    <span>Level: {program.level}</span>
                  </div>
                  <Button className="w-full gradient-primary">Enroll Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Sample Curriculum */}
        <section className="mb-20">
          <h2 className="text-4xl font-poppins font-bold text-center mb-12 animate-fade-in">Sample Curriculum</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {curriculum.map((item, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-lg bg-card shadow-card hover:shadow-glow transition-all hover-scale animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">W{item.week}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{item.topic}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enrollment Form */}
        <section className="max-w-2xl mx-auto animate-fade-in">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Join a Class Today</CardTitle>
              <CardDescription className="text-center">Fill out the form below and we'll get back to you shortly.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input id="age" type="number" placeholder="12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+234 123 456 7890" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="program">Program Interest</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kids">Kids Tech Academy</SelectItem>
                      <SelectItem value="advanced">Advanced Robotics</SelectItem>
                      <SelectItem value="steam">STEAM Innovation Lab</SelectItem>
                      <SelectItem value="workshop">Maker Workshops</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full gradient-primary">Submit Application</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Education;
