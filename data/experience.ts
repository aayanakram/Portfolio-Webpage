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
    "role": "Connected & Automated Vehicles (CAVs) Team Member",
    "organisation": "McMaster EcoCAR",
    "organisationUrl": "https://www.macecocar.ca/",
    "date": "October 2026 — Present",
    "location": "Hamilton, Ontario, Canada",
    "bullets": [
      "Integrating Simulink and ROS 2 for closed-loop sensor and control testing.",
      "Planning vehicle baseline tests for braking, acceleration, steering, and cornering.",
      "Comparing C++ search algorithms for the CAV challenge."
    ],
    "tags": [
      "MATLAB",
      "Simulink",
      "ROS 2",
      "C++"
    ]
  },
  {
    "role": "Student Researcher - UAV Tracking & Machine Learning",
    "compact": true,
    "organisation": "ETF Lab · Faculty of Engineering, McMaster University",
    "organisationUrl": "https://www.eng.mcmaster.ca/",
    "date": "May 2026 — October 2026",
    "location": "Hamilton, Ontario, Canada",
    "description": "Research in the Estimation, Tracking, & Fusion Lab on radar-based UAV tracking, state estimation, and machine learning for motion classification.",
    "tags": [
      "MATLAB",
      "Radar",
      "Kalman Filtering"
    ]
  },
  {
    "role": "Embedded Systems & IoT Developer",
    "compact": true,
    "organisation": "Kaizen Radical",
    "organisationUrl": "https://kaizenradical.com/?lang=en",
    "date": "July 2026 — September 2026",
    "location": "Quebec, Canada",
    "description": "Firmware and system architecture for modular IoT-connected visual management stations.",
    "tags": [
      "ESP32-S3",
      "C++",
      "Firmware"
    ]
  },
  {
    "role": "Embedded Computer Vision Intern",
    "compact": true,
    "organisation": "Confidential Startup",
    "date": "April 2026 — July 2026",
    "location": "Arlington, Virginia, USA",
    "description": "Embedded computer vision for mobile object-detection platforms and edge AI deployment.",
    "tags": [
      "NVIDIA Jetson",
      "YOLO",
      "PyTorch"
    ]
  },
  {
    "role": "Automation & Sustainability Research Intern",
    "organisation": "NGF Europe",
    "organisationUrl": "https://www.ngfeurope.com/",
    "date": "August 2024",
    "location": "Liverpool, United Kingdom",
    "compact": true,
    "tags": [
      "Automation",
      "Sustainability"
    ],
    "description": "Researched automation and robotics at NGF Europe to reduce manufacturing emissions and improve sustainability."
  },
  {
    "role": "Accelerator Physics Intern",
    "organisation": "STFC @ Daresbury Labs",
    "organisationUrl": "https://www.ukri.org/councils/stfc/",
    "date": "July — August 2024",
    "location": "Warrington, United Kingdom",
    "compact": true,
    "tags": [
      "Accelerator Physics",
      "Opera2D"
    ],
    "description": "Ultra-high-vacuum systems for the LHC, accelerator maintenance, and electromagnetic simulation."
  },
  {
    "role": "Systems Engineering Intern",
    "organisation": "Arm",
    "organisationUrl": "https://www.arm.com/",
    "date": "May 2024",
    "location": "Manchester, United Kingdom",
    "compact": true,
    "tags": [
      "ARM Cortex-M4",
      "Embedded C"
    ],
    "description": "Embedded systems, telemetry, RF communication, and collision-warning concepts for satellite systems."
  },
  {
    "role": "Simulation Engineering Intern",
    "organisation": "Siemens",
    "organisationUrl": "https://www.siemens.com/en-gb/",
    "date": "February 2024",
    "location": "Manchester, United Kingdom",
    "compact": true,
    "tags": [
      "Digital Twins",
      "Siemens Simcenter"
    ],
    "description": "Electromechanical simulations and digital-twin concepts using Siemens Simcenter."
  }
];
