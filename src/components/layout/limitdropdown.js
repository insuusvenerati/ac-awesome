import React, { useState } from "react";

export const LimitDropdown = ({ isOpen }) => {
  return (
    <div className="relative inline-block mr-2 text-left">
      <div
        className={`${
          isOpen ? "absolute" : "hidden"
        } right-0 w-32 mt-2 origin-top-right rounded-md shadow-lg`}
      >
        <div className="bg-white rounded-md shadow-xs">
          <div className="py-1">
            <div className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
              Limit: 25
            </div>
            <a
              href="#"
              className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            >
              Support
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            >
              License
            </a>
            <form method="POST" action="#">
              <button
                type="submit"
                className="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
