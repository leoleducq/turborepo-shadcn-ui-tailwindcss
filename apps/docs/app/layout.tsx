import "@ui/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/header";
import { ThemeProvider } from "./components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Léa Leducq",
  description: "Portfolio de Léa Leducq",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <body className={inter.className}>
          <div className="min-h-screen bg-background text-foreground relative">
            <Header />
            <main className="pt-8">{children}</main>
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
