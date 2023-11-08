// @ts-check
const { withBlitz } = require("@blitzjs/next");

/**
 * @type {import('@blitzjs/next').BlitzConfig}
 **/
const config = {
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  // Mentioned in recording but not shown in UploadThing docs
  // experimental: {
  //   esmExternals: false,
  // },
};

module.exports = withBlitz(config);
