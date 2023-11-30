import { useAuth } from "@/context/AuthContext";
import type { Metadata } from "next";
import "./globals.css";
import { NavbarOrigen, Footer } from "@/components";
import ProvidersAuth from "./ProvidersAuth";
import { CartProvider } from "@/context/CartContext";

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
        <CartProvider>
          <ProvidersAuth>
            <NavbarOrigen />
            {children}
          </ProvidersAuth>
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
