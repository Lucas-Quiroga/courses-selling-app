import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <div>Pagina no encontrada</div>
      <Link href="/">Volver</Link>
    </div>
  );
};

export default NotFound;
