import type { Metadata } from "next";
import { Anton, Be_Vietnam_Pro, Space_Grotesk } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
});

const beVietnam = Be_Vietnam_Pro({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-be-vietnam",
});

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "SIGI | Feel The Fire",
  description:
    "Premium African Craft Food - Hot Chilli Paste with Tamarind. Crafted to remember. Made to burn.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`dark ${anton.variable} ${beVietnam.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        {/* Material Symbols — for icons used in code.html */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
