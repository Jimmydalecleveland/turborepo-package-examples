import * as React from "react";
import * as styles from "./Text.css";

type Props = {
  size?: "small" | "medium" | "large";
  weight?: "thin" | "regular" | "strong";
  Component?: "span" | "p";
};

const Text: React.FC<Props> = ({
  children,
  size = "medium",
  weight = "regular",
  Component = "span",
}) => {
  return (
    <Component className={styles.text({ size, weight })}>{children}</Component>
  );
};

export default Text;
