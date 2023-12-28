"use client";
import React, { useState, useEffect } from "react";
import { Hero, Testimonials, Aside } from "@/components";
import { isAuthenticated } from "@/coreComponents/helper/auth";
import { useSession } from "next-auth/react";

const HomeWeb = () => {
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
    <div>
      <div className="flex">
        {/* <Aside /> */}
        <Hero />
      </div>
      {/* <Testimonials /> */}
    </div>
  );
};

export default HomeWeb;
