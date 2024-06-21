"use client";

import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/Header";
import { NotificationProvider } from "../context/NotificationContext";
import { CartProvider } from "../context/CartContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { metadata } from "./metadata";
import Footer from "@/components/sections/Footer";

const poppins = Poppins({
  weight: ["300", "400", "600", "700", "800"],
  subsets: ["latin"],
});

metadata;

export default function RootLayout({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body className={poppins.className}>
        <QueryClientProvider client={queryClient}>
          <NotificationProvider>
            <CartProvider>
              <Header />
              {children}
              <Footer />
            </CartProvider>
          </NotificationProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
