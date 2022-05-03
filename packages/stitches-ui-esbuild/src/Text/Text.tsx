import * as React from "react";
import * as styles from "./Text.styles";

type Props = {
  size?: "small" | "medium" | "large";
  weight?: "thin" | "regular" | "strong";
  Component?: "span" | "p";
  children: React.ReactNode;
};

const Text = ({
  children,
  size = "medium",
  weight = "regular",
  Component = "span",
}: Props) => {
  return (
    <Component className={styles.text({ size, weight })}>{children}</Component>
  );
};

export default Text;
