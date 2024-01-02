"use client";
import React, { useState } from "react";
import frequentQuestions from "@/json/Faqs.json";

const Faqs = () => {
  const [expandedQuestions, setExpandedQuestions] = useState(
    frequentQuestions.map(() => null)
  );

  const handleQuestionToggle = (groupIndex: any, questionIndex: any) => {
    setExpandedQuestions((prevExpanded) =>
      prevExpanded.map((value, index) =>
        index === groupIndex ? questionIndex : null
      )
    );
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900 relative">
        <div className="container px-6 py-12 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">
            Consultas habituales
          </h1>

          <hr className="my-6 border-gray-200 dark:border-gray-700" />

          <div className="mt-8 space-y-8 lg:mt-12">
            {frequentQuestions.map((faqGroup, groupIndex) => (
              <div key={groupIndex}>
                {/* TEMA EN GENERAL */}
                <h2 className="text-2xl font-bold mb-4">{faqGroup.indice}</h2>
                {/* MAPEO DE PREGUNTAS Y RESPUESTAS */}
                {faqGroup.preguntas.map((question, questionIndex) => (
                  <div
                    className="flex flex-col mt-5 p-8 bg-gray-100 rounded-lg dark:bg-gray-800"
                    key={`${groupIndex}-${questionIndex}`}
                  >
                    <button
                      className="flex items-center justify-between w-full"
                      onClick={() =>
                        handleQuestionToggle(groupIndex, questionIndex)
                      }
                    >
                      <h1 className="font-semibold text-gray-700 dark:text-white">
                        {question.pregunta}
                      </h1>

                      <span className="text-gray-400 bg-gray-200 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`w-6 h-6 transform transition-transform ${
                            expandedQuestions[groupIndex] === questionIndex
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>
                    {expandedQuestions[groupIndex] === questionIndex && (
                      <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
                        {question.respuesta}
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
