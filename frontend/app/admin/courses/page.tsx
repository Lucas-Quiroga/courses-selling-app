import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="p-6">
      <Link href="/admin/create">
        <button>New course</button>
      </Link>
    </div>
  );
};

export default page;
