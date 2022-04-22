import * as React from "react";
import { bootstrap } from "./Bootstrap.styles";

type Props = {
  size?: "small" | "large";
  children?: React.ReactNode;
};

const Bootstrap = ({ size = "small", children }: Props) => {
  return <p className={bootstrap({ size })}>{children}</p>;
};

export default Bootstrap;
