import * as React from "react";
import * as styles from "./Box.css";

type Props = {
  padding?: "xxsmall" | "medium" | "xxlarge";
  Component?: "div" | "span";
  shadow?: "none" | "small" | "medium" | "large";
};

const Box: React.FC<Props> = ({
  children,
  padding = "xxsmall",
  shadow = "none",
  Component = "div",
  ...rest
}) => {
  return (
    <Component
      className={styles.box({
        padding,
        shadow,
      })}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Box;
