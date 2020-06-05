import React from "react";
import { Layout } from "../components/layout/layout";
import VillagerCardFull from "../components/cards/villagercardfull";
import { graphql } from "gatsby";

const VillagersTemplate = ({ pageContext }, data) => {
  const { villager } = pageContext;

  return (
    <Layout sidebar={false}>
      {console.log(data)}
      <div className="flex flex-wrap justify-center w-full">
        <VillagerCardFull asset={data} />
      </div>
    </Layout>
  );
};

export default VillagersTemplate;

export const query = graphql`
  {
    villager(name: { eq: "Agnes" }) {
      id
      hobby
      gender
      favoriteSong
      colors
      catchphrase
      birthday
      name
      allVillagerHouseImage {
        childImageSharp {
          fixed {
            src
          }
        }
      }
      allVillagerIconImage {
        childImageSharp {
          fixed {
            src
          }
        }
      }
    }
  }
`;
