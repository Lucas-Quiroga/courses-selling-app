"use client";
import React, { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import { PurchaseProcessInformation } from ".";

const Modal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleToggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <div>
      <button
        className="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={handleToggleModal}
      >
        <CiCircleInfo />
        Más Información
      </button>

      {isModalVisible && (
        <div
          id="static-modal"
          data-modal-backdrop="static"
          tabIndex={-1}
          aria-hidden="true"
          className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <PurchaseProcessInformation onClose={handleToggleModal} />
        </div>
      )}
    </div>
  );
};

export default Modal;
