import { graphql } from "gatsby";
import React from "react";
import Masonry from "react-masonry-css";
import ItemCard from "../components/cards/itemcard";
import { Layout } from "../components/layout/layout";

const Items = ({
  data: {
    allItems: { edges },
  },
}) => {
  return (
    <Layout>
      <Masonry
        breakpointCols={4}
        className="flex flex-wrap justify-between w-full md:justify-center md:p-4 lg:justify-between lg:p-0"
        columnClassName={null}
      >
        {edges &&
          edges.map(({ node }) => <ItemCard key={node.id} asset={node} />)}
      </Masonry>
    </Layout>
  );
};

export default Items;

export const query = graphql`
  {
    allItems(limit: 50) {
      edges {
        node {
          variants {
            variation
            image
            colors
            pattern
            source
            buy
            sell
            themes
          }
          id
          sourceSheet
          name
          patternTitle
          diy
          patternCustomize
          size
          sourceNotes
          interact
          tag
          speakerType
          lightingType
          catalog
          set
          series
          customizationKitCost
        }
      }
    }
  }
`;
