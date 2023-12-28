import { useAuth } from "@/context/AuthContext";
import type { Metadata } from "next";
import "./globals.css";
import { NavbarOrigen, Footer, Aside } from "@/components";
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
      <body className="relative  dark:bg-slate-800">
        <ThemeProvider>
          <Provider>
            <CartProvider>
              <ProvidersAuth>
                <NavbarOrigen />
                <Aside />
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
