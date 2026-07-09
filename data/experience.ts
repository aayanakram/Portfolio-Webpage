export type Experience = {
  role: string;
  organisation: string;
  organisationUrl?: string;
  date: string;
  location: string;
  bullets: string[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    role: "Research Assistant",
    organisation: "ETF Lab · Faculty of Engineering, McMaster University",
    organisationUrl: "https://www.eng.mcmaster.ca/",
    date: "May 2026 — Present",
    location: "Hamilton, ON, Canada",
    bullets: [
      "Developing MATLAB algorithms to validate radar-based UAV tracking simulations against real-world flight data.",
      "Performing error analysis and parameter tuning to enhance simulation fidelity.",
      "Using these high-fidelity datasets to support future ML-based autonomous drone detection and tracking.",
    ],
    tags: ["MATLAB", "RADAR", "UAV Tracking"],
  },
  {
    role: "Sustainability Research Intern",
    organisation: "NGF Europe",
    organisationUrl: "https://www.ngfeurope.com/",
    date: "August 2024",
    location: "Liverpool, United Kingdom",
    bullets: [
      "Interviewed executives across key departments to evaluate automation opportunities in the glass manufacturing process.",
      "Analysed batch production workflows and identified areas for operational and sustainability improvement.",
      "Presented findings and my recommendations to the executive project team.",
    ],
    tags: ["Automation", "Manufacturing", "Sustainability"],
  },
  {
    role: "Accelerator Physics Intern",
    organisation: "STFC @ Daresbury Labs",
    organisationUrl: "https://www.ukri.org/councils/stfc/",
    date: "July — August 2024",
    location: "Warrington, United Kingdom",
    bullets: [
      "Supported routine inspection and maintenance on the CLARA and VELA particle accelerators.",
      "Prepared and verified vacuum chambers seals and joints utilised in RF dipole crab cavities, ensuring compliance for installation at the Large Hadron Collider (LHC).",
      "Utilised Molflow and Opera2D to simulate accelerator vacuum and magnetic-field conditions.",
    ],
    tags: ["RF Systems", "Vacuum Systems", "Molflow"],
  },
  {
    role: "Systems Engineering Intern",
    organisation: "Arm",
    organisationUrl:"https://www.arm.com/",
    date: "May 2024",
    location: "Manchester, United Kingdom",
    bullets: [
      "Programmed ARM Cortex‑M4 microcontrollers to collect re‑entry telemetry during satellite drop tests.",
      "Developed collision-warning logic and radio-link protocols to coordinate prototypes across multiple teams.",
    ],
    tags: ["ARM Cortex-M4", "Embedded C", "Telemetry"],
  },
  {
    role: "Simulation Engineering Intern",
    organisation: "Siemens",
    organisationUrl:"https://www.siemens.com/en-gb/",
    date: "February 2024",
    location: "Manchester, United Kingdom",
    bullets: [
      "Modelled and calibrated digital twins for electromechanical systems using Siemens Simcenter.",
      "Proposed automation and digital-twin technologies to resolve customer complaints for a smart-hotel retrofit project under budget constraints.",
    ],
    tags: ["Digital Twins", "Siemens Simcenter", "Automation"],
  },
];
