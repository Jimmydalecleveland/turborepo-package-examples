import { Button } from "ui";
import { Button as MicrobundleButton } from "microbundle-ui";
import { Button as EsbuildButton } from "esbuild-ui";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button />
      <MicrobundleButton>Microbundle Button!</MicrobundleButton>
      <EsbuildButton>ESBuild Button!</EsbuildButton>
    </div>
  );
}
