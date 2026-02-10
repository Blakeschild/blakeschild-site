import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata including favicon
export const metadata: Metadata = {
  title: "Blakeschild & Dukes Ltd | Engineering Value, Delivering Excellence",
  description:
    "Blakeschild & Dukes Ltd provides engineering-led procurement and supply services across energy, infrastructure and agriculture.",
  icons: {
    icon: "/favicon.ico?v=2",
    shortcut: "/favicon.ico?v=2",
    apple: "/apple-touch-icon.png?v=2",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <footer className="text-center py-4 text-sm text-gray-500">
          &copy; 2026 Blakeschild & Dukes Ltd. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
