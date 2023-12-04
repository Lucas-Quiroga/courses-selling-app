"use client";
import React, { useState } from "react";

const Faqs = () => {
  const questions = [
    {
      question: "How can I pay for my appointment?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.",
    },
    {
      question: "What can I expect at my first consultation?",
      answer: "Answer for the second question goes here.",
    },
    {
      question: "What are your opening hours?",
      answer: "Answer for the third question goes here.",
    },
    {
      question: "Do I need a referral?",
      answer: "Answer for the fourth question goes here.",
    },
    {
      question:
        "Is the cost of the appointment covered by private health insurance?",
      answer: "Answer for the fifth question goes here.",
    },
  ];

  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const handleQuestionToggle = (index: any) => {
    setExpandedQuestion((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <section className="bg-white ">
      <div className="container px-6 py-12 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl ">
          Preguntas Frecuentes
        </h1>

        <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
          <div className="lg:mx-12">
            <h1 className="text-xl font-semibold text-gray-800 ">Índice</h1>

            <div className="mt-4 space-y-4 lg:mt-8">
              <a href="#" className="block text-blue-500  hover:underline">
                General
              </a>
              <a href="#" className="block text-gray-500  hover:underline">
                Confianza y prevención
              </a>
              <a href="#" className="block text-gray-500  hover:underline">
                Servicios
              </a>
            </div>
          </div>

          <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
            {questions.map((q, index) => (
              <div
                key={index}
                className="overflow-hidden transition-max-height duration-300 ease-in-out"
              >
                <button
                  onClick={() => handleQuestionToggle(index)}
                  className="flex items-center focus:outline-none"
                >
                  <svg
                    className={`flex-shrink-0 w-6 h-6 ${
                      expandedQuestion === index
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
                        expandedQuestion === index
                          ? "M6 18L18 6M6 6l12 12"
                          : "M20 12H4"
                      }
                    ></path>
                  </svg>

                  <h1 className="mx-4 text-xl text-gray-700 ">{q.question}</h1>
                </button>

                {expandedQuestion === index && (
                  <div className="flex mt-8 md:mx-10">
                    <span className="border border-blue-500"></span>

                    <p className="max-w-3xl px-4 text-gray-500 ">{q.answer}</p>
                  </div>
                )}

                <hr className="my-8 border-gray-200 " />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
