module.exports = {
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-manifest`,
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-plugin-webpack-bundle-analyzer`,
      options: {
        production: true,
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/index/`],
      },
    },
  ],
};
