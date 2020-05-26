import React from "react";

const Sidebar = () => {
  return (
    <div className="sticky top-0 hidden h-full mt-5 overflow-hidden bg-white border-t-4 rounded-t rounded-b-lg shadow-lg border-red-light md:w-1/6">
      <div className="px-6 py-4 mt-4 mb-2 mb-8">
        <div className="mb-4 tracking-wide uppercase text-c2">Section 1</div>
        <div className="flex px-4 py-2 text-lg border border-b-0 cursor-pointer text-grey-darkest">
          <div className="pl-2">First</div>
        </div>
        <div className="flex px-4 py-2 text-lg border border-b-0 cursor-pointer text-grey-darkest">
          <div className="pl-2">Second</div>
        </div>
        <div className="flex px-4 py-2 text-lg border cursor-pointer text-grey-darkest">
          <div className="pl-2">Third</div>
        </div>
        <div className="mt-8 mb-4 tracking-wide uppercase text-c2">
          Section 2
        </div>
        <div className="flex px-4 py-2 text-lg border cursor-pointer text-grey-darkest">
          <div className="pl-2">Fourth</div>
        </div>
        <div>
          <div className="mt-8 mb-4 tracking-wide uppercase text-c2">
            Section 3
          </div>
          <div className="flex px-4 py-2 text-lg border cursor-pointer text-grey-darkest">
            <div className="pl-2">Fifth</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
