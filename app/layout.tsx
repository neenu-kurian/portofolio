import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Portfolio|Neenu Kurian",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Header />
        </header>
        <main className="pt-16 md:pt-20">
          {children}
        </main>
        <footer></footer>
      </body>
    </html>
  );
}
