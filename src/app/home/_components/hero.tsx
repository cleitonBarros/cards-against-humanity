/** biome-ignore-all assist/source/useSortedAttributes: <nao quero> */
"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MatchCard } from "../../../components/card-rotate"

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <motion.h1
            className="mt-10 font-bold text-4xl text-foreground tracking-tight sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gradient">Cartas Contra a Humanidade</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg text-muted-foreground leading-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            O caos em forma de cartas, um duelo de humor sombrio onde o mais absurdo sempre vence.
          </motion.p>
          <motion.div
            className="mt-10 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="https://www.flowersandsaints.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-300 ease-in-out hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Jogar agora
            </Link>
            <Link
              href="/about"
              target="_blank"
            >
               Mais informaçoes <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="mx-auto mt-16 lg:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            <MatchCard />
          </div>
        </motion.div>
      </div>
    </div>
  )
}