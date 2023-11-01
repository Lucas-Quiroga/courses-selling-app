import { useAuth } from "@/context/AuthContext";
import type { Metadata } from "next";
import "./globals.css";
import { NavbarUser, Navbar, Footer } from "@/components";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "Couses selling",
  description: "Paula tarot courses",
  keywords: "Tarot, course, learning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="relative">
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
        <Footer />
      </body>
    </html>
  );
}
