import React from "react";

const Layout = ({ children }: any) => {
  return (
    <>
      <div className="hero">{children}</div>
    </>
  );
};

export default Layout;
