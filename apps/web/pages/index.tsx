import { Button } from "ui";
import { Button as MicrobundleButton } from "microbundle-ui";
import {
  defaultTheme,
  Button as EsbuildButton,
  Box,
} from "@jimmydc/esbuild-ui";
import { Button as StitchesButton } from "@jimmydc/stitches-ui";
import { brandTheme, exampleStyle } from "../styles/theme.css";

export default function Web() {
  return (
    <section>
      <div className={defaultTheme}>
        <h1 className={exampleStyle}>Web</h1>
        <Button />
        <MicrobundleButton>Microbundle</MicrobundleButton>
        <StitchesButton>ESBuild + Stitches</StitchesButton>

        <Box padding="medium" shadow="medium">
          <p>Testing the Box</p>
          <EsbuildButton>ESBuild + Vanilla Extract</EsbuildButton>
        </Box>
        <div className={brandTheme}>
          <EsbuildButton>ESBuild + Vanilla Extract</EsbuildButton>
        </div>
      </div>
    </section>
  );
}
