import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Superflat",
  description: "The CTF team Superflat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="superflat-logo-round.svg" />
      </head>

      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
