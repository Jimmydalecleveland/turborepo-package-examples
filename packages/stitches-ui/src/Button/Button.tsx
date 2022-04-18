import * as React from "react";
import { css } from "@stitches/core";

type Props = {
  children: React.ReactNode;
};

const button = css({
  backgroundColor: "palevioletred",
  color: "white",
  border: "solid 2px mediumvioletred",
  borderRadius: "9999px",
  fontSize: "18px",
  padding: "10px 15px",
  "&:hover": {
    backgroundColor: "hotpink",
  },
});

const Button = ({ children }: Props) => (
  <button className={button()}>{children}</button>
);

export default Button;
