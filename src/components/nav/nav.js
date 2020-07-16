import { Link } from "gatsby";
import React, { useState } from "react";
import Burger from "../../images/burger.svg";

const Nav = ({ elevated = false }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <nav
        className={`${
          elevated && "shadow-md"
        } flex flex-wrap items-center justify-between p-5 bg-teal-500 lg:p-6`}
        role="navigation"
      >
        <div className="flex flex-shrink-0 mr-6 text-white">
          <Link to="/">
            <span className="text-xl font-semibold tracking-tight">
              Animal Crossing
            </span>
          </Link>
        </div>
        <span
          onClick={() => setOpen(!isOpen)}
          className="items-end text-white lg:hidden"
        >
          <img
            style={{ width: "30px", height: "30px" }}
            alt="hamburger menu icon"
            src={Burger}
          />
        </span>
        <div
          className={`flex-grow ${
            isOpen ? "block" : "hidden"
          } w-full lg:flex lg:text-right lg:w-auto`}
        >
          <div className="text-xl lg:flex-grow">
            <Link
              className="block mt-4 mr-4 font-semibold text-teal-200 lg:inline-block lg:mt-0 hover:text-white"
              to="/villagers/"
            >
              Villagers
            </Link>

            <Link
              className="block mt-4 mr-4 font-semibold text-teal-200 lg:inline-block lg:mt-0 hover:text-white"
              to="/items/"
            >
              Items
            </Link>

            {/*<a*/}
            {/*  className="block mt-4 mr-4 font-semibold text-teal-200 lg:inline-block lg:mt-0 hover:text-white"*/}
            {/*  href="/recipes"*/}
            {/*>*/}
            {/*  Recipes*/}
            {/*</a>*/}

            {/*<a*/}
            {/*  className="block mt-4 mr-4 font-semibold text-teal-200 lg:inline-block lg:mt-0 hover:text-white"*/}
            {/*  href="/creatures"*/}
            {/*>*/}
            {/*  Creatures*/}
            {/*</a>*/}

            {/*<a*/}
            {/*  className="block mt-4 mr-4 font-semibold text-teal-200 lg:inline-block lg:mt-0 hover:text-white"*/}
            {/*  href="/nookmiles"*/}
            {/*>*/}
            {/*  Nook Miles*/}
            {/*</a>*/}

            {/*<a*/}
            {/*  className="block mt-4 mr-4 font-semibold text-teal-200 lg:inline-block lg:mt-0 hover:text-white"*/}
            {/*  href="/"*/}
            {/*>*/}
            {/*  Link 6*/}
            {/*</a>*/}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
