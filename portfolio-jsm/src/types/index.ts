import React, { CSSProperties, ChangeEvent, ReactNode } from "react";

export interface ButtonProps {
  text: string | ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  buttonColor: string;
  textColor: string;
  hPadding?: string;
  hMargin?: string;
  width?: string;
  height?: string;
  extraStyles?: string;
  name?: string;
}

export interface InputProps {
  type: string;
  placeholder: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  width?: string;
  height?: string;
  style?: CSSProperties;
  inputColor: string;
  name?: string;
}

export interface ServiceCardProps {
  im: string;
  title: string;
  desc: string;
  select: boolean;
}

export interface ProjectCardProps {
  bgcolor: string;
  title: string;
  lImage: string;
  mImage: string;
  leftSide: boolean;
  link: string;
}

export interface CaseCardProps {
  bgcolor: string;
  title: string;
  desc: string;
  image: string;
  link: string;
}

export interface ReviewProps {
  name: string;
  title: string;
  desc: string;
  image: string;
}

export interface ProjectTitleProps {
  title: string;
  titleDesc: string;
  lImage: string;
  mImage: string;
  demo: string;
  code: string;
}

export interface ProjectDescProps {
  desc: string[];
  problem: string;
  image: string;
  figma: string;
}

export interface ProjectProblemProps {
  challenge: string[];
  learning: string[];
}

export interface ProjectRoleProps {
  myRole: string;
  start: string;
  end: string;
  techStack: string[];
}

export interface ProjectOtherProps {
  image1: string;
  title1: string;
  desc1: string;
  link1: string;
  image2: string;
  title2: string;
  desc2: string;
  link2: string;
}
