import * as React from "react";
import { Button } from ".";
import { defaultTheme } from "../styles.css";
import { render, screen } from "@testing-library/react";

test("Button renders", () => {
  render(
    <div className={defaultTheme}>
      <Button>Click Me!</Button>
    </div>
  );
});
