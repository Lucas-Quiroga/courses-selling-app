"use client";
import React from "react";
import { Hero } from "@/components";
// import { isAuthenticated } from "@/coreComponents/helper/auth";

const HomeWeb = () => {
  // const [isAuth, setIsAuth] = useState<boolean>(false);

  //data del usuario ingresado por google
  // const { data: session } = useSession();

  // useEffect(() => {
  //   const checkAuth = () => setIsAuth(isAuthenticated());
  //   checkAuth(); // Verifica la autenticación inmediatamente
  //   const id = setInterval(checkAuth, 1000); // Verifica la autenticación cada segundo

  //   return () => clearInterval(id); // Limpia el intervalo cuando se desmonta el componente
  // }, []);

  return <Hero />;
};

export default HomeWeb;
