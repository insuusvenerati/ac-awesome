const path = require("path");
const fetch = require("isomorphic-unfetch");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const API_URL = process.env.GATSBY_API_URL;

const getAllVillagers = async () => {
  try {
    const res = await fetch(`${API_URL}/villagers`);
    const data = res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getOneVillager = async (villagerName) => {
  try {
    const res = await fetch(`${API_URL}/villagers?${villagerName}`);
    const villager = res.json();
    return villager;
  } catch (error) {
    console.error(error);
  }
};

// exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
//   const villagers = await getAllVillagers();

//   villagers.forEach((villager) => {
//     const node = {
//       name: villager.name,
//       iconImage: villager.iconImage,
//       houseImage: villager.houseImage,
//       species: villager.species,
//       gender: villager.gender,
//       personality: villager.personality,
//       hobby: villager.hobby,
//       birthday: villager.birthday,
//       catchphrase: villager.catchphrase,
//       favoriteSong: villager.favoriteSong,
//       id: villager._id,
//       colors: villager.colors,
//       styles: villager.styles,
//       internal: {
//         type: "Villager",
//         contentDigest: createContentDigest(villager),
//       },
//     };
//     actions.createNode(node);
//   });
// };

exports.createPages = async ({ actions: { createPage } }) => {
  try {
    const allVillagers = await getAllVillagers();
    if (allVillagers === undefined) {
      console.error("All Villagers fetch led to undefined");
      process.exit(2);
    } else {
      allVillagers.forEach((villager) => {
        getOneVillager(villager);
        createPage({
          path: `/villager/${villager.name}`,
          component: path.resolve("./src/templates/villager.js"),
          context: { villager },
        });
      });
    }
  } catch (error) {
    console.error(error);
  }
};
