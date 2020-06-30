import React from "react";
import VillagerCardFull from "../components/cards/villagercardfull";
import { Layout } from "../components/layout/layout";

const VillagersTemplate = ({ pageContext }) => {
  const { node } = pageContext;

  return (
    <Layout elevated={true} sidebar={false}>
      {console.log(node)}
      <div className="flex flex-wrap justify-center w-full">
        <VillagerCardFull asset={node} />
      </div>
    </Layout>
  );
};

export default VillagersTemplate;

// export const query = graphql`
//   {
//     villager(name: { eq: "Agnes" }) {
//       id
//       hobby
//       gender
//       favoriteSong
//       colors
//       catchphrase
//       birthday
//       name
//       allVillagerHouseImage {
//         childImageSharp {
//           fixed {
//             src
//           }
//         }
//       }
//       allVillagerIconImage {
//         childImageSharp {
//           fixed {
//             src
//           }
//         }
//       }
//     }
//   }
// `;
