import * as React from "react";
import * as styles from "./Button.css";

type Props = {
  type?: "button" | "submit" | "reset";
  background?: "primary" | "secondary";
  children: React.ReactNode;
};

const Button = ({
  children,
  type = "button",
  background = "primary",
}: Props) => {
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
