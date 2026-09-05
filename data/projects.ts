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
    title: "Autonomous Search-and-Rescue UAV",
    kicker: "Flight platform · autonomy · edge compute",
    category: "Autonomous Systems",
    status: "In development",
    timeframe: "2026",
    summary:
      "Engineered a 6S, 10-inch autonomous UAV integrating ArduPilot flight control, GPS navigation, long-range telemetry, and NVIDIA Jetson companion computing. Developed an onboard YOLO human-detection pipeline using PyTorch and OpenCV, optimised with TensorRT and integrated over MAVLink to transmit validated detection alerts to the ground station.",
    problem:
      "Small UAV platforms are useful for search, inspection, and field robotics, but reliable autonomy requires the airframe, power system, RF link, sensors, and compute stack to be designed as one integrated system.",
    approach:
      "The build focuses on a 6S propulsion architecture, ArduPilot-compatible flight control, ExpressLRS communication, GPS/compass integration, and a companion-computer path for perception and mission logic.",
    impact:
      "The project gives me a full-stack UAV testbed for learning flight dynamics, embedded integration, telemetry, power budgeting, vibration control, and practical autonomy.",
    tags: ["ArduPilot", "MAVLink", "NVIDIA Jetson", "TensorRT"],
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
    title: "UAV Radar Tracking & Classification",
    kicker: "Radar processing · tracking · machine learning",
    category: "Autonomous Systems",
    status: "Completed",
    timeframe: "2025",
    summary:
      "Developed a MATLAB radar-processing pipeline to reconstruct UAV trajectories from simulated detections and benchmark Constant-Velocity and Constant-Acceleration Kalman filters against ground truth. Built a 35-trial, seven-class manoeuvre dataset with 29 radar- and tracker-derived motion features, achieving 80.6% accuracy and 0.81 macro-F1 with a tuned random forest.",
    problem:
      "Reliable UAV tracking requires robust sensor fusion, trajectory estimation, and manoeuvre classification to distinguish real targets from clutter and maintain accuracy across motion patterns.",
    approach:
      "Developed a simulation-based pipeline for radar measurement processing, coordinate reconstruction, CV/CA Kalman filtering, temporal feature extraction, and Random Forest manoeuvre classification.",
    impact:
      "The research produced an experimental tracking workflow with improved classification accuracy and helped validate radar-based target tracking strategies for small UAV applications.",
    tags: ["MATLAB", "Radar", "Kalman Filtering", "Machine Learning"],
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
      "Designed, assembled, and brought up a custom STM32F405 flight controller, completing schematic capture and PCB layout in Altium with integrated power regulation, IMU/GPS interfaces, SWD, and motor outputs. Developed real-time C/C++ firmware using FreeRTOS, interrupts, and DMA for sensor acquisition, attitude estimation, telemetry, failsafes, and closed-loop PID control.",
    problem:
      "Flight control depends on reliable timing, clean sensor interfaces, robust firmware structure, and hardware that can tolerate noisy electromechanical environments.",
    approach:
      "The project focuses on STM32 peripheral integration, PCB planning, IMU communication, UART/SPI/I2C buses, and firmware architecture for future control and logging.",
    impact:
      "It strengthens the embedded foundation behind UAV systems instead of only treating flight controllers as black-box modules.",
    tags: ["STM32", "Embedded C/C++", "FreeRTOS", "Altium Designer"],
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
    title: "Industrial IoT Visual Management System",
    kicker: "Computer vision · rescue workflow",
    category: "Perception",
    status: "Prototype",
    timeframe: "2026",
    summary:
      "Developed ESP32-S3 firmware in C++/FreeRTOS for modular IoT visual-management stations integrating digital and analog controls, rotary encoders, indicators, and persistent device state. Engineered bidirectional MQTT/TLS communication with Odoo ERP, including offline event buffering, automatic recovery, telemetry, watchdogs, OTA updates, and multi-device synchronisation.",
    problem:
      "In a rescue setting, aerial imagery is only useful if it can be processed quickly enough to help operators identify people or regions of interest.",
    approach:
      "The module uses a computer-vision pipeline built around image preprocessing, model inference, confidence filtering, and deployment constraints for compact hardware.",
    impact:
      "It connects ML-based perception with real embedded constraints such as latency, camera quality, compute budget, and mission-level integration.",
    tags: ["ESP32", "C++", "FreeRTOS", "MQTT", "IoT"],
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
    slug: "glxy-news",
    title: "GLXY News",
    kicker: "Full-stack web · editorial workflow",
    category: "Software Systems",
    status: "Live project",
    timeframe: "2026",
    liveUrl: "https://glxy-news.vercel.app/",
    summary:
      "Built a full-stack publishing platform for mobile esports using Next.js, React, Supabase, and PostgreSQL. Implemented role-based newsroom workflows, protected authentication, Draft → Review → Published state management, game-specific content architecture, and row-level security for editorial access control.",
    problem:
      "Community news teams need a lightweight publishing workflow that separates drafts, review, and published content without forcing everything through generic social media posts.",
    approach:
      "I built a Next.js and Supabase-backed site with game-specific pages, newsroom access, staff roles, draft management, review queues, and a publishing flow for articles.",
    impact:
      "The project demonstrates practical product thinking: authentication, database-backed content, editorial permissions, UI polish, deployment, and iteration from user feedback.",
    tags: ["Next.js", "Supabase", "PostgreSQL", "RBAC"],
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
  {
    slug: "discrete-logic-adder",
    title: "4-Bit Discrete Ripple-Carry Adder",
    kicker: "Digital logic · hardware fundamentals",
    category: "Digital Systems",
    status: "Hardware project",
    timeframe: "2026",
    summary:
      "Built a 4-bit ripple-carry adder from discrete 74-series logic ICs by cascading half- and full-adder bit slices from LSB to MSB. Verified hardware outputs using an Arduino to sample parallel GPIO states and C++ bit manipulation to decode and validate arithmetic results in real time.",
    problem:
      "Digital logic can feel abstract until timing, wiring, fan-out, signal levels, and physical debugging become part of the design process.",
    approach:
      "The adder implements core arithmetic operations using discrete logic, with attention to how control signals and data paths map onto actual hardware.",
    impact:
      "The project provides a concrete foundation for understanding processors, datapaths, FPGA design, and the hardware beneath embedded systems.",
    tags: ["Digital Logic", "74-Series ICs", "C++", "Hardware Verification"],
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
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
