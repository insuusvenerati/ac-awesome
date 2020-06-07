import React from "react";
import Nav from "../nav/nav";
import RightSidebar from "../sidebar/rightsidebar";

export const Layout = ({ children, sidebar = true, searchBar, elevated }) => {
  return (
    <>
      <Nav elevated={elevated} />
      {searchBar}
      <div className="flex flex-wrap p-3 lg:p-5">
        <div className="fixed bottom-0 right-0 flex flex-col p-3">
          <div>
            <p className="mr-5 text-white">Loader by</p>
            <p className="mr-5 text-white">
              <a href="https://www.loading.io">loading.io</a>
            </p>
          </div>
        </div>
        {children}
        <RightSidebar sidebar={sidebar} />
      </div>
    </>
  );
};
