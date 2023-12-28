"use client";
import React, { useState, useEffect, useRef } from "react";

const Modal2 = ({ isOpen, onClose }: any) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
      )}

      <div
        className={`fixed left-0 top-0 z-10 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div
          onFocus={() => isOpen}
          onBlur={() => onClose()}
          className="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]"
        >
          <h3 className="pb-[18px] text-xl font-semibold text-dark dark:text-white sm:text-2xl">
            Your Message Sent Successfully
          </h3>
          <span
            className={`mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-blue-600`}
          ></span>
          <p className="mb-10 text-base text-gray-500 leading-relaxed text-body-color dark:text-dark-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since
          </p>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-1/2 px-3">
              <button
                onClick={onClose}
                className="block w-full rounded-md border border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:text-white"
              >
                Cancel
              </button>
            </div>
            <div className="w-1/2 px-3">
              <button className="block w-full rounded-md border border-primary bg-blue-600 p-3 text-center text-base font-medium text-white transition hover:bg-blue-dark">
                <a href={`/#`}> View Details </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal2;
