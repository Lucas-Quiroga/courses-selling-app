import {MouseEventHandler} from "react"

export interface CustomButtonProps{
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface CardDetailsProps {
    course: {
      _id: number;
      name: string;
      description: string;
      highlights: string[];
      price: number;
      thumbnail: string;
      duration: string;
      videos: number;
      level: string;
      details: string;
      format: string;
    };
  }
  
  export interface CardsProps {
    _id: number;
    name: string;
    description: string;
    highlights: string[];
    price: number;
    thumbnail: string;
    duration: string;
    videos: number;
    level: string;
    details: string;
    format: string;
  }
  
  // Define la interfaz CartItem
  export interface CartItem {
    _id: string;
    course: Course;
  }
  
  // Define la interfaz Course
  export interface Course {
    _id: string;
    name: string;
    description: string;
    price: number;
    thumbnail: string;
    duration: string | number;
    videos: number;
    level: string;
    highlights: string[];
    details: string;
    format: string;
    // Agrega aquí cualquier otra propiedad que necesites de Course
  }
  
  // Define la interfaz CartItem
  export interface CartItem {
    _id: string;
    course: Course;
  }
  
  export interface IFormInput {
    from: string;
    to: string[];
    html: string;
  }
  
  export type UserProfile = {
    firstName: string;
    email: string;
  };
  
  export interface IFormInput {
    firstName: string;
    phoneNo: number;
    newPassword: string | number;
  }
  
  // Tipos duplicados ajustados
  export type CourseType1 = {
    _id: string;
    name: string;
    description: string;
    price: number;
    modules: any[];
    thumbnail: string;
    duration: string;
    level: string;
    __v: number;
  };
  
  export type CourseType2 = {
    image: string;
    name: string;
    description: string;
    price: number;
    _id: number;
  };