"use client";

import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/Header";
import { NotificationProvider } from "../context/NotificationContext";
import { CartProvider } from "../context/CartContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import Footer from "@/components/sections/Footer";
import Head from "next/head";

const poppins = Poppins({
  weight: ["300", "400", "600", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <Head>
        <title>Furniture</title>
        <meta
          name="description"
          content="An online marketplace where you can browse a wide variety of high-quality furniture items to enhance their living spaces."
        />
      </Head>
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
