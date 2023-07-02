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

// 프로젝트 소개, 프로젝트 정보, 프로젝트 이미지 
export type ProjectList = [ProjectIntro[], ProjectInfo[], string[]]; 