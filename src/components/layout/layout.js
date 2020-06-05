import React from "react";
import BG from "../../images/bg.png";
import Nav from "../nav/nav";
import RightSidebar from "../sidebar/rightsidebar";

export const Layout = ({ children, sidebar = true, searchBar }) => {
  return (
    <>
      <Nav />
      {searchBar}
      <div
        style={{ backgroundImage: `url(${BG})` }}
        className="flex flex-wrap p-3 bg-fixed bg-center bg-cover lg:p-5"
      >
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
