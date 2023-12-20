import React from "react";
import {
  FcEngineering,
  FcFilmReel,
  FcMultipleDevices,
  FcMusic,
  FcOldTimeCamera,
  FcSalesPerformance,
  FcSportsMode,
} from "react-icons/fc";
import { IconType } from "react-icons";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface CategoryItemProps {
  label: string;
  value?: string;
  icon?: IconType;
}

const CategoryItems = ({ label, value, icon: Icon }: CategoryItemProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategoryId = searchParams.get("categoryId");
  const currentTitle = searchParams.get("title");

  //   const isSelected = currentCategoryId === value;

  let isSelected = true;

  return (
    <button
      className="bg-indigo-600 dark:text-indigo-400 hover:shadow hover:bg-danger transition duration-150 px-2 py-1 rounded text-sm text-white mx-1 my-2"
      type="button"
    >
      {Icon && <Icon size={20} />}
      <div className="truncate text-white font-semibold">{label}</div>
    </button>
  );
};

export default CategoryItems;
