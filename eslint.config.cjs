const eslintPluginAstro = require('eslint-plugin-astro');
module.exports = [
    // add more generic rule sets here, such as:
    // js.configs.recommended,
    ...eslintPluginAstro.configs["flat/recommended"],
    ...eslintPluginAstro.configs["flat/jsx-a11y-recommended"],
    {
        rules: {
        }
    }
];