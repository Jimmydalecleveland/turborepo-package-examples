// from this post: https://www.joshwcomeau.com/react/modern-spacer-gif/
import * as React from "react";
import { vars } from "../styles.css";
import * as styles from "./Spacer.css";

export interface Props {
  axis?: "horizontal" | "vertical";
  size: keyof typeof vars.spacing;
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
const Spacer: React.FC<Props> = ({ size, axis }) => {
  const width = getWidth({ axis, size });
  const height = getHeight({ axis, size });
  return <span className={styles.spacer({ width, height })} />;
};
// const Spacer = styled.span<Props>`
//   display: block;
//   width: ${getWidth}px;
//   min-width: ${getWidth}px;
//   height: ${getHeight}px;
//   min-height: ${getHeight}px;
// `;

export default Spacer;
