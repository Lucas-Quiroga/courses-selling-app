"use client";
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { LoginUser, RegisterUser } from ".";

const ViewHomeForm = () => {
  const { isLogin } = useAuth();
  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">
            ¡Comienza tu viaje hoy!
          </h1>

          <p className="mt-4 text-gray-500">
            Descubre, aprende y crece con Paula Domínguez.
          </p>
        </div>

        <div className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          {isLogin ? <LoginUser /> : <RegisterUser />}
        </div>
      </div>

      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <img
          alt="Welcome"
          src="https://images.unsplash.com/photo-1637757960303-6b152b77e161?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default ViewHomeForm;
