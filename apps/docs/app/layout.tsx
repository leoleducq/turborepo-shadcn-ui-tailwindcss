import "@ui/styles/globals.css";
import type { Metadata } from "next";
import { Baloo_2 } from "next/font/google";
import Header from "./components/header";
import { ThemeProvider } from "./components/theme-provider";

const baloo2 = Baloo_2({ subsets: ["latin"], weight: ["700"] });

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
    <html lang="fr">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <body className={baloo2.className}>
          <div className="min-h-screen bg-background text-foreground relative">
            <Header />
            <main>{children}</main>
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
