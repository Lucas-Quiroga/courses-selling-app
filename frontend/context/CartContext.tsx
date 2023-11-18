"use client";
import React, { ReactNode, createContext, useContext, useReducer } from "react";

// Estructura de los items a recibir
interface Course {
  image: string;
  name: string;
  price: number;
  _id: number;
}

// Representa el estado del carrito
interface CartState {
  items: Course[];
}

//propiedades que estarán disponibles en el contexto del carrito (state = estado actual del carrito, dispatch =  función para enviar acciones al reductor.)
interface CartContextProps {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}

//estructura de las acciones que se pueden despachar
interface CartAction {
  type: "ADD_TO_CART" | "REMOVE_FROM_CART";
  payload: Course;
}

//Estado inicial del carrito, inicializada como un array vacío.
const initialState: CartState = {
  items: [],
};

// Se crea el contexto
const CartContext = createContext<CartContextProps | undefined>(undefined);

// Función que toma el estado actual y una acción, y devuelve un nuevo estado. En este caso, solo maneja la acción 'ADD_TO_CART', la cual agrega un nuevo curso al array de items en el estado.
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter(
          (course) => course._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  //gestionar el estado del carrito
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};
