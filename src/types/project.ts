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
  nav: ProjectNav,
  image: string[],
  intro: ProjectIntro[],
  info: ProjectInfo[],
}

export interface ProjectType {
  nav?: ProjectNav[],
  project: ProjectList[],
}