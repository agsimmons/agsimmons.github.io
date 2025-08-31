export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "submodules/txt-hours-react/dist/": "tools/txt-hours/",
  });
}
