import type { Metadata } from "next";
import "./globals.css";
import {
  Footer,
  Header,
  HeaderMobile,
  SideNav,
  PageWrapper,
  MarginWidthWrapper,
} from "@/components";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
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
          <AuthProvider>
            <Provider>
              <CartProvider>
                <div>
                  <SideNav />
                  <main className="flex-1">
                    <MarginWidthWrapper>
                      <Header />
                      <HeaderMobile />
                      <PageWrapper>{children}</PageWrapper>
                    </MarginWidthWrapper>
                  </main>
                </div>
              </CartProvider>
            </Provider>
            <Footer />
            <ScrollToTopButton />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
