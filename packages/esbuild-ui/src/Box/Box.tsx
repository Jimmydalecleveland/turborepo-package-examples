import * as React from "react";
import * as styles from "./Box.css";

type Props = {
  padding?: "xxsmall" | "medium" | "xxlarge";
  background?: "none" | "light" | "dark" | "primary" | "secondary";
  shadow?: "none" | "small" | "medium" | "large";
  Component?: "div" | "span";
};

const Box: React.FC<Props> = ({
  children,
  padding = "xxsmall",
  background = "none",
  shadow = "none",
  Component = "div",
  ...rest
}) => {
  return (
    <Component
      className={styles.box({
        padding,
        shadow,
        background,
      })}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Box;
