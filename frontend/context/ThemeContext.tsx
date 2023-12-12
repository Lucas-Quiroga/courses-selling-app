"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";

// Definir el tipo del estado del tema
type Theme = "light" | "dark";

// Definir el tipo del contexto
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Crear el contexto
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Definir el tipo para el proveedor del contexto
interface ThemeProviderProps {
  children: ReactNode;
}

// Proveedor del contexto que manejará el estado del tema
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Recuperar el tema del Local Storage o usar el tema predeterminado
  const storedTheme = localStorage.getItem("theme");
  const initialTheme: Theme = storedTheme
    ? (storedTheme as Theme)
    : window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  const [theme, setTheme] = useState<Theme>(initialTheme);

  // Aplicar el tema al HTML
  useEffect(() => {
    document.querySelector("html")?.classList.remove("dark", "light");
    document.querySelector("html")?.classList.add(theme);

    // Guardar el tema en el Local Storage
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Función para cambiar entre los temas
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Proporcionar el estado del tema y la función para cambiar el tema a los componentes descendientes
  const contextValue: ThemeContextType = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Exportar el contexto para su uso en otros componentes
export default ThemeContext;
