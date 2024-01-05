import React from "react";
import { CheckOut } from "@/components";
import { HowToPurchase } from "@/components";

const page = ({ params }: any) => {
  return (
    <div>
      <HowToPurchase />
      <CheckOut idCourse={params.id} />
    </div>
  );
};

export default page;
