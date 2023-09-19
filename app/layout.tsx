import "./globals.css";
import type { Metadata } from "next";

import Navbar from "./components/Navbar";
import MyProfilePic from "./components/MyProfilePic";

export const metadata: Metadata = {
  title: "Sina's Blog",
  description: "Created by Sina Haghshenas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800 min-h-screen min-w-screen">
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
