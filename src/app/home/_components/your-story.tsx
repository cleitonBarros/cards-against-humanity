/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <nao precisa> */
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function YourStory() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6 font-bold text-4xl text-foreground sm:text-5xl md:text-6xl">
            Tutorial
          </h2>
          <p className="mx-auto max-w-3xl text-muted-foreground text-xl md:text-2xl">
            O jogo é uma bagunça hilária! A cada rodada, surge uma pergunta maluca na tela, e cada jogador recebe quatro respostas absurdas, prontinhas pra causar risada (ou constrangimento).
          </p>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link

              className="inline-flex items-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-300 ease-in-out hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
              href="/tutorial"
            >
              Conhecer
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
