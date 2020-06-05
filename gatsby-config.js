module.exports = {
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "Villager",
        imagePath: "houseImage",
        name: "allVillagerHouseImage",
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "Villager",
        imagePath: "iconImage",
        name: "allVillagerIconImage",
      },
    },
  ],
};
