import type { Metadata } from "next";
import { geistMono } from "@/app/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nishil Anand",
  description: "Personal website of Nishil Anand",
  keywords: ["Nishil Anand", "Nishil", "Anand", "nishilanand", "nishoof"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Nishil Anand",
            "url": "https://nishilanand.com",
          })}
        </script>
      </head>
      <body className={`${geistMono.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
