const markdownIt = require("markdown-it");

module.exports = eleventyConfig =>
{
	eleventyConfig.addPlugin( require("@11ty/eleventy-plugin-syntaxhighlight") );
	eleventyConfig.addPlugin( require("eleventy-plugin-find") );

	let markdownLib = markdownIt({}).disable('code');
	eleventyConfig.setLibrary("md", markdownLib);

	/* Filters */
	/**
	 * @param {Object} object
	 * @return {string}
	 */
	eleventyConfig.addFilter( 'dump', object => JSON.stringify( object, null, 4) );
	eleventyConfig.addFilter( 'yaml', require('./src/_11ty/filters/yaml') );

	return {
		dir: {
			input: "src",
			output: "dist",
		},

		htmlTemplateEngine: "njk",
		markdownTemplateEngine: "njk",
	}
};
