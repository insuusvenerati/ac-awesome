import React from "react";
import Nav from "../nav/nav";
import RightSidebar from "../sidebar/rightsidebar";

export const Layout = ({ children, sidebar = true, searchBar, elevated }) => {
  return (
    <>
      <Nav elevated={elevated} />
      {searchBar}
      <div className="flex flex-wrap p-3 lg:p-5">
        {children}
        {/* <RightSidebar sidebar={sidebar} /> */}
      </div>
    </>
  );
};
