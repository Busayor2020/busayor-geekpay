import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import SideNav from "@/components/shared/SideNav";
import { ThemeProvider } from "@/components/shared/ThemeProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <div className="flex absolute w-full">
            <Navbar />
          </div>
          <div className="flex min-h-screen">
            <SideNav />
            <div className="pt-24 w-full h-screen overflow-hidden overflow-y-auto no-scrollbar">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}