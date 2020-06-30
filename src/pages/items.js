import { graphql } from "gatsby";
import React from "react";
import ItemCard from "../components/cards/itemcard";
import { Layout } from "../components/layout/layout";
import { CardLoader } from "../components/loader/cardloader";
import { AutoSizer, Grid } from "react-virtualized";

const Loading = () => (
  <div className="flex flex-wrap justify-center w-full lg:w-5/6">
    <CardLoader />
    <CardLoader />
    <CardLoader />
    <CardLoader />
    <CardLoader />
    <CardLoader />
  </div>
);

const Items = ({
  data: {
    allItem: { edges },
  },
}) => {
  if (!edges) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex flex-wrap justify-center w-full lg:w-5/6">
        {edges && edges.map(({ node }) => <ItemCard key={node.id} asset={node} />)}
      </div>
    </Layout>
  );
};

export default Items;

export const query = graphql`
  {
    allItem(limit: 10) {
      edges {
        node {
          id
          sourceSheet
          name
          diy
          size
          sourceNotes
          interact
          tag
          catalog
          series
          customizationKitCost
          variants {
            image
            filename
            variantId
            uniqueEntryId
            colors
            bodyCustomize
            bodyTitle
            source
            buy
            sell
            themes
          }
        }
      }
    }
  }
`;
