import React, { ReactNode } from "react";

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
