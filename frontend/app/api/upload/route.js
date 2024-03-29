//ruta de imagen
import { NextResponse } from "next/server";
// import { writeFile } from "fs/promises";
// import path from "path";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
  const data = await request.formData();
  const image = data.get("file");

  if (!image) {
    return NextResponse.json("no se ha subido la imagen", { status: 400 });
  }

  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);

  //guardar en public (VERCEL NO TE DEJA, UNA NUBE SI)
  //   const filePath = path.join(process.cwd(), "public", image.name);
  //   await writeFile(filePath, buffer);
  //   const response = await cloudinary.uploader.upload(filePath);

  //devolver desde la nube
  const response = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({}, (err, resul) => {
        if (err) {
          reject(err);
        }
        resolve(resul);
      })
      .end(buffer);
  });
  return NextResponse.json({
    message: "imagen subida",
    url: response.secure_url,
  });
}
