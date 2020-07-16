const path = require("path");
const fetch = require("isomorphic-unfetch");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const API_URL = process.env.GATSBY_API_URL;

const getAllVillagers = async () => {
  try {
    const res = await fetch(`${API_URL}/villagers`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getAllItems = async () => {
  try {
    const res = await fetch(`${API_URL}/items?limit=200`);
    const data = res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
    type Items implements Node @infer {
      variants: [ItemsVariants!]!
    }
    type ItemsVariants {
      variation: String
    }
  `;
  createTypes(typeDefs);
};

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest, schema }) => {
  const villagers = await getAllVillagers();
  const items = await getAllItems();

  items.forEach((item) => {
    const itemsContent = JSON.stringify(item);
    const itemMeta = {
      id: createNodeId(`item-${item._id}`),
      parent: null,
      children: [],
      internal: {
        type: `Items`,
        content: itemsContent,
        contentDigest: createContentDigest(item),
      },
    };
    const node = Object.assign({}, item, itemMeta);
    actions.createNode(node);
  });

  villagers.forEach((villager) => {
    const node = {
      name: villager.name,
      iconImage: villager.iconImage,
      houseImage: villager.houseImage,
      species: villager.species,
      gender: villager.gender,
      personality: villager.personality,
      hobby: villager.hobby,
      birthday: villager.birthday,
      catchphrase: villager.catchphrase,
      favoriteSong: villager.favoriteSong,
      id: villager._id,
      colors: villager.colors,
      styles: villager.styles,
      internal: {
        type: "Villager",
        contentDigest: createContentDigest(villager),
      },
    };
    actions.createNode(node);
  });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const allVillagers = await graphql(`
    {
      allVillager {
        edges {
          node {
            id
            favoriteSong
            gender
            hobby
            name
            personality
            species
          }
        }
      }
    }
  `);
  const {
    data: {
      allVillager: { edges: villagersFromQuery },
    },
  } = allVillagers;
  if (allVillagers.errors) {
    reporter.panicOnBuild(`Error running the graphQL query`);
    return;
  }
  villagersFromQuery.forEach(({ node }) => {
    createPage({
      path: `/villager/${node.name}`,
      component: path.resolve("./src/templates/villager.js"),
      context: { node },
    });
  });
};
