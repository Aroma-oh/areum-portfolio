export interface ProjectNav {
  type: string;
  name: string;
  create: string;
  period: number;
  content: string;
  stack: string;
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
  nav: ProjectNav,
  intro: ProjectIntro[],
  info: ProjectInfo[],
  image: string[],
  mainImage: string,
}

export interface ProjectType {
  project: ProjectList[],
}