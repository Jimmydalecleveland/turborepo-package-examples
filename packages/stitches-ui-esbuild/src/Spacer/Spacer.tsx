// from this post: https://www.joshwcomeau.com/react/modern-spacer-gif/
import * as React from "react";
import { config } from "../stitches.config";
import * as styles from "./Spacer.styles";

export interface Props {
  axis?: "horizontal" | "vertical";
  size: keyof typeof config.theme.space;
}

function getHeight({ axis, size }: Props) {
  return axis === "horizontal" ? "xxsmall" : size;
}

function getWidth({ axis, size }: Props) {
  return axis === "vertical" ? "xxsmall" : size;
}

/**
 * @component
 * @param {Object} props
 * @param {string} props.axis - Add spacing to 'vertical' or 'horizontal' axis
 * @param {number} props.size - Spacing size in pixels
 *
 * @returns An empty span tag that adds horizontal or vertical space
 *
 * @example <caption>Add vertical space of 16px</caption>
 * <Spacer size={16} />
 *
 * @example <caption>Add horizontal space of 24px</caption>
 * <Spacer axis="horizontal" size={24} />
 */
const Spacer = ({ size, axis = "vertical" }: Props) => {
  const width = getWidth({ axis, size });
  const height = getHeight({ axis, size });
  return <span className={styles.spacer({ width, height })} />;
};

export default Spacer;
