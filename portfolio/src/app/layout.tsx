import { Antic_Slab } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";

const anticSlab = Antic_Slab({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anticSlab.className} antialiased`}
      >
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
