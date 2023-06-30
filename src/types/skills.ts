export type Skills = {
  stack: string;
  name: string;
  value: number;
  className: string;
  content: string;
};

export type SkillSet = [string, Skills[], () => void];