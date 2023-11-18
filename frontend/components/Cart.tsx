"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

const Cart = () => {
  const { state, dispatch } = useCart();

  const router = useRouter();

  const handleRemoveClick = (courseId: number) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { _id: courseId },
    });
  };

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
                    <th className="text-left font-semibold">Product</th>
                    <th className="text-left font-semibold">Price</th>
                    {/* <th className="text-left font-semibold">Quantity</th> */}
                    <th className="text-left font-semibold">Total</th>
                    <th className="text-left font-semibold">ADD / Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {state.items.map((item) => (
                    <tr key={item._id}>
                      <td className="py-4">
                        <div className="flex items-center">
                          <img
                            className="h-16 w-16 mr-4"
                            src={
                              item.image ||
                              "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            }
                            alt="Product image"
                          />
                          <span className="font-semibold">{item.name}</span>
                        </div>
                      </td>
                      <td className="py-4">${item.price}</td>
                      {/* <td className="py-4">
                        <div className="flex items-center">
                          <button className="border rounded-md py-2 px-4 mr-2">
                            -
                          </button>
                          <span className="text-center w-8">1</span>
                          <button className="border rounded-md py-2 px-4 ml-2">
                            +
                          </button>
                        </div>
                      </td> */}
                      <td className="py-4">${item.price}</td>
                      <td className="py-4">
                        <button onClick={() => handleRemoveClick(item._id)}>
                          delete
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
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>$19.99</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Taxes</span>
                <span>$1.99</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">$21.98</span>
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
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
