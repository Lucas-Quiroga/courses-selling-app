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
} from "@/components";
import { isAuthenticated } from "@/coreComponents/helper/auth";
import { ViewHomeForm } from "@/components";
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
      {!isAuth && !session?.user ? (
        <ViewHomeForm />
      ) : (
        <>
          {" "}
          <Hero />
          <SectionCoursesAll />
          {/* <div className="relative flex mx-auto w-full">
            <div className="flex">
              <div className="relative ">
                <Sidebar />
              </div>
              <div className="flex flex-col w-full">
                <div className="w-full">
                  <Banner />
                </div>
                <div className="w-full">
                  <SearchBar />
                </div>
                <div className="flex flex-wrap w-full justify-center items-center mx-auto gap-5 grow-1">
                  {courses.length > 0 ? (
                    courses.map((course: Course, index: any) => (
                      <Cards
                        key={index}
                        image={course.image}
                        name={course.name}
                        description={course.description}
                        price={course.price}
                        _id={course._id}
                      />
                    ))
                  ) : (
                    <div>Not available courses</div>
                  )}
                </div>
              </div>
            </div>
          </div> */}
        </>
      )}
    </>
  );
};

export default HomeWeb;
