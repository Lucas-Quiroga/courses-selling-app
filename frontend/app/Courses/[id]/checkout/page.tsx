import React from "react";
import { CheckOut } from "@/components";

const page = ({ params }: any) => {
  return <CheckOut idCourse={params.id} />;
};

export default page;
