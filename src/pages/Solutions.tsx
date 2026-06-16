import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import gpsImage from "@/assets/maximum.jpg";
import medicineImage from "@/assets/medicine-reminder.jpg";
import solarImage from "@/assets/solar-generator.jpg";
import abrobLightImage from "@/assets/abrob-light.png";
import stepperMotorImage from "@/assets/stepper-motor.png";
import ttGearMotorImage from "@/assets/tt-gear-motor.png";
import robotCarImage from "@/assets/robot-car-1.jpg";
import studentsImage from "@/assets/students-robotics-2.png";
import { 
  ShoppingBag, 
  Cpu, 
  GraduationCap, 
  Smartphone, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Database, 
  BookOpen, 
  Users, 
  HardDrive, 
  Wifi, 
  Layers, 
  Download, 
  Bookmark, 
  ChevronRight,
  Store,
  ShoppingCart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

type TabType = "products" | "custom" | "education" | "sakabot" | "market";

const Solutions = () => {
  const { hash } = useLocation();
  const [activeTab, setActiveTab] = useState<TabType>("products");

  const products = [
    {
      id: "gps-tracker",
      title: "ABROB-GT GPS Tracker v2.0",
      description: "Real-time vehicle tracking with Firebase integration, SMS alerts, and live location monitoring.",
      image: gpsImage,
      features: ["Real-time tracking", "Firebase cloud storage", "SMS notifications", "Battery backup"]
    },
    {
      id: "smart-medicine",
      title: "Smart Medicine Reminder System",
      description: "IoT-powered medication management with scheduled reminders and SMS alerts.",
      image: medicineImage,
      features: ["Automated reminders", "SMS alerts", "LCD display", "Easy programming"]
    },
    {
      id: "solar-generator",
      title: "DC Solar Generator",
      description: "Portable solar power solution for off-grid applications and emergency backup.",
      image: solarImage,
      features: ["Clean energy", "Portable design", "Multiple outputs", "Long battery life"]
    },
    {
      id: "abrob-light",
      title: "ABROB-Light Solar System",
      description: "Smart solar-powered LED lighting solution with battery backup and control panel.",
      image: abrobLightImage,
      features: ["Solar powered", "LED technology", "Remote control", "Portable design"]
    },

  ];

  const marketItems = [
    {
      id: "stepper-motor",
      title: "NEMA 17 Stepper Motor",
      description: "High-precision stepper motors for robotics, CNC machines, and 3D printing applications.",
      image: stepperMotorImage,
      features: ["High torque: 40N.cm", "Precise positioning (1.8°)", "4-wire bipolar design", "Arduino compatible"]
    },
    {
      id: "tt-gear-motor",
      title: "TT Gear DC Motor",
      description: "Compact dual-shaft DC gear motors perfect for mobile robot cars, wheels, and smart vehicles.",
      image: ttGearMotorImage,
      features: ["Working voltage: 3V-6V", "Gear ratio 1:48", "Dual shaft output", "Robot chassis ready"]
    },
    {
      id: "robotics-kits",
      title: "Robotics Development Kit",
      description: "Complete electronics pack with smart chassis, microcontrollers, motor shields, and sensor packs.",
      image: robotCarImage,
      features: ["Beginner friendly", "Chassis & batteries included", "Step-by-step guides", "Easily expandable"]
    },
    {
      id: "esp32-node",
      title: "ESP32 NodeMCU Development Board",
      description: "High-performance ESP-WROOM-32 Wi-Fi + Bluetooth dual-core microcontroller unit.",
      image: "https://images.unsplash.com/photo-1608248597481-496100c80836?q=80&w=600&auto=format&fit=crop",
      features: ["Built-in Wi-Fi & BLE", "38 interface pins", "Ultra-low power sleep", "Python & Arduino compatible"]
    },
    {
      id: "dht22-sensor",
      title: "DHT22 Precision Temperature Sensor",
      description: "High accuracy sensor with calibrated digital signal output for weather stations and automated environments.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
      features: ["0-100% RH range", "-40 to 80°C range", "Low power consumption", "Long signal transmission"]
    },
    {
      id: "arduino-uno",
      title: "Arduino Uno R3 Compatible Board",
      description: "The classic ATmega328P microcontroller board for hobbyist electronics and STEAM education workshops.",
      image: "https://images.unsplash.com/photo-1553406830-ef251367588c?q=80&w=600&auto=format&fit=crop",
      features: ["14 digital I/O pins", "6 analog inputs", "USB connection ready", "Robust power inputs"]
    }
  ];

  useEffect(() => {
    if (hash) {
      // Direct tabs mapping
      const isProduct = products.some(p => `#${p.id}` === hash);
      const isMarket = marketItems.some(m => `#${m.id}` === hash);

      if (isProduct) {
        setActiveTab("products");
      } else if (isMarket) {
        setActiveTab("market");
      } else if (hash === "#custom") {
        setActiveTab("custom");
      } else if (hash === "#education") {
        setActiveTab("education");
      } else if (hash === "#sakabot") {
        setActiveTab("sakabot");
      }

      // Small delay to let the tab render before scrolling
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
    }
  }, [hash]);

  return (
    <div className="min-h-screen py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6 tracking-tight">
            Our Solutions &amp; Offerings
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From smart commercial hardware and engineering kits to technical custom prototyping and interactive apps.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 max-w-5xl mx-auto animate-fade-in">
          {[
            { id: "products", label: "Products", icon: ShoppingBag },
            { id: "market", label: "Online Market", icon: Store },
            { id: "custom", label: "Custom Project Dev", icon: Cpu },
            { id: "education", label: "STEAM Education", icon: GraduationCap },
            { id: "sakabot", label: "SAKABOT App", icon: Smartphone },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`flex items-center space-x-2 px-5 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 border ${
                  isActive
                    ? "bg-primary border-primary text-primary-foreground shadow-glow scale-105"
                    : "bg-card border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="h-4.5 w-4.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="mt-8 transition-all duration-500">
          {/* TAB 1: PRODUCTS */}
          {activeTab === "products" && (
            <div className="animate-fade-in space-y-12">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <h2 className="text-3xl font-poppins font-bold mb-3">Our Finished Products</h2>
                <p className="text-muted-foreground">
                  Explore complete, commercial-grade tracking and solar systems designed and built by ABROB.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, index) => (
                  <div 
                    key={index} 
                    id={product.id} 
                    className="scroll-mt-24"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: ONLINE MARKET */}
          {activeTab === "market" && (
            <div className="animate-fade-in space-y-12">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <h2 className="text-3xl font-poppins font-bold mb-3">Online Components Market</h2>
                <p className="text-muted-foreground">
                  Order high-grade microcontrollers, motors, sensors, and robotics development kits to power your prototypes.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {marketItems.map((item, index) => (
                  <div 
                    key={index} 
                    id={item.id} 
                    className="scroll-mt-24"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <ProductCard {...item} />
                  </div>
                ))}
              </div>

              {/* Shopping assurance info block */}
              <div className="p-6 rounded-xl bg-card border border-border shadow-card grid grid-cols-1 md:grid-cols-3 gap-6 text-center max-w-4xl mx-auto">
                <div>
                  <h4 className="font-bold text-primary mb-1">Quality Sourced</h4>
                  <p className="text-xs text-muted-foreground">All items undergo verification tests prior to packaging.</p>
                </div>
                <div className="border-y md:border-y-0 md:border-x border-border py-4 md:py-0">
                  <h4 className="font-bold text-primary mb-1">Fast Delivery</h4>
                  <p className="text-xs text-muted-foreground">Prompt domestic shipping options across Nigeria.</p>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Hobbyist Technical Support</h4>
                  <p className="text-xs text-muted-foreground">Get schematics and guides when building with our modules.</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CUSTOM PROJECT DEVELOPMENT */}
          {activeTab === "custom" && (
            <div id="custom" className="animate-fade-in space-y-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex h-9 items-center justify-center rounded-full bg-primary/10 border border-primary/20 px-4 text-xs font-semibold text-primary">
                    <Cpu className="h-3.5 w-3.5 mr-2" /> Engineering Services
                  </div>
                  <h2 className="text-4xl font-poppins font-bold tracking-tight">
                    Custom Project Development
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Have a unique problem that requires a hardware solution? We research, design, prototype, and build custom systems from scratch. From custom PCB designs to full telemetry arrays, our engineering team brings your ideas to reality.
                  </p>
                  <div className="space-y-4">
                    {[
                      { title: "Hardware-to-Cloud Integration", desc: "Connecting physical sensors to real-time dashboards like Firebase, Supabase, and AWS." },
                      { title: "Embedded Firmware Programming", desc: "Expert C++ microcode development for ESP32, Arduino, STM32, and PIC platforms." },
                      { title: "Custom PCB Design & Assembly", desc: "High-integrity multi-layer schematic layout, thermal routing, and component mounting." }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <Link to="/contact" className="inline-flex items-center justify-center rounded-lg text-sm font-semibold h-11 px-6 gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
                      <span>Schedule a Technical Briefing</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: HardDrive, title: "Prototyping", text: "Physical mechanical chassis, enclosure printing, and structural modeling." },
                    { icon: Wifi, title: "IoT Telemetry", text: "Long-range communication protocols: GSM, LoRa, Wi-Fi, and Bluetooth." },
                    { icon: Layers, title: "System Assembly", text: "Precision soldering, component routing, and rigid-flex assembly tests." },
                    { icon: Sparkles, title: "Quality Assurance", text: "Thermal benchmarking, signal isolation audits, and safety diagnostics." }
                  ].map((feat, idx) => (
                    <div key={idx} className="p-6 rounded-xl bg-card border border-border shadow-card hover:border-primary/45 transition-colors">
                      <feat.icon className="h-8 w-8 text-primary mb-4" />
                      <h3 className="font-poppins font-bold text-lg mb-2">{feat.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{feat.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dev Cycle Process */}
              <div className="p-8 rounded-2xl bg-card border border-border shadow-card">
                <h3 className="text-2xl font-poppins font-bold text-center mb-8">Our Development Cycle</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                  {[
                    { num: "01", step: "Analysis", desc: "Mapping out sensor grids, hardware boundaries, and product criteria." },
                    { num: "02", step: "Schematic & CAD", desc: "Designing multi-layer circuit footprints and custom 3D casing files." },
                    { num: "03", step: "Firmware Integration", desc: "Compiling real-time event loops, memory maps, and device firmware." },
                    { num: "04", step: "Assembly & Delivery", desc: "Creating hardware models, executing audits, and system hand-off." }
                  ].map((proc, index) => (
                    <div key={index} className="relative space-y-3 p-4 rounded-lg bg-background/50 border border-white/5">
                      <span className="text-4xl font-extrabold text-primary/25 font-poppins">{proc.num}</span>
                      <h4 className="font-bold text-lg">{proc.step}</h4>
                      <p className="text-sm text-muted-foreground">{proc.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: STEAM EDUCATION */}
          {activeTab === "education" && (
            <div id="education" className="animate-fade-in space-y-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative rounded-2xl overflow-hidden border border-border shadow-glow h-96">
                  <img 
                    src={studentsImage} 
                    alt="Students collaborating on robotics kits" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                </div>

                <div className="space-y-6">
                  <div className="inline-flex h-9 items-center justify-center rounded-full bg-primary/10 border border-primary/20 px-4 text-xs font-semibold text-primary">
                    <GraduationCap className="h-3.5 w-3.5 mr-2" /> Academic Enablement
                  </div>
                  <h2 className="text-4xl font-poppins font-bold tracking-tight">
                    STEAM Education Programs
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    We bring practical, interactive engineering training directly to classrooms and communities. Our tailored curricula combine electronics design, algorithmic programming, and mechanical assembly to build future technology creators.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { icon: BookOpen, title: "Tailored Curriculum", desc: "Customized syllabus maps matching school academic guidelines." },
                      { icon: Users, title: "Bootcamps & Clubs", desc: "Engaging clubs and hardware bootcamps for student teams." },
                      { icon: Cpu, title: "Hands-on Tech Kits", desc: "Students work with actual sensors, microcontrollers, and motors." },
                      { icon: Sparkles, title: "Mentorship Arrays", desc: "Direct guidance from practicing robotics and IoT engineers." }
                    ].map((edu, idx) => (
                      <div key={idx} className="flex space-x-3">
                        <edu.icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">{edu.title}</h4>
                          <p className="text-xs text-muted-foreground">{edu.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link to="/education" className="inline-flex items-center justify-center rounded-lg text-sm font-semibold h-11 px-6 gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
                      <span>Explore Education Portal</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: SAKABOT APP */}
          {activeTab === "sakabot" && (
            <div id="sakabot" className="animate-fade-in space-y-16">
              <div className="grid md:grid-cols-12 gap-12 items-center">
                {/* Information Left */}
                <div className="md:col-span-7 space-y-6">
                  <div className="inline-flex h-9 items-center justify-center rounded-full bg-primary/10 border border-primary/20 px-4 text-xs font-semibold text-primary">
                    <Smartphone className="h-3.5 w-3.5 mr-2" /> Interactive Application
                  </div>
                  <h2 className="text-4xl md:text-5xl font-poppins font-bold tracking-tight">
                    SAKABOT Mobile App
                  </h2>
                  <p className="text-xl text-primary font-medium">
                    Empowering anyone, anywhere, with hardtech skills and hardware engineering knowledge.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    SAKABOT is designed from the ground up to solve the access barrier to hardware engineering. Whether you are offline in a remote town or studying in a lab, SAKABOT provides interactive schematics, components libraries, electronics testing sandboxes, and structural references right on your device.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                    {[
                      { icon: Cpu, title: "Hardtech Skills Modules", desc: "Interactive paths covering microcontrollers, sensors, signal processing, and mechanical builds." },
                      { icon: Database, title: "Component Encyclopedia", desc: "Detailed pinout indexes, absolute ratings, and visual maps of common components." },
                      { icon: Layers, title: "Offline Schematics", desc: "Access hardware design configurations, system maps, and layouts without internet." },
                      { icon: Users, title: "Builder Network Integration", desc: "Post problems, upload project pictures, and get answers from fellow creators." }
                    ].map((item, idx) => (
                      <div key={idx} className="space-y-2 p-5 rounded-xl bg-card border border-border shadow-card">
                        <div className="flex items-center space-x-2.5">
                          <item.icon className="h-5.5 w-5.5 text-primary" />
                          <h4 className="font-poppins font-bold text-foreground">{item.title}</h4>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 pt-6">
                    <Button size="lg" className="gradient-primary text-primary-foreground font-semibold flex items-center space-x-2">
                      <Download className="h-5 w-5" />
                      <span>Download SAKABOT Beta</span>
                    </Button>
                    <Button size="lg" variant="outline" className="font-semibold flex items-center space-x-2">
                      <BookOpen className="h-5 w-5" />
                      <span>Read Documentation</span>
                    </Button>
                  </div>
                </div>

                {/* Mobile Phone Mockup Right */}
                <div className="md:col-span-5 flex justify-center">
                  <div className="relative w-72 h-[580px] bg-slate-950 rounded-[40px] border-[8px] border-slate-800 shadow-[0_0_40px_rgba(var(--primary-rgb),0.2)] overflow-hidden group">
                    {/* Speaker & Sensor bar */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-50 flex items-center justify-center space-x-2">
                      <div className="w-10 h-1 bg-slate-900 rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-slate-950 rounded-full border border-slate-900"></div>
                    </div>

                    {/* App Screen Container */}
                    <div className="w-full h-full p-4 pt-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-between text-white select-none">
                      {/* App Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <div className="flex items-center space-x-2">
                          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center font-bold text-xs shadow-glow">
                            S
                          </div>
                          <div>
                            <h5 className="text-xs font-bold leading-tight">SAKABOT</h5>
                            <span className="text-[9px] text-green-400">● Live Learning Mode</span>
                          </div>
                        </div>
                        <Bookmark className="h-4 w-4 text-muted-foreground" />
                      </div>

                      {/* Main Scroll Content Mockup */}
                      <div className="flex-1 py-4 space-y-4 overflow-y-auto no-scrollbar">
                        {/* Interactive Tutorial Module Card */}
                        <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-primary/40 transition-colors">
                          <span className="text-[9px] text-primary font-bold uppercase tracking-wider">Active Path</span>
                          <h6 className="text-xs font-bold mt-0.5">ESP32 Telemetry Module</h6>
                          <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
                            <div className="bg-primary w-2/3 h-full rounded-full"></div>
                          </div>
                          <div className="flex justify-between items-center mt-3 text-[10px] text-muted-foreground">
                            <span>Step 4 of 6: Connect Wi-Fi</span>
                            <span className="text-primary font-semibold flex items-center">
                              Resume <ChevronRight className="h-3 w-3" />
                            </span>
                          </div>
                        </div>

                        {/* Interactive Circuit Schematic View */}
                        <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5 space-y-2">
                          <span className="text-[9px] text-muted-foreground uppercase font-bold">Interactive Schematic</span>
                          <div className="h-20 bg-slate-950/60 rounded-lg flex items-center justify-center border border-white/5 relative overflow-hidden">
                            {/* Mock Circuit Lines */}
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                            <div className="w-10 h-6 border border-primary/50 bg-primary/10 rounded flex items-center justify-center text-[8px] text-primary">ESP32</div>
                            <div className="w-6 h-0.5 bg-primary/40 mx-2"></div>
                            <div className="w-8 h-6 border border-secondary/50 bg-secondary/10 rounded flex items-center justify-center text-[8px] text-secondary">LED</div>
                          </div>
                          <p className="text-[10px] text-muted-foreground text-center">Tap nodes to explore connection rules &amp; voltages.</p>
                        </div>

                        {/* Component Database Quick Search */}
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2">
                          <span className="text-[9px] text-muted-foreground uppercase font-bold">Datasheet Library</span>
                          <div className="grid grid-cols-2 gap-2 text-[10px]">
                            <div className="p-2 bg-slate-950/50 rounded border border-white/5 text-center hover:border-primary/30 transition-colors">
                              <span className="font-bold block">DHT22</span>
                              <span className="text-[8px] text-muted-foreground">Humidity Sensor</span>
                            </div>
                            <div className="p-2 bg-slate-950/50 rounded border border-white/5 text-center hover:border-primary/30 transition-colors">
                              <span className="font-bold block">L298N</span>
                              <span className="text-[8px] text-muted-foreground">H-Bridge Driver</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Mock Navigation Footer */}
                      <div className="pt-2 border-t border-white/10 flex justify-around text-[10px] text-muted-foreground">
                        <span className="text-primary font-semibold">Home</span>
                        <span>Library</span>
                        <span>Community</span>
                        <span>Profile</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <section className="mt-20 rounded-2xl overflow-hidden border border-border shadow-card animate-fade-in">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-auto">
              <img 
                src={studentsImage} 
                alt="Students working on robotics projects" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-12 gradient-hero flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you want to order our pre-built hardware, request custom project development, launch STEAM education programs, or deploy SAKABOT for your students, we are ready to assist.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 gradient-primary text-primary-foreground hover:opacity-90">
                  Contact Our Team
                </Link>
                <Link to="/projects" className="inline-flex items-center justify-center rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8">
                  Browse Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Solutions;
