import React from "react";
import { getCourseDetail } from "@/coreComponents/helper/apiCalls";
import CardDetails from "@/components/CardDetails";

interface CardDetailsProps {
  _id: number;
  name: string;
  description: string;
  price: string | number;
}

const Page = async ({ params }: any) => {
  const course = await getCourseDetail(params.id);
  //si muestro course aparece el curso correspondiente
  return (
    <>
      {course.map((e: CardDetailsProps, index: any) => (
        <CardDetails key={index} {...e} />
      ))}
    </>
  );
};

export default Page;
