import React from "react";
import Nav from "../nav/nav";
import RightSidebar from "../sidebar/rightsidebar";
import BG from "../../images/bg.jpg";

export const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="sticky top-0 flex justify-end w-full p-2 bg-teal-400 shadow-md">
        <input
          className="w-full p-2 rounded-sm shadow-md lg:w-1/6"
          type="search"
          name="Search"
          id="Search"
          placeholder="Search"
        />
      </div>
      <div
        style={{ backgroundImage: `url(${BG})` }}
        className="flex flex-wrap p-3 bg-fixed bg-right bg-no-repeat lg:p-5"
      >
        <div className="fixed bottom-0 right-0 flex flex-col p-3">
          <div>
            <p className="mr-5 text-white">BG by</p>
            <p className="mb-1 mr-5 text-white">
              <a href="https://www.instagram.com/geographyofrobots/">
                @geographyofrobots
              </a>
            </p>
          </div>
          <div>
            <p className="mr-5 text-white">Loader by</p>
            <p className="mr-5 text-white">
              <a href="https://www.loading.io">loading.io</a>
            </p>
          </div>
        </div>
        {children}
        <RightSidebar />
      </div>
    </>
  );
};
