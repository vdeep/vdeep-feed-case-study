module.exports = function(eleventyConfig) {
  // Output directory: _site

  // Copy `feed-case-study` to `_site/feed-case-study`
  eleventyConfig.addPassthroughCopy("feed-case-study");
}