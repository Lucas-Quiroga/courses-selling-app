import React, { Suspense } from "react";
import { getCourseDetail } from "@/coreComponents/helper/apiCalls";
import CardDetails from "@/components/CardDetails";
import Courses from "@/app/Courses/page";
import { Banner, Aside } from "@/components";

const Page = async ({ params }: any) => {
  const course = await getCourseDetail(params.id);

  //si muestro course aparece el curso correspondiente
  return (
    <div>
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
    </div>
  );
};

export default Page;
