/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <nao precisa> */
'use client';

import { motion } from 'framer-motion';

export default function Tutorial() {
  return (
    <section className="min-h-screen bg-background py-20">
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
        </motion.div>
      </div>
    </section>
  );
}
