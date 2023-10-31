"use client";
import React from "react";
import Link from "next/link";

const admin = () => {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="w-80 rounded-2xl bg-slate-900">
        <div className="flex flex-col gap-2 p-8">
          <h1 className="text-white text-center">welcome</h1>
          <Link
            href="admin/signin"
            className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 active:scale-95"
          >
            Login
          </Link>
          <Link
            href="admin/signup"
            className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration:200 ease-in-out hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 active:scale-95"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default admin;
