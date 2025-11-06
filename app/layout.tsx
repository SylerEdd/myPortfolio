import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eddie Idersaikhan | Software Engineering Student",
  description:
    "Portfolio website of Enkhbaatar Idersaikhan - Third-year Computer Science student at Griffith College Dublin specializing in Java, Python, and Web Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
