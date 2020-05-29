module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-manifest",
    {
      resolve: "gatsby-plugin-offline",
      options: {
        precachePages: ["/index/", "/villagers/"],
      },
    },
  ],
};
