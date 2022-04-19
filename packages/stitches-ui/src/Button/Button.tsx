import * as React from "react";
import { button } from "./Button.styles";

type Props = {
  children: React.ReactNode;
  background: "primary" | "secondary";
};

const Button = ({ children, background }: Props) => (
  <button className={button({ background })}>{children}</button>
);

export default Button;
