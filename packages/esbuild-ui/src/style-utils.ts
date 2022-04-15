import { vars } from "./styles.css";

export function getAllSpacingVarients(cssShapeCallback: any) {
  return Object.keys(vars.spacing).reduce<{ [key: string]: any }>(
    (acc, curr) => {
      const typedCurrKey = curr as keyof typeof vars.spacing;
      const val = vars.spacing[typedCurrKey];

      // Create the key;value at the current key, with the desired
      // object shape as the value.
      // e.g. { small: { width: "14px" } }
      acc[curr] = cssShapeCallback(val);
      return acc;
    },
    {}
  );
}
