"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Button } from "@repo/ui/components/ui/button";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 z-[100] w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Léa Leducq
          </motion.div>
        </Link>
        <nav className="flex items-center space-x-4">
          <Link href="/#projets">
            <Button variant="ghost">Projets</Button>
          </Link>
          <Link href="/#à-propos">
            <Button variant="ghost">À propos</Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </nav>
      </div>
    </header>
  );
}
