export interface ProjectNav {
  type: string;
  name: string;
  create: string;
  period: number;
}

export interface ProjectIntro {
  title: string;
  content: string[];
}

export interface ProjectInfo {
  title: string;
  href?: string;
  content?: string;
}

export interface ProjectList {
  image: string[],
  intro: {
    title: string;
    content: string[]
  }[],
  info: {
    title: string;
    href?: string;
    content?: string;
  }[],
}

export interface Project {
  nav: ProjectNav[],
  project: ProjectList[],
}