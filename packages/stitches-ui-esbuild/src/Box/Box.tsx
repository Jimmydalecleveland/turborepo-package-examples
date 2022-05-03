import * as React from "react";
import * as styles from "./Box.styles";

type Props = Readonly<{
  padding?: "xxsmall" | "medium" | "xxlarge";
  background?: "none" | "light" | "dark" | "primary" | "secondary";
  shadow?: "none" | "small" | "medium" | "large";
  Component?: "div" | "section" | "span";
  children?: React.ReactNode;
}>;

const Box = ({
  children,
  padding = "xxsmall",
  background = "none",
  shadow = "none",
  Component = "div",
  ...rest
}: Props) => {
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
