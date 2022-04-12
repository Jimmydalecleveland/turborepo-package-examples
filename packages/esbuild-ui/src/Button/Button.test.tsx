import * as React from "react";
import { Button } from ".";
import { render, screen } from "@testing-library/react";

test("Button renders", () => {
  const { container } = render(<Button>Click Me!</Button>);

  expect(screen.getByRole("button")).toHaveTextContent(/click me/i);

  // I imagine this won't work because anytime we change any styles
  // the hash on each class will change and we'll have to update
  // the snapshot without knowing what we are updating.
  expect(container.firstChild).toMatchInlineSnapshot(`
    <button
      class="Button_Button__3eogct0 Button_variant_primary__3eogct1"
      type="button"
    >
      Click Me!
    </button>
  `);
});
