import React from "react";
import { NavbarAdmin } from "@/components";

const layout = ({ children }: any) => {
  return (
    <div>
      <NavbarAdmin />
      {children}
    </div>
  );
};

export default layout;
