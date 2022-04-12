import { Button } from "ui";
import { Button as MicrobundleButton, SideEffect } from "microbundle-ui";
import { defaultTheme, Button as EsbuildButton } from "@jimmydc/esbuild-ui";
import { brandTheme, exampleStyle } from "../styles/theme.css";

export default function Web() {
  return (
    <div className={defaultTheme}>
      <h1 className={exampleStyle}>Web</h1>
      <Button />
      <MicrobundleButton>Microbundle</MicrobundleButton>
      {/* <SideEffect /> */}

      <EsbuildButton>ESBuild + Vanilla Extract</EsbuildButton>
      <div className={brandTheme}>
        <EsbuildButton>ESBuild + Vanilla Extract</EsbuildButton>
      </div>
    </div>
  );
}
