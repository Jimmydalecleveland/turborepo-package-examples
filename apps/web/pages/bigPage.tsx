import { BigComponent } from "@jimmydc/esbuild-ui";

export default function BigPage() {
  return (
    <div>
      <h1>Page with more JS loaded than the homepage</h1>
      <h2>At least... it should be</h2>
      <BigComponent />
    </div>
  );
}
