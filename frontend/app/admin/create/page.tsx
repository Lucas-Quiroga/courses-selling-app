"use client";
import React, { useState, useEffect } from "react";
import {
  useForm,
  FieldError,
  SubmitHandler,
  useFieldArray,
} from "react-hook-form";
import { useParams } from "next/navigation";
// import { getCourseDetail } from "@/coreComponents/helper/apiCalls";
import { createCourse, updateCourse } from "@/coreComponents/helper/course";
import { getCourseDetail } from "@/coreComponents/helper/apiCalls";
import { useRouter } from "next/navigation";

interface IFormInput {
  name: string;
  description: string;
  price: number;
  thumbnail: string;
  modules: {
    title: string;
    description: string;
  }[];
  duration: string | number;
  level: string;
}

const page = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    thumbnail: "",
    duration: "",
    level: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
    control,
    setValue,
  } = useForm<IFormInput>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "modules",
  });

  const params = useParams();
  const router = useRouter();

  const fetchData = async () => {
    if (params.id) {
      try {
        const course = await getCourseDetail(params.id);
        const { name, description, price, thumbnail, duration, level } = course;
        setData({
          name,
          description,
          price,
          thumbnail,
          duration,
          level,
        });

        // Configura los valores iniciales en el controlador de React Hook Form
        setValue("duration", duration);
        setValue("level", level);
      } catch (error) {
        console.error("Error fetching course data:", error);
        // Manejar el error de alguna manera si es necesario
      }
    }
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const course = {
      name: data.name,
      description: data.description,
      price: data.price,
      thumbnail: data.thumbnail,
      modules: data.modules,
      duration: data.duration,
      level: data.level,
    };

    try {
      if (!params.id) {
        const response = await createCourse(course);
        if (response.status === 200) {
          setSuccess("Curso creado con exito!");
          setTimeout(() => {
            setSuccess(""); // Borra el mensaje de éxito después de 2 segundos
            router.push("/admin/courses");
          }, 3000); // 2000 milisegundos (2 segundos)
        }
      } else {
        const response = await updateCourse(params.id, course);
        if (response.status === 200) {
          setSuccess("Curso actualizado con exito!");
          setTimeout(() => {
            setSuccess(""); // Borra el mensaje de éxito después de 2 segundos
            router.refresh();
          }, 3000); // 2000 milisegundos (2 segundos)

          setTimeout(() => {
            router.push("/admin/courses");
            router.refresh();
          }, 3001);
        }
      }
    } catch (error) {
      setError(
        "Ocurrió un error durante la creacion. Por favor, inténtalo de nuevo."
      );
      setTimeout(() => {
        setError(""); // Borra el mensaje de éxito después de 2 segundos
      }, 3000); // 2000 milisegundos (2 segundos)
    }
    reset();
  };

  useEffect(() => {
    if (params.id) {
      fetchData();
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
      <div className="p-4 items-center flex flex-col">
        <h2 className="text-2xl font-semibold mb-4">
          {params.id ? "Editar el curso" : "Crear un nuevo curso"}
        </h2>
        <form className="max-w-md space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">Nombre del curso:</label>
            <input
              type="text"
              id="name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
              defaultValue={data.name}
              className="w-full border border-gray-300 rounded p-2"
            />
            {errors.name && (
              <span className="block text-red-600 text-[15px] font-bold">
                {(errors.name as FieldError).message}
              </span>
            )}
          </div>
          <div>
            <label htmlFor="description">Descripción:</label>
            <textarea
              id="description"
              {...register("description", {
                required: {
                  value: true,
                  message: "description is required",
                },
                minLength: {
                  value: 10,
                  message:
                    "The description must be at least 10 characters long",
                },
              })}
              className="w-full border border-gray-300 rounded p-2"
              defaultValue={data.description}
            ></textarea>
            {errors.description && (
              <span className="block text-red-600 text-[15px] font-bold">
                {(errors.description as FieldError).message}
              </span>
            )}
          </div>
          <div>
            <label htmlFor="price">Precio:</label>

            <input
              type="number"
              id="price"
              {...register("price", {
                required: {
                  value: true,
                  message: "price is required",
                },
              })}
              className="w-full border border-gray-300 rounded p-2"
              defaultValue={data.price}
            />
            {errors.price && (
              <span className="block text-red-600 text-[15px] font-bold">
                {(errors.price as FieldError).message}
              </span>
            )}
          </div>
          <div>
            <label htmlFor="thumbnail">URL de la imagen del curso:</label>
            <input
              type="text"
              id="thumbnail"
              {...register("thumbnail", {
                required: {
                  value: true,
                  message: "thumbnail is required",
                },
              })}
              className="w-full border border-gray-300 rounded p-2"
              defaultValue={data.thumbnail}
            />
            {errors.thumbnail && (
              <span className="block text-red-600 text-[15px] font-bold">
                {(errors.thumbnail as FieldError).message}
              </span>
            )}
          </div>
          {fields.map((field, index) => (
            <div key={field.id}>
              <input
                type="text"
                {...register(`modules.${index}.title`)}
                placeholder="Título del módulo"
              />
              <textarea
                {...register(`modules.${index}.description`)}
                placeholder="Descripción del módulo"
              />
              <button type="button" onClick={() => remove(index)}>
                Eliminar Módulo
              </button>
            </div>
          ))}
          <div>
            <label htmlFor="duration">Duración del curso:</label>
            <select
              id="duration"
              {...register("duration", {
                required: {
                  value: true,
                  message: "Duration is required",
                },
              })}
              className="w-full border border-gray-300 rounded p-2"
              defaultValue={data.duration}
            >
              <option value="">Selecciona la duración</option>
              <option value="Corto">Corto</option>
              <option value="Medio">Medio</option>
              <option value="Largo">Largo</option>
            </select>
            {errors.duration && (
              <span className="block text-red-600 text-[15px] font-bold">
                {(errors.duration as FieldError).message}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="level">Nivel del curso:</label>
            <select
              id="level"
              {...register("level", {
                required: {
                  value: true,
                  message: "Level is required",
                },
              })}
              className="w-full border border-gray-300 rounded p-2"
              defaultValue={data.level}
            >
              <option value="">Selecciona el nivel</option>
              <option value="Principiante">Principiante</option>
              <option value="Intermedio">Intermedio</option>
              <option value="Avanzado">Avanzado</option>
            </select>
            {errors.level && (
              <span className="block text-red-600 text-[15px] font-bold">
                {(errors.level as FieldError).message}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={() => append({ title: "", description: "" })}
            className="text-blue-500"
          >
            Agregar Módulo
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {params.id ? "Editar curso" : "Crear Curso"}
          </button>
        </form>
      </div>
    </>
  );
};

export default page;
