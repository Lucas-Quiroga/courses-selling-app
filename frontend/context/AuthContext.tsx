"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type AuthContextType = {
  isLogin: boolean;
  active: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  toggleForm: () => void;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  toggleModal: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [active, setActive] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const toggleModal = () => {
    setActive(!active);
  };

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        active,
        setIsLogin,
        setActive,
        toggleForm,
        toggleModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
