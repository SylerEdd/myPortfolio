import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eddie Idersaikhan | Software Engineering Student",
  description:
    "Portfolio website of Enkhbaatar Idersaikhan - Third-year Computer Science student at Griffith College Dublin specializing in Java, Python, and Web Development.",
  keywords: [
    "Software Engineer",
    "Portfolio",
    "Full-Stack Developer",
    "Computer Science",
    "Web Development",
  ],
  icons: { icon: "/favicon.png" },
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
