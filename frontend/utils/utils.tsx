// Importa las funciones necesarias de las bibliotecas externas
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Define una función cn (class names) que toma una variedad de valores de clase
export const cn = (...inputs: ClassValue[]) => {
  // Combina las clases utilizando clsx, que maneja diversas formas de entrada
  // (cadenas, objetos, arreglos, funciones)
  const combinedClasses = clsx(inputs);

  // Utiliza twMerge para aplicar la funcionalidad de tailwind-merge
  // que permite fusionar clases de Tailwind CSS de manera más inteligente
  // y proporciona un conjunto más rico de características de combinación
  return twMerge(combinedClasses);
};
