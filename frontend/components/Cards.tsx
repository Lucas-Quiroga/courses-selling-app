"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CardsProps {
  image: string;
  name: string;
  description: string;
  price: number;
  _id: number;
}

const Cards = ({ image, name, description, price, _id }: CardsProps) => {
  image = image ? image : "/cardimg.png";

  const router = useRouter();
  return (
    <div className="w-80 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <Image
        className="w-full h-40 object-cover rounded-t-lg"
        src={image}
        width={100}
        height={100}
        alt="Card Image"
      />
      <div className="p-4">
        <h2 className="text-xl  font-semibold">
          {" "}
          {name || "Noteworthy technology acquisitions 2021"}
        </h2>
        <p className="text-gray-600">
          {description ||
            "Here are the biggest enterprise technology acquisitions of 2021"}
        </p>
        <p className="text-black">{price || "$300"}</p>
        <div className="flex justify-between items-center mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => router.push(`/Courses/${_id}`)}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
