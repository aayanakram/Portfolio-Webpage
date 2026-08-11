export type Project = {
  slug: string;
  title: string;
  kicker: string;
  category: string;
  status: string;
  timeframe: string;
  githubUrl?: string;
  liveUrl?: string;
  summary: string;
  problem: string;
  approach: string;
  impact: string;
  tags: string[];
  highlights: string[];
  nextSteps: string[];
};

export const projects: Project[] = [
  {
    slug: "autonomous-uav",
    title: "Autonomous 10-Inch UAV System",
    kicker: "Flight platform · autonomy · edge compute",
    category: "Autonomous Systems",
    status: "In development",
    timeframe: "2026",
    summary:
      "A 10-inch, heavy-lift multirotor featuring a 4.8:1 thrust-to-weight ratio. I utilised ArduPilot dynamic notch filtering to minimise mechanical resonance, allowing an onboard Raspberry Pi to autonomously detect targets in real time. To secure BVLOS operations, I integrated a dual-band ELRS GeminiX system and isolated the GNSS/magnetometer to minimise EMI.",
    problem:
      "Small UAV platforms are useful for search, inspection, and field robotics, but reliable autonomy requires the airframe, power system, RF link, sensors, and compute stack to be designed as one integrated system.",
    approach:
      "The build focuses on a 6S propulsion architecture, ArduPilot-compatible flight control, ExpressLRS communication, GPS/compass integration, and a companion-computer path for perception and mission logic.",
    impact:
      "The project gives me a full-stack UAV testbed for learning flight dynamics, embedded integration, telemetry, power budgeting, vibration control, and practical autonomy.",
    tags: ["ArduPilot", "MAVLink", "UAV", "ExpressLRS"],
    highlights: [
      "Designed the platform around a 10-inch frame, 6S battery system, and high-torque motor/propeller combination.",
      "Planned a companion-computer layer for computer vision and high-level mission logic over MAVLink.",
      "Focused on field-relevant reliability: RF link selection, GPS placement, wiring, vibration isolation, and power distribution.",
    ],
    nextSteps: [
      "Complete hardware assembly and safe bench testing.",
      "Tune flight controller parameters and validate vibration filtering.",
      "Integrate perception pipeline with telemetry and mission logging.",
    ],
  },
  {
    slug: "drone-tracking-research",
    title: "Drone Tracking Research",
    kicker: "Radar processing · tracking · machine learning",
    category: "Autonomous Systems",
    status: "Completed",
    timeframe: "2025",
    summary:
      "Built a simulation-based UAV radar tracking pipeline combining radar measurement processing, spherical-to-Cartesian reconstruction, CV/CA Kalman filtering, temporal feature engineering, and Random Forest manoeuvre classification. The final corrected experiment achieved 80.58% grouped cross-validation accuracy across 35 simulated trials and 7 motion classes.",
    problem:
      "Reliable UAV tracking requires robust sensor fusion, trajectory estimation, and manoeuvre classification to distinguish real targets from clutter and maintain accuracy across motion patterns.",
    approach:
      "Developed a simulation-based pipeline for radar measurement processing, coordinate reconstruction, CV/CA Kalman filtering, temporal feature extraction, and Random Forest manoeuvre classification.",
    impact:
      "The research produced an experimental tracking workflow with improved classification accuracy and helped validate radar-based target tracking strategies for small UAV applications.",
    tags: ["MATLAB", "Python", "Kalman Filtering", "Radar Tracking"],
    highlights: [
      "Implemented spherical-to-Cartesian reconstruction and adaptive Kalman filtering for UAV motion tracking.",
      "Engineered temporal features and used Random Forest classification to distinguish seven motion classes.",
      "Validated the pipeline across 35 simulated trials with grouped cross-validation.",
    ],
    nextSteps: [
      "Extend the pipeline to real-world radar data and on-board processing.",
      "Refine manoeuvre classification and state estimation under noise.",
      "Integrate the tracker with a UAV autonomy demo or visualization tool.",
    ],
    githubUrl: "https://github.com/aayanakram/DroneTrackingResearch",
  },
  {
    slug: "stm32-flight-controller",
    title: "STM32-Based Flight Controller",
    kicker: "Firmware · PCB · embedded control",
    category: "Embedded Systems",
    status: "Design project",
    timeframe: "2026",
    summary:
      "Designing an STM32F405-based custom flight controller in Altium, with emphasis on reliable power delivery, signal integrity, and EMI reduction. The design includes a switching buck converter for the 5V rail, a low-noise 3.3V regulator for sensors, TVS input protection, external crystal oscillator support, and local decoupling for stable embedded operation.",
    problem:
      "Flight control depends on reliable timing, clean sensor interfaces, robust firmware structure, and hardware that can tolerate noisy electromechanical environments.",
    approach:
      "The project focuses on STM32 peripheral integration, PCB planning, IMU communication, UART/SPI/I2C buses, and firmware architecture for future control and logging.",
    impact:
      "It strengthens the embedded foundation behind UAV systems instead of only treating flight controllers as black-box modules.",
    tags: ["STM32", "Embedded C", "PCB Design", "Firmware Design"],
    highlights: [
      "Mapped out firmware responsibilities across sensing, communication, timing, and actuator control.",
      "Explored how hardware layout and firmware structure affect debugging and reliability.",
      "Built the project as a bridge between digital systems coursework and real flight hardware.",
    ],
    nextSteps: [
      "Finalize schematic and board layout decisions.",
      "Create bring-up firmware for sensor reads and serial telemetry.",
      "Add logging and test routines before attempting any flight-critical use.",
    ],
  },
  {
    slug: "sar-human-detection",
    title: "SAR Human Detection Module",
    kicker: "Computer vision · rescue workflow",
    category: "Perception",
    status: "Prototype",
    timeframe: "2026",
    summary:
      "Developing a SAR-focused perception module for UAV operations, combining lightweight onboard compute with a YOLOv8-based human detection pipeline. The system is designed to process camera input on a Raspberry Pi, support real-time target identification, and integrate with future autonomous search-and-rescue flight workflows.",
    problem:
      "In a rescue setting, aerial imagery is only useful if it can be processed quickly enough to help operators identify people or regions of interest.",
    approach:
      "The module uses a computer-vision pipeline built around image preprocessing, model inference, confidence filtering, and deployment constraints for compact hardware.",
    impact:
      "It connects ML-based perception with real embedded constraints such as latency, camera quality, compute budget, and mission-level integration.",
    tags: ["Python", "YOLOv8", "Raspberry Pi", "Roboflow"],
    highlights: [
      "Structured the project around a practical UAV search-and-rescue use case.",
      "Explored detection confidence, false positives, and environmental variability.",
      "Designed the module to eventually interface with flight telemetry and operator feedback.",
    ],
    nextSteps: [
      "Collect a more diverse image dataset for field-like conditions.",
      "Benchmark model speed on Raspberry Pi or similar edge hardware.",
      "Connect detections to mapping, logging, or ground-station display.",
    ],
  },
  {
    slug: "discrete-logic-alu",
    title: "4-Bit Discrete Logic ALU",
    kicker: "Digital logic · hardware fundamentals",
    category: "Digital Systems",
    status: "Hardware project",
    timeframe: "2026",
    summary:
      "Built a 4-bit ripple-carry adder from discrete 74-series ICs, cascading half/full-adder bit-slices to propagate carry from LSB to MSB. Verified outputs with an Arduino that sampled GPIO states and used C++ bit manipulation to decode the parallel results in real time.",
    problem:
      "Digital logic can feel abstract until timing, wiring, fan-out, signal levels, and physical debugging become part of the design process.",
    approach:
      "The ALU implements core arithmetic and bitwise operations using discrete logic, with attention to how control signals and data paths map onto actual hardware.",
    impact:
      "The project provides a concrete foundation for understanding processors, datapaths, FPGA design, and the hardware beneath embedded systems.",
    tags: ["Digital Logic", "Logic Gates", "74-Series ICs", "Breadboarding"],
    highlights: [
      "Implemented addition, subtraction, AND, OR, and XOR style operation paths.",
      "Focused on clean signal routing and understandable hardware documentation.",
      "Used the project to reinforce logic design from first principles.",
    ],
    nextSteps: [
      "Add clearer test points and debugging indicators.",
      "Document the truth tables and control-signal mapping.",
      "Expand the design toward a small educational CPU-style datapath.",
    ],
  },
  {
    slug: "glxy-news",
    title: "GLXY News",
    kicker: "Full-stack web · editorial workflow",
    category: "Software Systems",
    status: "Live project",
    timeframe: "2026",
    liveUrl: "https://glxy-news.vercel.app/",
    summary:
      "Built a full-stack publishing workflow for a mobile esports news platform with protected staff authentication, role-based permissions, draft creation, editorial review, and publishing controls. Structured the Supabase/PostgreSQL backend around games, sections, staff profiles, post statuses, and RLS policies for writer, editor, and admin access.",
    problem:
      "Community news teams need a lightweight publishing workflow that separates drafts, review, and published content without forcing everything through generic social media posts.",
    approach:
      "I built a Next.js and Supabase-backed site with game-specific pages, newsroom access, staff roles, draft management, review queues, and a publishing flow for articles.",
    impact:
      "The project demonstrates practical product thinking: authentication, database-backed content, editorial permissions, UI polish, deployment, and iteration from user feedback.",
    tags: ["Next.js", "Supabase", "Auth", "Vercel"],
    highlights: [
      "Created sections for CODM, R6M, and Valorant Mobile coverage.",
      "Built staff-facing newsroom flows for drafts, review, editing, and publishing.",
      "Deployed the platform on Vercel and iterated on mobile navigation, validation, and layout issues.",
    ],
    nextSteps: [
      "Add article templates for transfers, interviews, and tournament reports.",
      "Improve editor dashboards and publication analytics.",
      "Explore automated Discord posting after publication.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
