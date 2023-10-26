"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.clear();
    router.push("/");
    router.refresh();
  }, []);

  return;
};

export default Logout;
