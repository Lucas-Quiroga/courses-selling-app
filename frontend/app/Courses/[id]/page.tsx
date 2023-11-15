import React, { Suspense } from "react";
import { getCourseDetail } from "@/coreComponents/helper/apiCalls";
import CardDetails from "@/components/CardDetails";
import Courses from "@/app/Courses/page";
import { Banner } from "@/components";

const Page = async ({ params }: any) => {
  const course = await getCourseDetail(params.id);

  //si muestro course aparece el curso correspondiente
  return (
    <>
      {course && (
        <>
          <CardDetails course={course} />
          <hr />
          <Banner />
          <Suspense fallback={<p>Loading...</p>}>
            <Courses />
          </Suspense>
        </>
      )}
    </>
  );
};

export default Page;
