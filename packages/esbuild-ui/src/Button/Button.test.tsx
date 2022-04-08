import * as React from "react";
import { Button } from ".";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Button renders", () => {
  const { container } = render(<Button>Click Me!</Button>);

  expect(screen.getByRole("button")).toHaveTextContent(/click me/i);

  // I imagine this won't work because anytime we change any styles
  // the hash on each class will change and we'll have to update
  // the snapshot without knowing what we are updating.
  expect(container.firstChild).toMatchInlineSnapshot(`
    <button
      class="styles_pWrapper__pzbt8v8 styles_variant_primary__pzbt8v6"
      type="button"
    >
      Click Me!
    </button>
  `);
});
