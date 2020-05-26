import React from "react";
import ContentLoader from "react-content-loader";

const Loader = () => (
  <div className="w-full max-w-sm px-3 py-6 sm:w-1/2 lg:w-1/3">
    <ContentLoader
      speed={2}
      width={384}
      height={578}
      viewBox="0 0 384 578"
      backgroundColor="#292929"
      foregroundColor="#514d4d"
    >
      <rect x="16" y="16" rx="3" ry="3" width="360" height="224" />
      <circle cx="39" cy="36" r="35" />
      <rect x="16" y="256" rx="0" ry="0" width="74" height="14" />
      <rect x="16" y="285" rx="0" ry="0" width="97" height="12" />
      <rect x="16" y="313" rx="0" ry="0" width="105" height="14" />
      <rect x="16" y="343" rx="0" ry="0" width="118" height="15" />
      <rect x="16" y="388" rx="0" ry="0" width="346" height="57" />
    </ContentLoader>
  </div>
);

export default Loader;
