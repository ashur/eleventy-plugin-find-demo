const yaml = require("js-yaml");

/**
 * Convert Object to YAML string
 *
 * @param {Object}
 * @returns {string}
 */
module.exports = object => yaml.dump(object);
