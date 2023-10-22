import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Couses selling",
  description: "Paula tarot courses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="relative">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
