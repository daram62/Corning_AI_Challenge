import { Inter } from "next/font/google";
import "./globals.css";
import Warnings from "./components/warnings";
import { assistantId } from "./assistant-config";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Corning Challenge",
  description: "Corning HR Helper ChatBot",
  icons: {
    icon: "/Corning.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {assistantId ? children : <Warnings />}
        <img className="logo" src="/corning.svg" alt="Corning Logo" />
      </body>
    </html>
  );
}