import React from "react";
import { Layout } from "../components/layout/layout";
import { HomeView } from "../components/views/homeview";

const Index = () => (
  <>
    <Layout elevated={true} sidebar={false}>
      <HomeView />
    </Layout>
  </>
);

export default Index;
