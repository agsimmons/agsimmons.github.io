import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { DateTime } from "luxon";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function (eleventyConfig) {
  eleventyConfig.setInputDirectory("src");

  eleventyConfig.setLiquidOptions({
    jsTruthy: true,
  });

  eleventyConfig.addLayoutAlias("base", "layouts/base.html");
  eleventyConfig.addLayoutAlias("post", "layouts/post.html");

  eleventyConfig.addPassthroughCopy({
    "src/assets/": "assets/",
  });

  eleventyConfig.addPassthroughCopy({
    "submodules/txt-hours-react/dist/": "tools/txt-hours/",
  });

  eleventyConfig.addFilter("isoDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toISODate();
  });

  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    formats: ["avif", "webp"],
  });

  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/feed.atom",
    collection: {
      name: "post",
      limit: 0,
    },
    metadata: {
      language: "en",
      title: "agsimmons",
      subtitle: "",
      base: "https://www.agsimmons.com",
      author: {
        name: "Andrew Simmons",
        // email: "", // Optional
      },
    },
  });
}
