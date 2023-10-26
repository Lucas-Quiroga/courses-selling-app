import React from "react";
import { getCourseDetail } from "@/coreComponents/helper/apiCalls";
import CardDetails from "@/components/CardDetails";

const Page = async ({ params }: any) => {
  const course = await getCourseDetail(params.id);
  //si muestro course aparece el curso correspondiente
  return <>{course ? <CardDetails course={course} /> : <p>Loading...</p>}</>;
};

export default Page;
