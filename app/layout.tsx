import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/Navbar";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Converso",
  description: "Real-time AI Teaching Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} antialiased bg-transparent min-h-screen flex flex-col `}
      >
        <div className="grid-background" />
        <ClerkProvider appearance={{ variables: { colorPrimary: "#fe5933" } }}>
          <Navbar />
          {children}
          <footer className="bg-muted/50 py-12">
            <div className="container mx-auto px-4 text-center text-black">
              <p>Built with 🧠 & 💙 by Sayantan</p>
            </div>
          </footer>
        </ClerkProvider>
      </body>
    </html>
  );
}
