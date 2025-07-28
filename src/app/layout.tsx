import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harmoniq - Learn Music Online",
  description: "A platform to learn music online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactElement;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <div className="relative w-full flex items-center justify-center ">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
