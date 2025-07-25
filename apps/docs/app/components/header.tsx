"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b bg-yellow-300">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="text-2xl font-light text-black">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            LÉA LEDUCQ
          </motion.div>
        </Link>
        <nav>
          <Link href="/about" className="text-lg font-light text-black">
            ABOUT
          </Link>
        </nav>
      </div>
    </header>
  );
}
