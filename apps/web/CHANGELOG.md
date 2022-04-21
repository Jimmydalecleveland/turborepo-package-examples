# web

## 0.3.0

### Minor Changes

- 0189ef7: Export Text component and update VE Button to Stitches styling and properties

### Patch Changes

- Updated dependencies [0189ef7]
  - @jimmydc/esbuild-ui@0.11.0
  - @jimmydc/stitches-ui@0.5.0

## 0.2.0

### Minor Changes

- 3629dc3: Add Box, Button, Spacer components to Stitches UI example. These are copied over from the Vanilla Extract UI example and converted. Most of this was a pretty easy transition as the APIs are quite similar between the two.
- 6968d79: Add a basic working setup of Stitches UI (framework agnostic core) using ESBuild. This scaffold bundles a single component with Stitches CSS and demos it by using it in the "web" app in the repo.
- c3637f6: Add Box and Text components with basic variant styling to showcase multi-variant combinations. This required adding the `recipes` package for Vanilla Extract, as I could not figure out a way to do multi-variants (e.g. Text with `weight` and `size` variants active at the same time) without the recipes package.

### Patch Changes

- Updated dependencies [3629dc3]
- Updated dependencies [6968d79]
- Updated dependencies [c3637f6]
  - @jimmydc/esbuild-ui@0.10.0
  - @jimmydc/stitches-ui@0.2.0

## 0.1.0

### Minor Changes

- Add BigComponent which has all the code from lodash's `get` method built into it in order to test if larger components are properly code-split.

### Patch Changes

- Updated dependencies
  - @jimmydc/esbuild-ui@0.8.0
