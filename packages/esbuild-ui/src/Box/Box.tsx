import * as React from "react";
import * as styles from "./Box.css";

type Props = {
  padding?: "xxsmall" | "medium" | "xxlarge";
  Component?: "div" | "span";
};

const Box: React.FC<Props> = ({
  children,
  padding = "xxsmall",
  Component = "div",
  ...rest
}) => {
  return (
    <Component className={`${styles.padding[padding]}`} {...rest}>
      {children}
    </Component>
  );
};

export default Box;
