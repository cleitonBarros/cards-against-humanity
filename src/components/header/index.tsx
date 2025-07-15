
'use client';

import { motion } from "framer-motion"
import { Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <motion.header
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      transition={{ duration: 0.6 }}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex ">
          <Link className="p-1.5" href="/" >
            <p className=" text-base text-black lg:text-xl dark:text-white">Cards <strong >Against</strong> Humanity</p>
          </Link>
        </div>
        <div className=" hidden gap-x-12 sm:flex">
          <Link
            className="font-semibold text-foreground text-sm leading-6 transition-colors hover:text-primary"
            href="https://www.flowersandsaints.com.au"
            rel="noopener noreferrer"
            target="_blank"
          >
            Work
          </Link>
          <Link
            className="font-semibold text-foreground text-sm leading-6 transition-colors hover:text-primary"
            href="https://www.flowersandsaints.com.au"
            rel="noopener noreferrer"
            target="_blank"
          >
            About
          </Link>
          <Link
            className="font-semibold text-foreground text-sm leading-6 transition-colors hover:text-primary"
            href="https://www.flowersandsaints.com.au"
            rel="noopener noreferrer"
            target="_blank"
          >
            Contact
          </Link>
        </div>
        <div className="flex justify-end">
          {mounted && (
            <button
              className="rounded-full bg-primary/10 p-2 text-primary transition-colors hover:bg-primary/20"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              type='button'
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          )}
        </div>
      </nav>
    </motion.header>
  );
}
