"use client";
import React from "react";
import { ModalForm } from "@/components";
import { usePathname } from "next/navigation";

const page = () => {
  const pathname = usePathname();
  console.log(pathname);

  return <ModalForm currentPath={pathname} />;
};

export default page;
