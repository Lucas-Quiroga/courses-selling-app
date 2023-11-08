import React from "react";
import { LoginUser, ViewHomeForm } from "@/components";
//
const page = () => {
  return (
    // <div className="flex justify-center items-center h-[90vh]">
    //   <div className="w-80 rounded-2xl bg-slate-900">
    //     <div className="flex flex-col gap-2 p-8">
    //       <div className="relative left-0 right-0 w-full overflow-y-auto md:inset-0 max-h-full bg-gray-900 bg-opacity-75">
    //         <div className="relative w-full max-w-md max-h-full m-auto">
    //           <div className="relative rounded-lg shadow dark-bg-gray-700">
    //             <LoginUser />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <ViewHomeForm />
  );
};

export default page;
