export interface ProjectCaseStudy {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  problem: string;
  solution: string;
  architecture: string[];
  technologies: string[];
  capabilities: string[];
  applications: string[];
  development: string;
  image: string;
  tags: string[];
}

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    slug: "abrob-gt",
    title: "ABROB-GT — Bidirectional GPS Tracking System",
    shortTitle: "ABROB-GT GPS Tracker",
    eyebrow: "Connected mobility & asset security",
    summary: "A connected tracking and location-monitoring platform designed to keep vehicles, equipment, and people visible even in challenging connectivity environments.",
    problem: "Vehicle theft, limited real-time visibility, and unreliable connectivity create a serious security and fleet-management challenge. A conventional one-way tracker can report a location, but it does not provide a complete communication loop between the user and the physical device.",
    solution: "ABROB-GT combines an embedded tracking device, cellular communication, cloud services, and a mobile application in a bidirectional system. The device reports location and status to the platform, while authorised users can send commands or configuration back to the hardware.",
    architecture: ["GPS/GNSS → ESP32 controller", "ESP32 → GSM/4G cellular network", "Cellular network → Cloud backend", "Cloud backend → Mobile application", "Mobile application → Cloud → Cellular network → Device"],
    technologies: ["GPS/GNSS positioning", "GSM/4G communication", "ESP32 embedded control", "Motion and acceleration sensing", "Emergency/panic button", "Firebase Realtime Database", "Push notifications", "React Native or Flutter mobile app"],
    capabilities: ["Real-time location tracking", "Location history and geofencing", "Movement, tamper, and emergency alerts", "Device status monitoring", "Remote configuration", "Fleet and multiple-device management"],
    applications: ["Private and commercial vehicles", "Motorcycles and logistics", "Valuable equipment and assets", "Personal security", "Emergency response and fleet monitoring"],
    development: "ABROB-GT is being developed as more than a GPS device. Its long-term product model combines hardware, connectivity, software, and cloud services to form a connected tracking platform.",
    image: "/assets/abrob-gps-tracking.jpg",
    tags: ["IoT", "GPS", "Firebase", "Security"],
  },
  {
    slug: "ab-solar-power-system",
    title: "AB-Solar Power System",
    shortTitle: "AB-Solar Power System",
    eyebrow: "Practical energy technology",
    summary: "An affordable small-scale solar and battery platform designed to provide dependable DC power for homes, learning spaces, and small businesses.",
    problem: "Unreliable electricity remains a major challenge for many users and businesses in Nigeria and across Africa. Low-power devices need a dependable, efficient, and maintainable alternative to grid-only power.",
    solution: "The AB-Solar Power System uses a solar panel, charging and power-management electronics, a battery, and regulated DC outputs. An earlier non-IoT version has already progressed beyond laboratory experimentation into customer use and product validation.",
    architecture: ["Solar panel → Charging and power management", "Charging system → Battery storage", "Battery → Regulated DC outputs", "Sensors and microcontroller → IoT monitoring", "IoT layer → Mobile application and energy insights"],
    technologies: ["Solar generation", "Battery storage", "DC power electronics", "Charging and power management", "Voltage and current sensing", "Microcontroller and IoT connectivity", "Mobile monitoring"],
    capabilities: ["LED lighting and DC fan support", "USB and mobile-phone charging", "Power for small electronics and networking equipment", "Battery-voltage and charging-status monitoring", "Solar-input and consumption tracking", "Estimated runtime and battery-condition insights"],
    applications: ["Homes and rural communities", "Small businesses", "Schools and learning labs", "Networking and communication equipment", "Off-grid robotics and electronics projects"],
    development: "The next generation turns a proven solar battery product into an intelligent energy-management platform by adding sensors, telemetry, and mobile visibility.",
    image: "/assets/abrob-solar-iot.jpg",
    tags: ["Solar", "Clean Energy", "IoT", "Monitoring"],
  },
  {
    slug: "abrob-smartdrive",
    title: "ABROB SmartDrive",
    shortTitle: "ABROB SmartDrive",
    eyebrow: "Robotics development platform",
    summary: "An ESP32-based robotic vehicle platform that teaches embedded programming, automation, wireless control, and the foundations of autonomous robotics.",
    problem: "Students and early-stage makers need an accessible way to move from microcontroller theory into real systems that combine code, electronics, motors, sensors, and user interaction.",
    solution: "SmartDrive places an ESP32 at the centre of a modular robotic vehicle with DC gear motors, motor drivers, sensors, an OLED display, user controls, and wireless communication. It can be configured for manual, sensor-driven, or autonomous behaviours.",
    architecture: ["User controls or wireless commands → ESP32", "Sensors → ESP32 decision layer", "ESP32 → Motor driver → DC gear motors", "ESP32 → OLED display and system feedback", "Optional camera and IoT layer → Remote monitoring"],
    technologies: ["ESP32 microcontroller", "DC gear motors", "Motor-driver circuits", "Obstacle and motion sensors", "OLED and I²C communication", "PWM and GPIO control", "Wireless communication", "ESP32-CAM and computer vision roadmap"],
    capabilities: ["Manual and wireless control", "Obstacle avoidance", "Sensor-based movement", "Autonomous navigation foundations", "Interactive operating-mode display", "IoT connectivity and remote monitoring"],
    applications: ["Robotics education", "Embedded-systems training", "Prototype automation", "Research and development", "Future computer-vision and AI robotics"],
    development: "SmartDrive is intentionally designed as a development platform rather than only a basic robot car. Its modular architecture creates a path from classroom experiments to advanced autonomous systems.",
    image: "/assets/abrob-robotics-prototype.jpg",
    tags: ["Robotics", "ESP32", "Automation", "Education"],
  },
  {
    slug: "electronics-iot-platform",
    title: "ABROB Electronics & IoT Platform",
    shortTitle: "Electronics & IoT Platform",
    eyebrow: "Reusable engineering foundation",
    summary: "A practical hardware and software foundation for turning sensors, controllers, communications, and cloud services into real products.",
    problem: "Many products repeatedly need the same building blocks: microcontrollers, sensors, actuators, wireless links, displays, and cloud services. Rebuilding those foundations each time slows experimentation and product development.",
    solution: "ABROB develops a reusable electronics and IoT platform around ESP32, ESP8266, Raspberry Pi, Raspberry Pi Pico, sensors, actuators, GSM/GPS modules, displays, motor controllers, and cloud platforms.",
    architecture: ["Microcontroller → Sensors and actuators", "Controller → GSM, GPS, Wi-Fi, or other wireless links", "Device → Cloud platform and data services", "Cloud → Dashboards, alerts, mobile applications, or automation"],
    technologies: ["ESP32 and ESP8266", "Raspberry Pi and Raspberry Pi Pico", "Sensors and actuators", "GSM and GPS modules", "Displays and motor controllers", "Wireless communication", "Cloud platforms and data synchronisation"],
    capabilities: ["Connected sensing and telemetry", "Remote device status", "Alerts and event logging", "Cloud-connected control", "Rapid prototyping of embedded products", "Reusable modules across multiple solutions"],
    applications: ["Smart energy systems", "Tracking and security", "Industrial monitoring", "Agricultural technology", "Automation systems", "Smart-home products"],
    development: "This platform is the common technology base that allows ABROB to move efficiently from a real-world problem to a tested prototype and, eventually, a commercial product.",
    image: "/assets/abrob-electronics-workbench.jpg",
    tags: ["Electronics", "IoT", "Embedded", "Cloud"],
  },
  {
    slug: "robotics-automation",
    title: "ABROB Robotics & Automation",
    shortTitle: "Robotics & Automation",
    eyebrow: "Intelligent machines and practical automation",
    summary: "An engineering direction combining mechanics, electronics, embedded systems, programming, sensors, and intelligent control for practical automation.",
    problem: "African industries and communities need automation that is practical, adaptable, and grounded in local operating conditions—not only imported systems that are expensive or difficult to maintain.",
    solution: "ABROB's robotics work brings together mobile robots, robotic vehicles, motor control, embedded controllers, sensors, autonomous systems, computer vision, and AI-assisted robotics into a growing R&D portfolio.",
    architecture: ["Mechanical system → Motors, drivetrain, and physical tools", "Sensors → Embedded controller and control logic", "Controller → Autonomous or operator-directed actions", "Optional vision and AI → Recognition, navigation, and decision support"],
    technologies: ["Mobile robotics", "Embedded controllers", "Motor control", "Sensors and actuators", "Computer vision", "Autonomous systems", "AI-assisted robotics", "Industrial automation"],
    capabilities: ["Robotic mobility and navigation", "Sensor-based control", "Inspection and monitoring", "Automation of repetitive tasks", "AI-assisted perception", "Prototype-to-deployment engineering"],
    applications: ["Industry and manufacturing", "Agriculture", "Security and inspection", "Logistics", "Education and research", "Community-focused automation"],
    development: "The long-term objective is to build intelligent machines that solve practical problems while remaining understandable, serviceable, and relevant to African operating environments.",
    image: "/assets/abrob-automation-floor.jpg",
    tags: ["Robotics", "Automation", "AI", "R&D"],
  },
  {
    slug: "stem-robotics-education",
    title: "ABROB STEM & Robotics Education",
    shortTitle: "STEM & Robotics Education",
    eyebrow: "Hands-on technical learning",
    summary: "A project-based education ecosystem that helps learners progress from electronics fundamentals to robotics, IoT, AI, and real engineering projects.",
    problem: "Many learners have limited access to quality STEM education, practical equipment, and mentors who can connect classroom concepts to real technology systems.",
    solution: "ABROB combines electronics, programming, Raspberry Pi Pico, ESP32, IoT, embedded systems, automation, robotics, and artificial intelligence in hands-on learning pathways with kits, tutorials, and project-based challenges.",
    architecture: ["Electronics fundamentals → Components and circuits", "Programming → Microcontrollers and control logic", "Microcontrollers → Sensors, motors, and embedded systems", "Robotics and IoT → Connected real-world projects", "AI and automation → Advanced engineering applications"],
    technologies: ["Electronics and circuit building", "ESP32 and Raspberry Pi Pico", "Robotics and sensors", "IoT and embedded systems", "Programming and automation", "Artificial intelligence", "Project-based engineering"],
    capabilities: ["Hands-on robotics workshops", "Embedded programming practice", "IoT and automation projects", "Progressive curriculum pathways", "Technical problem-solving", "Student portfolio and prototype development"],
    applications: ["Schools and after-school programs", "Technical training", "Youth innovation programs", "Teacher and mentor development", "Community maker and R&D ecosystems"],
    development: "The learning pathway moves from Electronics → Programming → Microcontrollers → Robotics → IoT → AI → Real Projects, helping students build confidence through visible, practical outcomes.",
    image: "/assets/hausa-school-robot-demo.jpg",
    tags: ["Education", "STEAM", "Curriculum", "Robotics"],
  },
];

export const getProjectBySlug = (slug: string) => projectCaseStudies.find((project) => project.slug === slug);
