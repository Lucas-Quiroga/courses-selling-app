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
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
      <a href="#">
        <Image
          className="rounded-t-lg bg-cover"
          src={image}
          width={100}
          height={100}
          alt="curso imagen"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name || "Noteworthy technology acquisitions 2021"}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description ||
            "Here are the biggest enterprise technology acquisitions of 2021"}
        </p>
        <p className="text-white">{price || "$300"}</p>
        <a
          href="#"
          onClick={() => router.push(`/Courses/${_id}`)}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Cards;
