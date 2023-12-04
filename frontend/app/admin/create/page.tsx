"use client";
import React, { useState, useEffect } from "react";
import {
  useForm,
  FieldError,
  SubmitHandler,
  useFieldArray,
  useWatch,
} from "react-hook-form";
import { useParams } from "next/navigation";
// import { getCourseDetail } from "@/coreComponents/helper/apiCalls";
import { createCourse, updateCourse } from "@/coreComponents/helper/course";
import { getCourseDetail } from "@/coreComponents/helper/apiCalls";
import { useRouter } from "next/navigation";
import { Cards } from "@/components";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Image from "next/image";
import { MdOndemandVideo } from "react-icons/md";

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
  videos: number;
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
    videos: "",
    level: "",
  });

  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const onChangeHandler = (e: any) => {
    const selectedFile =
      e.target.files && e.target.files.length > 0 ? e.target.files[0] : null;
    setFile(selectedFile);
  };

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

  const watchedFields = watch([
    "name",
    "description",
    "price",
    "thumbnail",
    "duration",
    "videos",
    "level",
  ]);

  // Función para calcular el precio más caro con un incremento del 20%
  const calculateOriginalPrice = (price: number): number => {
    const originalPrice = price * 1.2; // Aumento del 20%
    return originalPrice;
  };

  // Formatear el precio
  const formattedPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(watchedFields[2]);

  // Calcular el precio más caro
  const originalPrice = calculateOriginalPrice(watchedFields[2]);
  const formattedOriginalPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(originalPrice);

  const params = useParams();
  const router = useRouter();

  const generateRating = (rating: number) => {
    if (rating < 1 || rating > 5) {
      return null;
    }

    const stars = (
      <div className="flex gap-1 text-[20px] text-[#FF9529]">
        {Array.from({ length: 5 }, (_, index) => (
          <div key={index}>
            {index < rating ? <AiFillStar /> : <AiOutlineStar />}
          </div>
        ))}
      </div>
    );

    return stars;
  };

  const imagenmuestra =
    "https://res.cloudinary.com/dncmrwppr/image/upload/v1701467260/nmh4jtbjchoq10aaf0el.png";

  const fetchData = async () => {
    if (params.id) {
      try {
        const course = await getCourseDetail(params.id);
        const { name, description, price, thumbnail, duration, videos, level } =
          course;
        setData({
          name,
          description,
          price,
          thumbnail,
          duration,
          videos,
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
    try {
      let imageUrl = data.thumbnail; // Usa la URL proporcionada en los datos del formulario

      const course = {
        name: data.name,
        description: data.description,
        price: data.price,
        modules: data.modules,
        duration: data.duration,
        videos: data.videos,
        level: data.level,
      };

      if (!params.id) {
        // Sube la imagen solo si es un nuevo curso
        if (file) {
          const formData = new FormData();
          formData.append("file", file);

          const imgResponse = await fetch("/api/upload", {
            method: "POST",
            body: formData,
          });

          if (imgResponse.status === 200) {
            const imgData = await imgResponse.json();
            imageUrl = imgData.url; // Actualiza la URL con la obtenida de Cloudinary
          }
        }

        const courseWithImg = {
          ...course,
          thumbnail: imageUrl,
        };

        const response = await createCourse(courseWithImg);

        if (response.status === 200) {
          setSuccess("Curso creado con éxito!");
          setTimeout(() => {
            setSuccess("");
            router.push("/admin/courses");
          }, 3000);
        }
      } else {
        // Si es una actualización, solo actualiza la información del curso
        const response = await updateCourse(params.id, data);

        if (response.status === 200) {
          setSuccess("Curso actualizado con éxito!");
          setTimeout(() => {
            setSuccess("");
            router.push("/admin/courses");
          }, 3000);
        }
      }
    } catch (error) {
      setError(
        "Ocurrió un error durante la creación. Por favor, inténtalo de nuevo."
      );
      setTimeout(() => {
        setError("");
      }, 3000);
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
      <div className="grid grid-cols-2 grid-rows-1 gap-12 content-center m-auto">
        <div className="p-4 items-center flex flex-col border-r-1 border-gray-500 bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4">
            {params.id ? "Editar el curso" : "Crear un nuevo curso"}
          </h2>
          <form
            className="max-w-md space-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label htmlFor="image">Imagen del curso</label>
              <input
                type="file"
                id="thumbnail"
                className="w-full border border-gray-300 rounded p-2"
                onChange={onChangeHandler}
              />
            </div>
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
              <label htmlFor="videos">Cantidad de videos:</label>
              <input
                id="videos"
                type="number"
                {...register("videos", {
                  required: {
                    value: true,
                    message: "Videos is required",
                  },
                })}
                className="w-full border border-gray-300 rounded p-2"
                defaultValue={data.videos}
              ></input>
              {errors.level && (
                <span className="block text-red-600 text-[15px] font-bold">
                  {(errors.videos as FieldError).message}
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
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              {params.id ? "Editar curso" : "Crear Curso"}
            </button>
          </form>
        </div>
        <div className="flex justify-center">
          <div>
            <section
              id="Projects"
              className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-1 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
            >
              <h2 className="text-2xl font-semibold mb-4">Vista previa</h2>
              <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl cursor-pointer">
                <a>
                  {file && (
                    <img
                      src={URL.createObjectURL(file)}
                      alt="imagen de muestra"
                      className="h-25 w-25 object-cover rounded-t-xl"
                      width={400}
                      height={500}
                    />
                  )}
                  <div className="px-4 py-3 w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">
                      CURSO DE
                    </span>
                    <p className="text-lg font-bold text-black truncate block ">
                      {watchedFields[0]}
                    </p>

                    <div className="flex mt-2 item-center">
                      {generateRating(4)}
                    </div>
                    <div className="flex items-center justify-between ">
                      <p className="text-lg font-semibold text-black cursor-auto my-3">
                        {formattedPrice} ARS
                      </p>
                      <del>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">
                          {formattedOriginalPrice}
                        </p>
                      </del>

                      <div className="ml-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-bag-plus"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                          />
                          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg>
                      </div>
                    </div>
                    <div className="my-1 flex justify-between items-center">
                      <div className="flex space-x-1 items-center">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-indigo-600 mb-1.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </span>
                        <p className="text-sm">{watchedFields[4]}</p>
                      </div>
                      <div className="flex space-x-1 items-center">
                        <span>
                          <MdOndemandVideo className="h-6 w-6 text-indigo-600 mb-1.5" />
                        </span>
                        <p className="text-sm">{watchedFields[5]} Videos</p>
                      </div>
                      <div className="flex space-x-1 items-center">
                        <span>
                          <svg
                            className="h-6 w-6 text-indigo-600 mb-1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#741f7a"
                          >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                            <g
                              id="SVGRepo_tracerCarrier"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />

                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path
                                d="M10.05 2.53004L4.03002 6.46004C2.10002 7.72004 2.10002 10.54 4.03002 11.8L10.05 15.73C11.13 16.44 12.91 16.44 13.99 15.73L19.98 11.8C21.9 10.54 21.9 7.73004 19.98 6.47004L13.99 2.54004C12.91 1.82004 11.13 1.82004 10.05 2.53004Z"
                                stroke="#4f46e5"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />{" "}
                              <path
                                d="M5.63 13.08L5.62 17.77C5.62 19.04 6.6 20.4 7.8 20.8L10.99 21.86C11.54 22.04 12.45 22.04 13.01 21.86L16.2 20.8C17.4 20.4 18.38 19.04 18.38 17.77V13.13"
                                stroke="#4f46e5"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />{" "}
                              <path
                                d="M21.4 15V9"
                                stroke="#4f46e5"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />{" "}
                            </g>
                          </svg>
                        </span>
                        <p className="text-sm"> {watchedFields[6]}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
