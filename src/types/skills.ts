export type Skill = {
  stack: string;
  name: string;
  value: number;
  className: string;
  content: string;
};

export type SkillSet = [string, Skill[], () => void];

export interface OpenModalDataProps {
  stack: string;
  name: string;
  content: string;
}

export interface ProgressCircleProps {
  openFront: boolean;
  openBack: boolean;
  openEtc: boolean;
  openModal: boolean;
}

export interface SubProgressCircleProps {
  translation?: number;
  rotation: number;
  rotate?: number;
  isRotate: boolean;
}
