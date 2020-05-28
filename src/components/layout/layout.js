import React from "react";
import Nav from "../nav/nav";
import RightSidebar from "../sidebar/rightsidebar";

export const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="flex flex-wrap">
        {children}
        <RightSidebar />
      </div>
    </>
  );
};
