"use client";
// import {
//   FcEngineering,
//   FcFilmReel,
//   FcMultipleDevices,
//   FcMusic,
//   FcOldTimeCamera,
//   FcSalesPerformance,
//   FcSportsMode
// } from "react-icons/fc";

// interface CategoriesProps {
//   items: Category[];
// }

// const iconMap: Record<Category["name"], IconType> = {
//   "Music": FcMusic,
//   "Photography": FcOldTimeCamera,
//   "Fitness": FcSportsMode,
//   "Accounting": FcSalesPerformance,
//   "Computer Science": FcMultipleDevices,
//   "Filming": FcFilmReel,
//   "Engineering": FcEngineering,
// };

import CategoryItems from "./CategoryItems";

const items = [
  { id: 1, name: "Music" },
  { id: 2, name: "Photography" },
  { id: 3, name: "Fitness" },
  { id: 4, name: "Accounting" },
  { id: 5, name: "Computer Science" },
  { id: 6, name: "Filming" },
  { id: 7, name: "Engineering" },
];

const Categories = () => {
  return (
    <div className="flex flex-wrap items-center p-4">
      {items.map((item) => (
        <CategoryItems key={item.id} label={item.name} />
      ))}
    </div>
  );
};

export default Categories;
