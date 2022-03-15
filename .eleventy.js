const markdownIt = require("markdown-it");

module.exports = eleventyConfig =>
{
	eleventyConfig.addPlugin( require("eleventy-plugin-find") );

	let markdownLib = markdownIt({}).disable('code');
	eleventyConfig.setLibrary("md", markdownLib);

	return {
		dir: {
			input: "src",
			output: "dist",
		},

		htmlTemplateEngine: "njk",
		markdownTemplateEngine: "njk",
	}
};
