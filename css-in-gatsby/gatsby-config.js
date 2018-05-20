// module.exports = {
//     plugins: [`gatsby-plugin-typography`],
// };

module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
    ],
};