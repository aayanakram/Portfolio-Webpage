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
    role: "IoT Systems Developer",
    organisation: "Kaizen Radical",
    organisationUrl: "https://www.eng.mcmaster.ca/",
    date: "July 2026 — Present",
    location: "Quebec, Canada",
    bullets: [
      "Building IoT-connected visual management stations that turn physical controls like buttons, toggles, and indicators into real-time digital events.",
      "Writing firmware to read hardware inputs, send updates over Wi-Fi to Odoo, and reflect ERP status changes through local feedback devices.",
    ],
    tags: ["Microcontrollers", "Firmware", "Odoo"],
  },
  {
    role: "Research Assistant",
    organisation: "ETF Lab · Faculty of Engineering, McMaster University",
    organisationUrl: "https://www.eng.mcmaster.ca/",
    date: "May 2026 — Present",
    location: "Hamilton, Ontario, Canada",
    bullets: [
      "Built MATLAB pipelines to convert simulated radar detections into reconstructed UAV trajectories and compare them against simulator ground truth.",
      "Tested constant-velocity and constant-acceleration Kalman filters to study how different tracking models respond to manoeuvring drone motion.",
      "Extended the project into a public UAV manoeuvre-classification pipeline using tracker-derived motion features and grouped machine-learning evaluation.",
    ],
    tags: ["MATLAB", "Radar Tracking", "Kalman Filtering"],
  },
  {
    role: "Embedded Computer Vision Intern",
    organisation: "Confidential Early-Stage Venture",
    date: "April 2026 — July 2026",
    location: "Arlington, Virginia, USA",
    bullets: [
      "Worked on edge-based object detection modules that connected YOLO/OpenCV vision software with embedded hardware for real-time inference.",
      "Used Roboflow to prepare custom datasets, train detection models, and improve performance under on-device compute and latency constraints.",
    ],
    tags: ["Python", "YOLO", "NVIDIA Jetson"],
  },
  {
    role: "Sustainability Research Intern",
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
      "Supported accelerator and vacuum-system work for the CLARA and the LHC (Large Hadron Collider), while using Molflow and Opera2D to simulate beamline vacuum conditions and magnetic fields.",
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
