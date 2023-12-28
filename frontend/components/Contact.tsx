"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { sendEmail } from "@/coreComponents/helper/email";
import { FaWhatsapp } from "react-icons/fa";

interface IFormInput {
  from: string;
  to: string[];
  html: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    // Construir los datos del correo electrónico
    const emailData = {
      from: "Acme <onboarding@resend.dev>",
      to: "quiroga.lucasoffice@gmail.com",
      subject: "Nuevo mensaje recibido",
      html: `<strong> Hola mi nombre es ${data.from} </strong>, mi correo electronico es ${data.to} y mi mensaje es el siguiente: ${data.html}`, // mensaje
    };

    try {
      await sendEmail(emailData);
      console.log("Email sent successfully");
      // Puedes hacer algo aquí después de enviar el correo, como mostrar un mensaje de éxito
    } catch (error) {
      console.error("Failed to send email", error);
      console.log("Error details:", error);
    }
  };

  return (
    <section className="bg-white ">
      <div className="container px-6 py-12 mx-auto ">
        <div className="flex justify-between flex-col sm:flex-row">
          <div className="flex justify-start items-center mx-auto">
            <div className="grid grid-cols-1 gap-12 lg:col-span-2 sm:grid-cols-2 mx-auto content-center">
              <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                  Chat to sales
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Speak to our friendly team.
                </p>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                  hello@merakiui.com
                </p>
              </div>

              <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                  Chat to support
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  We’re here to help.
                </p>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                  Start new chat
                </p>
              </div>

              <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                  Visit us
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Visit our office HQ..
                </p>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                  100 Smith Street Collingwood VIC 3066 AU
                </p>
              </div>

              <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                  Call us
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Mon-Fri from 8am to 5pm.
                </p>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                  +1 (555) 000-0000
                </p>
              </div>
            </div>
          </div>

          {/* datos del correo electronico */}
          <div className="mt-8 ">
            <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg  lg:max-w-xl shadow-gray-300/50 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
              <h1 className="text-lg font-medium text-gray-700 uppercase">
                Infórmanos acerca de cualquier pregunta que puedas tener.
              </h1>

              <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex-1">
                  <label className="block mb-2 text-sm text-gray-600">
                    Tu nombre y/o apellido
                  </label>
                  <input
                    {...register("from")}
                    type="text"
                    id="from"
                    placeholder="John Doe"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="flex-1 mt-6">
                  <label className="block mb-2 text-sm text-gray-600">
                    Tu correo electrónico
                  </label>
                  <input
                    {...register("to")}
                    type="email"
                    id="to"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="w-full mt-6">
                  <label className="block mb-2 text-sm text-gray-600">
                    Mensaje
                  </label>
                  <textarea
                    {...register("html")}
                    id="html"
                    className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  get in touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
