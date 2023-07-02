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

export type ProjectList = [ProjectIntro[], ProjectInfo[], string[]];

export interface Project {
  nav: ProjectNav[],
  project: ProjectList[],
}