export type ProjectStatus = "done" | "in-progress" | "ongoing";

export interface Project {
  id: string;
  title: string;
  summary: string;
  status: ProjectStatus;
  tags: string[];
  /** Optional internal page link (e.g. "/") */
  href?: string;
  /** Optional GitHub repo URL — paste full URL below on each project */
  repo?: string;
}

export const projects: Project[] = [
  {
    id: "discord-triage",
    title: "Discord Triage",
    summary:
      "Elastic Security on Proxmox (Fleet, TLS, Tailscale-only access) with an AI-assisted alert enrichment pipeline that posts triage to Discord with ATT&CK context.",
    status: "ongoing",
    tags: ["Elastic", "Docker", "Proxmox", "Tailscale", "Detection"],
    repo: "https://github.com/MrXuMa/AI-SOC-Analyst-Elastic",
  },
  {
    id: "machine-learning-malware-detection-research",
    title: "Machine Learning Malware Detection Research",
    summary:
      "EMBER 2018 modality study: the same PE feature vectors as 2D images vs 1D audio for CNNs in PyTorch — comparing how representation affects classification.",
    status: "in-progress",
    tags: ["PyTorch", "CNN", "EMBER", "Research"],
    repo: "https://github.com/MrXuMa/malware_classification",
  },
  {
    id: "gym-app",
    title: "Gym App",
    summary:
      "Web app for tracking my gym progress and creating custom workouts. Includes nutrition tracking with photo uploads and analysis.",
    status: "ongoing",
    tags: ["React","Supabase", "Framer Motion", "TypeScript"],
    repo: "https://github.com/MrXuMa/gym-app",
  },
  {
    id: "tfink-com",
    title: "tfink.com",
    summary:
      "Personal cybersecurity portfolio and blog built with Astro, UnoCSS, and Motion.",
    status: "in-progress",
    tags: ["Astro", "UnoCSS", "Portfolio"],
    href: "/",
    repo: "https://github.com/MrXuMa/tfink.com",
  },
];

export function statusLabel(status: ProjectStatus): string {
  switch (status) {
    case "done":
      return "Done";
    case "in-progress":
      return "In progress";
    case "ongoing":
      return "Ongoing";
  }
}
