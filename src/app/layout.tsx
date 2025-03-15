import type { Metadata } from "next";
import "./globals.css";
import SideBar from "../components/Sidebar";


export const metadata: Metadata = {
  title: "Nibret CRM",
  description: "CRM for Nibret",
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
          <SideBar />
          {children}
        </section>
      </body>
    </html>
  );
}
