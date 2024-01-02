// imports
import { IoMdHome } from "react-icons/io";
import { MdEmail, MdQuestionAnswer } from "react-icons/md";
import { SiCodemagic } from "react-icons/si";
import { SideNavItem } from "@/types";

//checkout
export const CARGO_SERVICIO_WEB = 5000;

//navbar

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Inicio",
    path: "/",
    icon: (
      <IoMdHome className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    ),
  },
  {
    title: "Contacto",
    path: "/contact",
    icon: (
      <MdEmail className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    ),
  },
  {
    title: "Orientación",
    path: "/orientation",
    icon: (
      <SiCodemagic className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    ),
  },
  {
    title: "Preguntas Frecuentes",
    path: "/faqs",
    icon: (
      <MdQuestionAnswer className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    ),
  },
];
