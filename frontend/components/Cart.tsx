"use client";
import React, { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { getCart, createOrder } from "@/coreComponents/helper/cart";
import { MdDelete } from "react-icons/md";
import { removeFromCart } from "@/coreComponents/helper/cart";
import { CartItem } from "@/types";

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const { state, dispatch } = useCart();

  const router = useRouter();

  // const handleRemoveClick = (courseId: number) => {
  //   dispatch({
  //     type: "REMOVE_FROM_CART",
  //     payload: { _id: courseId },
  //   });
  // };

  const handleRemoveClick = async (courseId: string) => {
    try {
      // Llamada a la función removeFromCart del cliente
      await removeFromCart(courseId);

      // Actualiza el estado del carrito
      const updatedCart = await getCart();
      setCart(updatedCart.cart);
    } catch (error) {
      console.error("Error al eliminar del carrito:", error);
      // Manejar el error según sea necesario
    }
  };

  const handleCheckout = async () => {
    try {
      // Obtén la información de los cursos desde el estado local
      const courses = cart.map((item) => item.course);

      // Crea la orden en MercadoPago
      const orderResponse = await createOrder(courses);

      // Verifica si la respuesta de MercadoPago tiene el campo 'init_point'
      if (orderResponse && orderResponse.init_point) {
        // Redirige al usuario al init_point de MercadoPago
        window.location.href = orderResponse.init_point;
      } else {
        // Maneja el caso en que no se proporciona el init_point
        console.error(
          "No se proporcionó el init_point en la respuesta de MercadoPago"
        );
        // Puedes mostrar un mensaje de error o redirigir a una página de error
      }
    } catch (error) {
      console.error("Error al procesar el pago:", error);
      // Manejar el error según sea necesario
    }
  };

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const cartData = await getCart();

        setCart(cartData.cart);
      } catch (error) {
        console.error("Error al obtener el carrito:", error);
      }
    };

    fetchCart();
  }, []);

  return (
    <div className="bg-gray-100 h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold">Producto</th>
                    <th className="text-left font-semibold">Nivel</th>
                    <th className="text-left font-semibold">Precio</th>
                    {/* <th className="text-left font-semibold">Quantity</th> */}
                    {/* <th className="text-left font-semibold">Total</th> */}
                    {/* <th className="text-left font-semibold">ADD / Delete</th> */}
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item._id}>
                      <td className="py-4">
                        <div className="flex items-center">
                          <img
                            className="h-16 w-16 mr-4"
                            src={
                              item.course.thumbnail ||
                              "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            }
                            alt="Product image"
                          />
                          <span className="font-semibold">
                            {item.course.name}
                          </span>
                        </div>
                      </td>
                      <td className="py-4">{item.course.level}</td>
                      <td className="py-4">${item.course.price}</td>
                      <td className="py-4">
                        <button
                          onClick={() => handleRemoveClick(item.course._id)}
                        >
                          <MdDelete size={25} color="red" />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {/* <!-- More product rows --> */}
                </tbody>
              </table>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Resumen</h2>
              {cart.map((item) => (
                <div className="flex justify-between mb-2" key={item._id}>
                  <span>{item.course.name}</span>
                  <span>${item.course.price}</span>
                </div>
              ))}
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">
                  ${cart.reduce((total, item) => total + item.course.price, 0)}
                </span>
              </div>
              <button
                onClick={handleCheckout}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
