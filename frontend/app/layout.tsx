import { useAuth } from "@/context/AuthContext";
import type { Metadata } from "next";
import "./globals.css";
import { NavbarOrigen, Footer } from "@/components";
import ProvidersAuth from "./ProvidersAuth";
import { CartProvider } from "@/context/CartContext";
import Provider from "@/context/ProgressBarContext";
import ScrollToTopButton from "@/coreComponents/ScrollUp";
import { ThemeProvider } from "@/context/ThemeContext";

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
        <ThemeProvider>
          <Provider>
            <CartProvider>
              <ProvidersAuth>
                <NavbarOrigen />
                {children}
              </ProvidersAuth>
            </CartProvider>
          </Provider>
          <Footer />
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
