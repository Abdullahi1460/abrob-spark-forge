import trackerPresentationImage from "@/assets/presentation.jpg";
import electronicsKitImage from "@/assets/IMG_6989.JPG";
import buildathonImage from "@/assets/buildathon3.jpg";
import solarGeneratorImage from "@/assets/solar-generator.jpg";
import solarLightingImage from "@/assets/IMG-20250328-WA0041.jpeg";
import solarRobotImage from "@/assets/IMG_6931.JPG";
import robotCarImage from "@/assets/robot-car-1.jpg";
import robotAssemblyImage from "@/assets/robot-car-2.jpg";
import circuitPrototypeImage from "@/assets/WhatsApp Image 2024-12-06 at 12.09.28_56f71959.jpeg";

export interface ImpactHighlight {
  value: string;
  label: string;
  detail: string;
}

export interface ProjectGalleryItem {
  src: string;
  alt: string;
  label: string;
}

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  stage: string;
  stageDetail: string;
  impactHighlights: ImpactHighlight[];
  successMeasures: string[];
  gallery: ProjectGalleryItem[];
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

const realProjectMedia: Partial<Record<string, Pick<ProjectCaseStudy, "image" | "gallery">>> = {
  "abrob-gt": {
    image: trackerPresentationImage,
    gallery: [
      { src: trackerPresentationImage, alt: "ABROB founder presenting the ABROB-GT tracker", label: "ABROB-GT presentation" },
      { src: electronicsKitImage, alt: "ABROB components used for connected hardware development", label: "Hardware development" },
      { src: buildathonImage, alt: "ABROB team collaborating on a hands-on technology project", label: "Project collaboration" },
    ],
  },
  "ab-solar-power-system": {
    image: solarGeneratorImage,
    gallery: [
      { src: solarGeneratorImage, alt: "ABROB solar generator and lighting components", label: "Solar and battery platform" },
      { src: solarLightingImage, alt: "ABROB solar lighting units prepared for deployment", label: "Practical energy use" },
      { src: solarRobotImage, alt: "ABROB solar-powered robotics prototype", label: "Engineering and testing" },
    ],
  },
  "abrob-smartdrive": {
    image: robotCarImage,
    gallery: [
      { src: robotCarImage, alt: "ABROB SmartDrive robot car prototype", label: "Robotic vehicle prototype" },
      { src: robotAssemblyImage, alt: "ABROB engineer assembling a robot car", label: "Hands-on learning" },
      { src: circuitPrototypeImage, alt: "ABROB prototype circuit boards and display modules", label: "Embedded engineering" },
    ],
  },
};

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    slug: "abrob-gt",
    title: "ABROB-GT — Bidirectional GPS Tracking System",
    shortTitle: "ABROB-GT GPS Tracker",
    eyebrow: "Connected mobility & asset security",
    summary: "A connected tracking and location-monitoring platform designed to keep vehicles, equipment, and people visible even in challenging connectivity environments.",
    stage: "Product development",
    stageDetail: "A connected hardware, cellular, cloud, and mobile platform being prepared for practical pilots and early fleet deployments.",
    impactHighlights: [
      { value: "Live visibility", label: "One connected view", detail: "Location, device status, and alerts are designed to live in one platform." },
      { value: "Two-way control", label: "Beyond one-way tracking", detail: "Authorised users can send configuration and commands back to the device." },
      { value: "Fleet-ready", label: "Built to grow", detail: "The product model supports multiple devices and operational fleet use." },
    ],
    successMeasures: ["Active devices and successful installation rate", "Tracking availability and alert-delivery time", "Assets monitored, protected, or recovered per deployment"],
    gallery: [
      { src: "/assets/abrob-gps-tracking.jpg", alt: "ABROB-GT tracking hardware in the field", label: "Connected tracker" },
      { src: "/assets/abrob-iot-field.jpg", alt: "IoT equipment used for connected field monitoring", label: "Field connectivity" },
      { src: "/assets/hausa-smart-city-team.jpg", alt: "Team collaborating on smart-city technology", label: "Deployment planning" },
    ],
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
    stage: "Customer-use validation",
    stageDetail: "An earlier non-IoT version has progressed from laboratory experimentation into customer use; the next generation adds telemetry and mobile visibility.",
    impactHighlights: [
      { value: "Customer use", label: "Validated beyond the lab", detail: "The earlier non-IoT version has moved into customer use and product validation." },
      { value: "Essential DC power", label: "Useful every day", detail: "The platform is designed for lighting, fan support, charging, and small electronics." },
      { value: "Energy insight", label: "Smarter next generation", detail: "Planned sensing and telemetry will make system health and consumption easier to understand." },
    ],
    successMeasures: ["Hours of dependable DC power delivered", "Battery health, solar-input, and consumption trends", "Repeat use, referrals, and new customer deployments"],
    gallery: [
      { src: "/assets/abrob-solar-iot.jpg", alt: "ABROB solar and IoT power equipment", label: "Solar and battery platform" },
      { src: "/assets/hausa-farmer-smart-agriculture.jpg", alt: "Solar-enabled technology used in a practical outdoor setting", label: "Practical energy use" },
      { src: "/assets/abrob-electronics-workbench.jpg", alt: "Power and electronics components on an ABROB workbench", label: "Engineering and testing" },
    ],
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
    stage: "Education and R&D platform",
    stageDetail: "A modular learning and prototyping platform that connects classroom concepts to functioning robotic systems.",
    impactHighlights: [
      { value: "Code to motion", label: "Learning made tangible", detail: "Learners connect programming, sensors, motors, and controls in one working system." },
      { value: "Modular by design", label: "More than a robot car", detail: "Manual, sensor-driven, and autonomous behaviours can be explored on the same platform." },
      { value: "A path to autonomy", label: "Skills that compound", detail: "The system creates a foundation for computer vision, AI, and more advanced robotics." },
    ],
    successMeasures: ["Working learner prototypes completed", "Skills demonstrated across coding, wiring, and testing", "Progression from guided builds to independent projects"],
    gallery: [
      { src: "/assets/abrob-robotics-prototype.jpg", alt: "ABROB SmartDrive robotic vehicle prototype", label: "Robotic vehicle prototype" },
      { src: "/assets/hausa-robotics-lab.jpg", alt: "Learners building a robotics prototype in the lab", label: "Hands-on learning" },
      { src: "/assets/abrob-electronics-workbench.jpg", alt: "Embedded components prepared on an ABROB workbench", label: "Embedded engineering" },
    ],
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
    stage: "Reusable engineering foundation",
    stageDetail: "A shared technical base used to move more efficiently from a real-world problem to a tested embedded or connected prototype.",
    impactHighlights: [
      { value: "Faster prototyping", label: "Reusable building blocks", detail: "Common hardware and software components reduce the time needed to start a new product experiment." },
      { value: "Connected insight", label: "Data where it matters", detail: "Sensors, communication, and cloud services make remote status and alerts possible." },
      { value: "Cross-solution value", label: "One foundation, many uses", detail: "The platform supports energy, tracking, automation, agriculture, and smart-home work." },
    ],
    successMeasures: ["Time from problem definition to working prototype", "Reusable modules adopted across projects", "Devices reporting reliable data or alerts"],
    gallery: [
      { src: "/assets/abrob-electronics-workbench.jpg", alt: "Electronics components and prototype hardware on an ABROB workbench", label: "Prototype workbench" },
      { src: "/assets/abrob-iot-field.jpg", alt: "Connected equipment prepared for field monitoring", label: "IoT in the field" },
      { src: "/assets/hausa-iot-engineer.jpg", alt: "Engineer testing a connected sensor gateway", label: "Device testing" },
    ],
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
    stage: "Growing R&D portfolio",
    stageDetail: "ABROB is developing practical automation concepts that can be understood, maintained, and adapted to local operating conditions.",
    impactHighlights: [
      { value: "Local adaptability", label: "Designed for context", detail: "The work focuses on automation that can fit real operating conditions rather than only imported assumptions." },
      { value: "Practical automation", label: "From repetitive work to support", detail: "Sensors, controllers, and mechanical systems can reduce manual effort and improve consistency." },
      { value: "Prototype to deployment", label: "A deliberate path", detail: "The portfolio connects exploratory R&D with testable, maintainable practical systems." },
    ],
    successMeasures: ["Tasks automated or inspection time reduced", "Prototype reliability during field tests", "Time and cost saved for the people using the system"],
    gallery: [
      { src: "/assets/abrob-automation-floor.jpg", alt: "ABROB automation equipment in a practical work environment", label: "Automation concept" },
      { src: "/assets/abrob-robotics-prototype.jpg", alt: "ABROB robotics prototype ready for testing", label: "Robotics R&D" },
      { src: "/assets/abrob-engineering-team.jpg", alt: "ABROB engineering team collaborating on a robotics project", label: "Engineering collaboration" },
    ],
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
    stage: "Hands-on learning pathway",
    stageDetail: "A practical curriculum and project ecosystem designed to help learners build visible skills and confidence over time.",
    impactHighlights: [
      { value: "Visible learning", label: "Ideas become projects", detail: "Learners move from foundational concepts to circuits, code, robotics, and connected builds." },
      { value: "Skills that stack", label: "A clear progression", detail: "Each stage builds toward more complex problem-solving, technical confidence, and portfolio work." },
      { value: "Local maker ecosystem", label: "More people can build", detail: "Workshops, mentors, and practical kits help widen access to technical learning." },
    ],
    successMeasures: ["Learners completing projects and presenting prototypes", "Skills gained across electronics, coding, and robotics", "Schools, mentors, and programmes participating"],
    gallery: [
      { src: "/assets/hausa-school-robot-demo.jpg", alt: "Students engaging with a robotics demonstration", label: "Robotics demonstration" },
      { src: "/assets/hausa-steam-classroom.jpg", alt: "Students collaborating around an educational robot", label: "STEAM classroom" },
      { src: "/assets/hausa-girls-electronics.jpg", alt: "Girls learning electronics and circuit design", label: "Electronics learning" },
    ],
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
].map((project) => {
  const realMedia = realProjectMedia[project.slug];
  return realMedia ? { ...project, ...realMedia } : project;
});

export const getProjectBySlug = (slug: string) => projectCaseStudies.find((project) => project.slug === slug);
