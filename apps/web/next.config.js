const withTM = require("next-transpile-modules")(["ui"]);
const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

module.exports = withVanillaExtract(withTM({
  reactStrictMode: true,
}));
