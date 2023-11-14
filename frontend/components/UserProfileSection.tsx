"use client";
import React, { useState, useEffect } from "react";
import {
  getUserProfile,
  isAuthenticated,
  updateProfileUser,
} from "@/coreComponents/helper/auth";
import { useForm, FieldError, SubmitHandler } from "react-hook-form";

interface UserProfile {
  firstName: string;
  email: string;
}

interface IFormInput {
  firstName: string;
  phoneNo: number;
  newPassword: string | number;
}

const UserProfileSection = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const token = localStorage.getItem("userJwt");
    const userUpdates = {
      firstName: data.firstName,
      phoneNo: data.phoneNo,
      newPassword: data.newPassword,
    };

    try {
      // Llamar a la función para actualizar el perfil del usuario
      const updatedUserProfile = await updateProfileUser(token, userUpdates);

      // Realizar otras acciones necesarias, como mostrar un mensaje de éxito
      // console.log("Perfil actualizado con éxito", updatedUserProfile);

      reset(); // Restablecer el formulario
    } catch (error) {
      console.error("Error al actualizar el perfil del usuario:", error);
      // Manejar el error, mostrar un mensaje de error, etc.
    }
  };

  useEffect(() => {
    if (isAuthenticated()) {
      const userJwt = localStorage.getItem("userJwt");
      // El usuario está autenticado, ahora puedes recuperar el perfil
      getUserProfile(userJwt)
        .then((data) => setUserProfile(data))
        .catch((error) =>
          console.error("Error al recuperar el perfil:", error)
        );
    }
  }, []);

  return (
    <>
      {success && (
        <div
          id="toast-success"
          className="flex items-center w-full p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200 ">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="sr-only">Check icon</span>
          </div>
          <div className="ml-3 text-sm font-normal">{success}</div>
          <button
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-success"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      )}

      {error && (
        <div
          id="toast-warning"
          className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
            </svg>
            <span className="sr-only">Warning icon</span>
          </div>
          <div className="ml-3 text-sm font-normal">{error}</div>
          <button
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-warning"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      )}
      <section className="py-40 bg-gray-100  bg-opacity-50 h-screen">
        <form action="#" onSubmit={handleSubmit(onSubmit)}>
          <div className="mx-auto container max-w-2xl md:w-3/4 shadow-md">
            <div className="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
              <div className="max-w-sm mx-auto md:w-full md:mx-0">
                <div className="inline-flex items-center space-x-4">
                  <img
                    className="w-10 h-10 object-cover rounded-full"
                    alt="User avatar"
                    src="https://avatars3.githubusercontent.com/u/72724639?s=400&u=964a4803693899ad66a9229db55953a3dbaad5c6&v=4"
                  />
                  <h1 className="text-gray-600">{userProfile?.firstName}</h1>
                </div>
              </div>
            </div>
            <div className="bg-white space-y-6">
              <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
                <h2 className="md:w-1/3 max-w-sm mx-auto">Account</h2>
                <div className="md:w-2/3 max-w-sm mx-auto">
                  <label className="text-sm text-gray-400">Email</label>
                  <div className="w-full inline-flex border">
                    <div className="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                      <svg
                        fill="none"
                        className="w-6 text-gray-400 mx-auto"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <input
                      type="email"
                      className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                      placeholder={`${userProfile?.email}`}
                      disabled
                    />
                  </div>
                </div>
              </div>

              <hr />
              <div className="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
                <h2 className="md:w-1/3 mx-auto max-w-sm">Personal info</h2>
                <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <label className="text-sm text-gray-400">Full name</label>
                    <div className="w-full inline-flex border">
                      <div className="w-1/12 pt-2 bg-gray-100">
                        <svg
                          fill="none"
                          className="w-6 text-gray-400 mx-auto"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        id="firstName"
                        {...register("firstName")}
                        placeholder={userProfile?.firstName}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-gray-400">
                      Phone number
                    </label>
                    <div className="w-full inline-flex border">
                      <div className="pt-2 w-1/12 bg-gray-100">
                        <svg
                          fill="none"
                          className="w-6 text-gray-400 mx-auto"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="phoneNo"
                        {...register("phoneNo", {
                          pattern: {
                            value:
                              /^[0-9]{8,}$/ /* Patrón de validación para números de teléfono (mínimo 8 dígitos) */,
                            message: "Phone number is not valid",
                          },
                        })}
                        className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        placeholder="12341234"
                      />
                      {errors.phoneNo && (
                        <span className="block text-red-600 text-[15px] font-bold">
                          {(errors.phoneNo as FieldError).message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <hr />
              <div className="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">
                <h2 className="md:w-4/12 max-w-sm mx-auto">Change password</h2>

                <div className="md:w-5/12 w-full md:pl-9 max-w-sm mx-auto space-y-5 md:inline-flex pl-2">
                  <div className="w-full inline-flex border-b">
                    <div className="w-1/12 pt-2">
                      <svg
                        fill="none"
                        className="w-6 text-gray-400 mx-auto"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <input
                      type="password"
                      id="newPassword"
                      {...register("newPassword", {
                        required: {
                          value: true,
                          message: "New password is required",
                        },
                        minLength: {
                          value: 8, // Definir la longitud mínima de la contraseña
                          message:
                            "Password must be at least 8 characters long",
                        },
                      })}
                      className="w-11/12 focus:outline-none focus:text-gray-600 p-2 ml-4"
                      placeholder="New"
                    />
                    {errors.newPassword && (
                      <span className="block text-red-600 text-[15px] font-bold">
                        {(errors.newPassword as FieldError).message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="md:w-3/12 text-center md:pl-6">
                  <button
                    type="submit"
                    className="text-white w-full mx-auto max-w-sm rounded-md text-center bg-indigo-400 py-2 px-4 inline-flex items-center focus:outline-none md:float-right hover:bg-indigo-600"
                  >
                    <svg
                      fill="none"
                      className="w-4 text-white mr-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    Update
                  </button>
                </div>
              </div>

              <hr />
              <div className="w-full p-4 text-right text-gray-500">
                <button
                  className="inline-flex items-center focus:outline-none mr-4"
                  disabled
                >
                  <svg
                    fill="none"
                    className="w-4 mr-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Delete account
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default UserProfileSection;
