export type Skill = {
  stack: string;
  name: string;
  value: number;
  className: string;
  content: string;
};

export type SkillSet = [string, Skill[], () => void];