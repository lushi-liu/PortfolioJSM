import React, { CSSProperties, ChangeEvent, ReactNode } from "react";

export interface ButtonProps {
  text: string | ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  buttonColor: string;
  textColor: string;
  hPadding?: string;
  hMargin?: string;
  width: string;
  height: string;
  extraStyles?: string;
  name?: string;
}

export interface InputProps {
  type: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  width?: string;
  height?: string;
  style?: CSSProperties;
  inputColor: string;
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
}
