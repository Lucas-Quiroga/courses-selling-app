"use client";
import React from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const Provider = ({ children }: any) => {
  return (
    <>
      <ProgressBar height="4px" color="#4F46E5" />
      {children}
    </>
  );
};

export default Provider;
