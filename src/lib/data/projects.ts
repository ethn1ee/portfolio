type Project = {
  title: string;
  description: string[];
  images: string[];
  github?: string;
  website?: string;
  techStack: string[];
};

const projects: Readonly<Project[]> = [
  {
    title: "Kubernetes Homelab",
    description: [
      "K8s running on a raspberry pi 5.",
      "Managing postgres, redis, prometheus, vault, and a lot more.",
    ],
    images: [
      "/projects/kubernetes-homelab/raspberry-pi.png",
      "/projects/kubernetes-homelab/argocd.png",
    ],
    techStack: ["Kubernetes", "Docker", "Helm", "Go", "gRPC"],
    github: "https://github.com/spitikos",
    website: "https://taehoonlee.cloud",
  },
  {
    title: "llog",
    description: [
      "A fast, lightweight CLI for journaling directly from your terminal.",
    ],
    images: [
      "https://github.com/ethn1ee/llog/blob/6375f3dc71e77054de081c2719377e60792248e1/assets/screenshot.png",
    ],
    techStack: ["Go", "SQLite", "Cobra", "Gorm", "Viper"],
    github: "https://github.com/ethn1ee/llog",
  },
  {
    title: "Committer",
    description: [
      "A CLI tool to generate git commit messages with Google Gemini.",
    ],
    images: ["/projects/committer/demo.gif"],
    techStack: ["Go", "Cobra", "Viper"],
    github: "https://github.com/ethn1ee/committer",
  },
  {
    title: "Resume Builder",
    description: [
      "Write resume declaratively with a single yaml file.",
      "Github action compiles and releases the pdf automatically.",
    ],
    images: [],
    techStack: ["Typst", "GitHub Action"],
    github: "https://github.com/ethn1ee/resume",
  },
  {
    title: "emorylife.net",
    description: ["Korean community hub at Emory University."],
    images: [
      "/projects/emorylife/homepage.png",
      "/projects/emorylife/login.png",
    ],
    techStack: ["Next.js", "TypeScript", "tRPC", "PostgreSQL"],
    github: "https://github.com/ethn1ee/emorylife",
    website: "https://emorylife.net",
  },
  {
    title: "dooleyonline.net",
    description: [
      "Overengineered secondhand market at Emory University.",
      "A dynamic website where students can buy/sell items, ask questions, and find housing.",
    ],
    images: [],
    techStack: ["Next.js", "Django", "TypeScript", "PostgreSQL"],
    github: "https://github.com/dooleyonline",
    website: "https://dooleyonline.net",
  },
];

export { projects, type Project };
