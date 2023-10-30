"use client";
import React from "react";
import { ModalForm } from "@/components";
import { usePathname } from "next/navigation";

const admin = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div>
      <ModalForm currentPath={pathname} />
    </div>
  );
};

export default admin;
