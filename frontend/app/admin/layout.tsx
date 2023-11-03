"use client";
import React from "react";
import { NavbarAdmin } from "@/components";
import { usePathname } from "next/navigation";

const layout = ({ children }: any) => {
  const pathname = usePathname();
  return (
    <div>
      <div className={`${pathname === "/admin" ? "hidden" : ""}`}>
        <NavbarAdmin />
      </div>
      {children}
    </div>
  );
};

export default layout;
