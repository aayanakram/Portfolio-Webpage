export type Experience = {
  role: string;
  organisation: string;
  organisationUrl?: string;
  date: string;
  location: string;
  bullets?: string[];
  description?: string;
  tags: string[];
  compact?: boolean;
};

export const experiences: Experience[] = [
    {
    role: "Research Assistant – UAV Radar Signal Processing & ML",
    organisation: "ETF Lab · Faculty of Engineering, McMaster University",
    organisationUrl: "https://www.eng.mcmaster.ca/",
    date: "May 2026 — Present",
    location: "Hamilton, Ontario, Canada",
    bullets: [
      "Developed MATLAB radar-processing pipelines to reconstruct UAV trajectories from simulated detections and benchmark Constant-Velocity and Constant-Acceleration Kalman filters against ground truth",
      "Built a reproducible 35-trial dataset across seven UAV maneuver classes, engineering 29 radar- and tracker-derived temporal motion features",
      "Trained and evaluated classifiers using leakage-safe Leave-One-Trial-Out cross-validation, achieving 80.6% accuracy and 0.81 macro-F1 with a tuned random forest",
    ],
    tags: ["MATLAB", "Kalman Filtering", "Machine Learning", "Radar"],
  },
  {
    role: "Embedded Systems & IoT Developer",
    organisation: "Kaizen Radical",
    organisationUrl: "https://kaizenradical.com/?lang=en",
    date: "July 2026 — September 2026",
    location: "Quebec, Canada",
    bullets: [
      "Developed ESP32-S3 firmware in C++/FreeRTOS for event-driven visual-management stations integrating digital and analog controls, rotary encoders, indicators, and persistent device state",
      "Engineered bidirectional MQTT/TLS communication with Odoo ERP, including offline event buffering, automatic recovery, telemetry, watchdogs, OTA updates, and multi-device synchronisation",
    ],
    tags: ["ESP32-S3", "C++", "FreeRTOS", "MQTT", "Odoo"],
  },
  {
    role: "Embedded Computer Vision Intern",
    organisation: "Confidential Early-Stage Venture",
    date: "April 2026 — July 2026",
    location: "Arlington, Virginia, USA",
    bullets: [
      "Developed and deployed custom YOLO object-detection pipelines on NVIDIA Jetson hardware using Python, PyTorch, and OpenCV, enabling real-time inference across two mobile embedded prototypes",
      "Built and trained custom datasets in Roboflow, iterating on model and deployment parameters for compute- and latency-constrained edge inference ahead of broader autonomy-stack integration",
    ],
    tags: ["NVIDIA Jetson", "PyTorch", "OpenCV", "YOLOv8", "Edge AI"],
  },
  {
    role: "Automation & Sustainability Research Intern",
    organisation: "NGF Europe",
    organisationUrl: "https://www.ngfeurope.com/",
    date: "August 2024",
    location: "Liverpool, United Kingdom",
    compact: true,
    description:
      "Analysed manufacturing workflows and interviewed cross-functional executives to identify opportunities in automation, energy efficiency, waste reduction, and sustainability, producing and presenting a research report.",
    tags: ["Automation", "Manufacturing", "Sustainability"],
  },
  {
    role: "Accelerator Physics Intern",
    organisation: "STFC @ Daresbury Labs",
    organisationUrl: "https://www.ukri.org/councils/stfc/",
    date: "July — August 2024",
    location: "Warrington, United Kingdom",
    compact: true,
    description:
      "Supported accelerator and vacuum-system work around CLARA and LHC-related research infrastructure, while using Molflow and Opera2D to explore beamline vacuum conditions and magnetic fields.",
    tags: ["RF Systems", "Vacuum Systems", "Simulations"],
  },
  {
    role: "Systems Engineering Intern",
    organisation: "Arm",
    organisationUrl:"https://www.arm.com/",
    date: "May 2024",
    location: "Manchester, United Kingdom",
    compact: true,
    description:
      "Programmed Arm-based microcontrollers for satellite telemetry, radio communication, and collision-warning prototypes tested across multiple teams.",
    tags: ["ARM Cortex-M4", "Embedded C", "Telemetry"],
  },
  {
    role: "Simulation Engineering Intern",
    organisation: "Siemens",
    organisationUrl:"https://www.siemens.com/en-gb/",
    date: "February 2024",
    location: "Manchester, United Kingdom",
    compact: true,
    description:
      "Modelled and calibrated electromechanical digital twins in Siemens Simcenter and applied simulation-led design to a smart-building retrofit project.",
    tags: ["Digital Twins", "Siemens Simcenter", "Automation"],
  },
];
