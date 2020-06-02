import React from "react";
import { Layout } from "../components/layout/layout";
import VillagerCardFull from "../components/cards/villagercardfull";

const VillagersTemplate = ({ pageContext }) => {
  const { villager } = pageContext;
  return (
    <Layout sidebar={false}>
      <div className="flex flex-wrap justify-center w-full">
        <VillagerCardFull asset={villager} />
      </div>
    </Layout>
  );
};

export default VillagersTemplate;
