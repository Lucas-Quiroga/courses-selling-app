"use client";
import React, { useState, useEffect } from "react";
import {
  Sidebar,
  Banner,
  // SearchBar,
  Cards,
  NavbarUser,
  Hero,
  SectionOneCourse,
  SectionCoursesAll,
  Testimonials,
} from "@/components";
import { isAuthenticated } from "@/coreComponents/helper/auth";
import { ViewHomeForm, Teachers } from "@/components";
import { useSession } from "next-auth/react";

type Course = {
  image: string;
  name: string;
  description: string;
  price: number;
  _id: number;
};

const HomeWeb = ({ courses }: { courses: Course[] }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  //data del usuario ingresado por google
  const { data: session } = useSession();

  useEffect(() => {
    const checkAuth = () => setIsAuth(isAuthenticated());
    checkAuth(); // Verifica la autenticación inmediatamente
    const id = setInterval(checkAuth, 1000); // Verifica la autenticación cada segundo

    return () => clearInterval(id); // Limpia el intervalo cuando se desmonta el componente
  }, []);

  return (
    <>
      {/* {isAuth && session?.user ? (
        <ViewHomeForm />
      ) : (
        <> */}{" "}
      <Hero />
      <SectionCoursesAll />
      <Teachers />
      <Testimonials />
    </>
  );
};

export default HomeWeb;
