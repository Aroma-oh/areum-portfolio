export type Skill = {
  stack: string;
  name: string;
  value: number;
  className: string;
  content: string;
};

export type SkillSet = [string, Skill[], string];

export interface OpenModalDataProps {
  stack: string;
  name: string;
  content: string;
}

export interface ProgressCircleProps {
  openModal: boolean;
  openStack: {
    frontend: boolean;
    backend: boolean;
    etc: boolean;
  };
}

export interface CircleAnimationProps {
  translation?: number;
  rotation: number;
  rotate?: number;
  isRotate: boolean;
}
