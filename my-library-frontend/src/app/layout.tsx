import "./globals.css";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Library",
  description: "A simple library system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const storage = cookies();

  return (
    <html lang="en">
      <body className="bg-gray-100 font-serif">
        <header className="bg-amber-400 py-4">
          <div className="container mx-auto flex items-center justify-between">
            <div className="container mx-auto flex items-center justify-center">
              <div className="text-white text-xl font-bold">Online Library</div>
            </div>
          </div>
        </header>
        {children}
        <footer className="bg-amber-600 py-4 text-center text-white">
          &copy; {new Date().getFullYear()} Online Library
        </footer>
      </body>
    </html>
  );
}
