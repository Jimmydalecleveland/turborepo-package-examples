import { Button } from "ui";
import { Button as MicrobundleButton } from "microbundle-ui";
import {
  defaultTheme,
  Button as EsbuildButton,
  Box as EsbuildBox,
  Text as EsbuildText,
} from "@jimmydc/esbuild-ui";
import {
  Button as StitchesButton,
  Box as StitchesBox,
  Spacer as StitchesSpacer,
  Text as StitchesText,
} from "@jimmydc/stitches-ui";
import { brandTheme, exampleStyle } from "../styles/theme.css";
import { brandTheme as stitchesBrandTheme } from "../styles/stitches.config";

export default function Web() {
  return (
    <section>
      <div className={defaultTheme}>
        <h1 className={exampleStyle}>Web</h1>
        <Button />
        <MicrobundleButton>Microbundle</MicrobundleButton>

        <StitchesBox padding="medium" shadow="medium">
          <StitchesSpacer size="medium" />
          <StitchesButton>ESBuild + Stitches</StitchesButton>
          <StitchesText size="large" weight="strong">
            Some text from Stitches
          </StitchesText>
        </StitchesBox>

        <div className={stitchesBrandTheme}>
          <StitchesBox padding="medium" shadow="medium">
            <StitchesSpacer size="medium" />
            <StitchesButton>ESBuild + Stitches Custom Theme</StitchesButton>
            <StitchesText size="large" weight="strong">
              Some text from Stitches
            </StitchesText>
          </StitchesBox>
        </div>

        <EsbuildBox padding="medium" shadow="medium">
          <p>Testing the Box</p>
          <EsbuildButton>ESBuild + Vanilla Extract</EsbuildButton>
          <EsbuildText size="large" weight="strong">
            Some text from Vanilla Extract
          </EsbuildText>
        </EsbuildBox>
        <div className={brandTheme}>
          <EsbuildButton>ESBuild + Vanilla Extract</EsbuildButton>
        </div>
      </div>
    </section>
  );
}
