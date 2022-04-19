# @jimmydc/esbuild-ui

## 0.10.0

### Minor Changes

- 3629dc3: Add Box, Button, Spacer components to Stitches UI example. These are copied over from the Vanilla Extract UI example and converted. Most of this was a pretty easy transition as the APIs are quite similar between the two.
- c3637f6: Add Box and Text components with basic variant styling to showcase multi-variant combinations. This required adding the `recipes` package for Vanilla Extract, as I could not figure out a way to do multi-variants (e.g. Text with `weight` and `size` variants active at the same time) without the recipes package.

## 0.9.0

### Minor Changes

- a215159: Add storybook setup for Vanilla Extract and "type": "module" packages, which required some extra Webpack configuration.

## 0.8.0

### Minor Changes

- Add BigComponent which has all the code from lodash's `get` method built into it in order to test if larger components are properly code-split.

## 0.7.0

### Minor Changes

- 86fc5ae: Add outline prop to Button. This allows for enabling a border around the button. The default is `false`

## 0.6.2

### Patch Changes

- 51ced2c: Testing another patch version bump with only a Readme addition

## 0.6.1

### Patch Changes

- Testing a patch bump with no actual changes

## 0.6.0

### Minor Changes

- testing another changeset minor version due to scoped access issues

## 0.4.0

### Minor Changes

- Testing out changesets with a minor bump of both UI packages
- This package didn't really change, it just came along for the ride while testing things. Also, I updated this changelog after running changesets.
