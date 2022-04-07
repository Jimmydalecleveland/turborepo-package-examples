import * as React from "react";

type Props = {
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<Props> = ({ children, type = "button" }) => {
  return <button type={type}>{children}</button>;
};

export default Button;
