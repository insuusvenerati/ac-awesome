import React from "react";
import Nav from "../nav/nav";
import RightSidebar from "../sidebar/rightsidebar";
import BG from "../../images/bg.jpg";

export const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div
        style={{ backgroundImage: `url(${BG})` }}
        className="flex flex-wrap p-3 bg-fixed bg-right bg-no-repeat lg:p-5"
      >
        <div className="fixed bottom-0 right-0 flex">
          <p className="mb-10 mr-5 text-white ">BG by</p>
          <p className="mb-5 mr-5 text-white ">
            <a href="https://www.instagram.com/geographyofrobots/">@geographyofrobots</a>
          </p>
          <p className="mb-10 mr-5 text-white ">BG by</p>
          <p className="mb-5 mr-5 text-white ">
            <a href="https://www.instagram.com/geographyofrobots/">@geographyofrobots</a>
          </p>
        </div>
        {children}
        <RightSidebar />
      </div>
    </>
  );
};
