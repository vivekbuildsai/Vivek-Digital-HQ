export interface Project {
  id: number;
  slug: string;

  title: string;
  category: string;

  overview: string;

  challenge: string;

  solution: string;

  architecture: string[];

  kubernetesObjects: string[];

  projectStructure: string[];

  commands: string[];

  learnings: string[];

  interviewQuestions: string[];

  technologies: string[];

  github: string;

  documentation: string;

  demo?: string;

  featured: boolean;
}
