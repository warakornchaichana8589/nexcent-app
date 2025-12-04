import type { Metadata } from "next";
import "./globals.css";
import AOSProvider from "./AOSProvider";
export const metadata: Metadata = {
  title: "Nexcent App",
  description: "Lessons and insights from 8 years of building digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.svg" type="image/png" />
      </head>
      <body
      >
        <AOSProvider />
        {children}
      </body>
    </html>
  );
}
