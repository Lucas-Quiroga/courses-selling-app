"use client";
import React, { useState } from "react";
import frequentQuestions from "@/json/Faqs.json";

const Faqs = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  // Inicializa selectedCategory con 0 para mostrar el primer índice por defecto
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleCategoryClick = (index: any) => {
    setSelectedCategory((prevIndex) => (prevIndex === index ? null : index));
    setExpandedQuestion(null); // Restablecer preguntas expandidas cuando cambia la categoría
  };

  const handleQuestionToggle = (questionIndex: any) => {
    setExpandedQuestion((prevIndex) =>
      prevIndex === questionIndex ? null : questionIndex
    );
  };

  const [respuestaVisible, setRespuestaVisible] = useState(false);

  const toggleRespuesta = () => {
    setRespuestaVisible(!respuestaVisible);
  };

  return (
    <div>
      <section className="bg-white">
        <div className="container px-6 py-12 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl">
            Preguntas Frecuentes
          </h1>

          <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
            <div className="lg:mx-12">
              <h1 className="text-xl font-semibold text-gray-800">Índice</h1>

              <div className="mt-4 space-y-4 lg:mt-8">
                {frequentQuestions.map((section, index) => (
                  <button
                    key={section.indice}
                    className={`block text-blue-500 hover:underline ${
                      selectedCategory === index ? "font-semibold" : ""
                    }`}
                    onClick={() => handleCategoryClick(index)}
                  >
                    {section.indice}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
              {selectedCategory !== null &&
                frequentQuestions[selectedCategory].preguntas.map(
                  (q, questionIndex) => (
                    <div
                      key={`${frequentQuestions[selectedCategory].indice}-${questionIndex}`}
                      className="overflow-hidden transition-max-height duration-300 ease-in-out"
                    >
                      <button
                        onClick={() => handleQuestionToggle(questionIndex)}
                        className="flex items-center focus:outline-none"
                      >
                        <svg
                          className={`flex-shrink-0 w-6 h-6 ${
                            expandedQuestion === questionIndex
                              ? "text-blue-500"
                              : "text-gray-500"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={
                              expandedQuestion === questionIndex
                                ? "M6 18L18 6M6 6l12 12"
                                : "M20 12H4"
                            }
                          ></path>
                        </svg>

                        <h1 className="mx-4 text-xl text-gray-700">
                          {q.pregunta}
                        </h1>
                      </button>

                      {expandedQuestion === questionIndex && (
                        <div className="flex mt-8 md:mx-10">
                          <span className="border border-blue-500"></span>

                          <p className="max-w-3xl px-4 text-gray-500">anser</p>
                        </div>
                      )}

                      <hr className="my-8 border-gray-200" />
                    </div>
                  )
                )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 relative">
        <div className="container px-6 py-12 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">
            Frequently asked questions
          </h1>

          <div className="mt-8 space-y-8 lg:mt-12">
            {frequentQuestions.map((faqGroup, questionIndex) => (
              <div key={questionIndex}>
                <h2 className="text-2xl font-bold mb-4">{faqGroup.indice}</h2>
                {faqGroup.preguntas.map((question, questionIndex) => (
                  <div
                    className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800"
                    key={`${frequentQuestions[selectedCategory].indice}-${questionIndex}`}
                  >
                    <button
                      className="flex items-center justify-between w-full"
                      onClick={() => handleQuestionToggle(questionIndex)}
                    >
                      <h1 className="font-semibold text-gray-700 dark:text-white">
                        {question.pregunta}
                      </h1>

                      <span className="text-gray-400 bg-gray-200 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M18 12H6"
                          />
                        </svg>
                      </span>
                    </button>
                    {expandedQuestion === questionIndex && (
                      <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Voluptas eaque nobis, fugit odit omnis fugiat
                        deleniti animi ab maxime cum laboriosam recusandae
                        facere dolorum veniam quia pariatur obcaecati illo
                        ducimus?
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faqs;
