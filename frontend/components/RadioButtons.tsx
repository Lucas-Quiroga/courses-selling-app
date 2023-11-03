import React from "react";

const RadioButtons = () => {
  return (
    <div className=" relative main flex justify-center border  overflow-hidden m-4 select-none xxl:w-[22%] items-center">
      <div className="title py-3 my-auto px-5 bg-blue-500 text-white text-sm font-semibold mr-3">
        Cursos
      </div>
      <label className="flex radio p-2 cursor-pointer">
        <input
          className="my-auto transform scale-125"
          type="radio"
          name="sfg"
        />
        <div className="title px-2">Tarot</div>
      </label>

      <label className="flex radio p-2 cursor-pointer">
        <input
          className="my-auto transform scale-125"
          type="radio"
          name="sfg"
        />
        <div className="title px-2">Snacion</div>
      </label>

      <label className="flex radio p-2 cursor-pointer">
        <input
          className="my-auto transform scale-125"
          type="radio"
          name="sfg"
        />
        <div className="title px-2">Otro</div>
      </label>

      <label className="flex radio p-2 cursor-pointer">
        <input
          className="my-auto transform scale-125"
          type="radio"
          name="sfg"
        />
        <div className="title px-2">Otro</div>
      </label>
    </div>
  );
};

export default RadioButtons;
