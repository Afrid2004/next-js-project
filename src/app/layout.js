import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Next App",
    template: "%s | Next App",
  },
  keywords: ["Next JS", "React JS", "Web Design", "JavaScript"],
  description: "Design and developed by MD Faisal Yousuf Afrid",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${roboto.className}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
