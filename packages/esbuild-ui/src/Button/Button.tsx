import * as React from "react";
import * as styles from "../styles.css";

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
      className={`${styles.pWrapper} ${styles.variant[background]}`}
    >
      {children}
    </button>
  );
};

export default Button;
