import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Simona × Muskan — Creative Management & Brand Strategy",
  description: "A bespoke creative direction, styling & brand partnership pitch for Muskan by Simona Dhamija.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${playfair.variable} ${inter.variable} ${jakarta.variable}`}
    >
      <body className="min-h-full antialiased selection:bg-[#B51A1A] selection:text-white">
        {children}
      </body>
    </html>
  );
}
