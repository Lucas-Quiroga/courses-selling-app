import React, { Suspense } from "react";
import { getCourseDetail } from "@/coreComponents/helper/apiCalls";
import CardDetails from "@/components/CardDetails";
import Courses from "@/app/Courses/page";

const Page = async ({ params }: any) => {
  const course = await getCourseDetail(params.id);

  //si muestro course aparece el curso correspondiente
  return (
    <>
      {course && (
        <>
          <CardDetails course={course} />
          <hr />
          <h5>Otros cursos relacionados</h5>
          <Suspense fallback={<p>Loading...</p>}>
            <Courses />
          </Suspense>
        </>
      )}
    </>
  );
};

export default Page;
