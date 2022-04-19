import { config } from "./stitches.config";

export function getAllSpacingVarients(cssShapeCallback: any) {
  return Object.keys(config.theme.space).reduce<{ [key: string]: any }>(
    (acc, curr) => {
      const typedCurrKey = curr as keyof typeof config.theme.space;
      const val = config.theme.space[typedCurrKey];

      // Create the key;value at the current key, with the desired
      // object shape as the value.
      // e.g. { small: { width: "14px" } }
      acc[curr] = cssShapeCallback(val);
      return acc;
    },
    {}
  );
}
