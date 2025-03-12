import type { Metadata } from "next";
import "./globals.css";
import SideBar from "../components/Sidebar";
import NavBar from "../components/NavBar";

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
      <body className={` antialiased`}>
        <section className="bg-gray-50 dark:bg-gray-900">
          <NavBar />
          <SideBar />
          {children}
        </section>
      </body>
    </html>
  );
}
