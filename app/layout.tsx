import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import { checkUser } from "@/lib/checkUser";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sleep Tracker",
  description: "A sleep tracking app using next.js",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  await checkUser();

  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
        <body className="antialiased bg-background text-foreground">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar /> {/* no more props */}
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}