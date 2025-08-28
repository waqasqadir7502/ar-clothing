import type { Metadata } from "next";
import { Inter ,  } from "next/font/google";
import "./globals.css";
// import Navbar from "../components/navbar/Navbar";
import { Navbar } from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import { CartProvider } from "../components/cart/cart-context";
import { cookies } from "next/headers";
import { getCart } from "../lib/shopify";
// import Footer from "../components/footer/Footer";
const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AR Designer",
  description: "AR Designer - Your Fashion Destination",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies()
  const cartId = cookieStore.get("cartId")?.value;
  const cart = getCart(cartId);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider cartPromise={cart}>
        <Navbar />
        {children}
        <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
