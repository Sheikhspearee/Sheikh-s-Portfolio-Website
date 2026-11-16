export type TNavLink = {
  id: string;
  title: string;
};

export type TNenType = {
  title: string;
  role: string;
  icon: string;
  blurb: string;
};

export type TExperience = {
  title: string;
  companyName: string;
  stage: string;
  iconBg: string;
  date: string;
  points: string[];
};

export type TNenOrb = {
  name: string;
  label: string;
  color: string;
};

export type TProject = {
  name: string;
  description: string;
  icon: string;
  tags: { name: string; color: string }[];
};

export type TCertification = {
  name: string;
  status: "completed" | "in-progress" | "scheduled";
  note?: string;
};

export type TMotion = {
  direction: "up" | "down" | "left" | "right" | "";
  type: "tween" | "spring" | "just" | "";
  delay: number;
  duration: number;
};
