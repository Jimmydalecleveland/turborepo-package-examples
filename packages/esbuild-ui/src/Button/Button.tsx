import * as React from "react";
import * as styles from "./Button.css";

type Props = {
  type?: "button" | "submit" | "reset";
  background?: "primary" | "secondary";
};

const Button: React.FC<Props> = ({
  children,
  type = "button",
  background = "primary",
}) => {
  return (
    <button
      type={type}
      className={[styles.Button, styles.variant[background]].join(" ")}
    >
      {children}
    </button>
  );
};

export default Button;
