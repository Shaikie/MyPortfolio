/* Graphite Field Notes: content model keeps evidence, links, and future case studies configurable. */
export type Project = {
  name: string;
  slug: string;
  category: "Curated" | "Lab" | "Source";
  description: string;
  status: string;
  year: string;
  technologies: string[];
  featured?: boolean;
  github?: string;
  live?: string;
  problem: string;
  solution: string;
  architecture: string;
  implementation: string;
  challenges: string;
  lessons: string;
};

export const projects: Project[] = [
  {
    name: "PractiLink",
    slug: "practilink",
    category: "Curated",
    description: "A project record awaiting verified details from the repository owner.",
    status: "Content needed",
    year: "—",
    technologies: ["Technology stack to confirm"],
    featured: true,
    problem: "Add the verified problem statement here.",
    solution: "Add a concise description of what was built here.",
    architecture: "Add the system architecture, services, and data flow here.",
    implementation: "Add the parts personally implemented here.",
    challenges: "Add verified engineering challenges here.",
    lessons: "Add lessons learned and next steps here.",
  },
  {
    name: "MediFind Tanzania",
    slug: "medifind-tanzania",
    category: "Curated",
    description: "A project record awaiting verified details from the repository owner.",
    status: "Content needed",
    year: "—",
    technologies: ["Technology stack to confirm"],
    featured: true,
    problem: "Add the verified problem statement here.",
    solution: "Add a concise description of what was built here.",
    architecture: "Add the system architecture, services, and data flow here.",
    implementation: "Add the parts personally implemented here.",
    challenges: "Add verified engineering challenges here.",
    lessons: "Add lessons learned and next steps here.",
  },
  {
    name: "DarCommute AI",
    slug: "darcommute-ai",
    category: "Lab",
    description: "An experiment record awaiting verified details, links, and outcomes.",
    status: "Content needed",
    year: "—",
    technologies: ["Technology stack to confirm"],
    problem: "Add the verified problem statement here.",
    solution: "Add a concise description of what was built here.",
    architecture: "Add the system architecture, services, and data flow here.",
    implementation: "Add the parts personally implemented here.",
    challenges: "Add verified engineering challenges here.",
    lessons: "Add lessons learned and next steps here.",
  },
  {
    name: "BiasharaSmart",
    slug: "biasharasmart",
    category: "Source",
    description: "A repository candidate awaiting curation and verified project notes.",
    status: "To review",
    year: "—",
    technologies: ["Repository data to confirm"],
    problem: "Add the verified problem statement here.",
    solution: "Add a concise description of what was built here.",
    architecture: "Add the system architecture, services, and data flow here.",
    implementation: "Add the parts personally implemented here.",
    challenges: "Add verified engineering challenges here.",
    lessons: "Add lessons learned and next steps here.",
  },
];

export const skillGroups = [
  { label: "Programming", items: ["PHP", "JavaScript", "TypeScript", "Python", "Java", "SQL"], note: "Confirm current level and active usage." },
  { label: "Frameworks", items: ["Laravel", "React", "Next.js"], note: "Confirm which frameworks belong in the public profile." },
  { label: "Systems", items: ["Git", "GitHub", "Linux", "VS Code"], note: "Add deployment platforms only when verified." },
];

export const labNotes = [
  ["01", "AI experiments", "Small investigations into practical interfaces, agents, and applied machine intelligence."],
  ["02", "Security practice", "A place for verified cybersecurity learning, defensive experiments, and write-ups."],
  ["03", "Systems work", "Linux, automation, scripts, and the infrastructure details that make software dependable."],
  ["04", "Prototypes", "Early ideas kept visible: testable, unfinished, and useful as evidence of how thinking evolves."],
];
