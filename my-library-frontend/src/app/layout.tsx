import "./globals.css";
import { Inter } from "next/font/google";
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
  return (
    <html lang="en">
    <body className="bg-gray-100 font-serif">
      <header className="bg-amber-400 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Online Library</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 mt-2 mr-2 bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-md"
            >
              Search
            </button>
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
