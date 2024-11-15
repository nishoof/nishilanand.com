import type { Metadata } from "next";
import { geistMono } from '@/app/fonts';
import "./globals.css";

export const metadata: Metadata = {
  title: "Nishil Anand",
  description: "Personal website of Nishil Anand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
