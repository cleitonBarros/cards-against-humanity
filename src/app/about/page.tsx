/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <nao precisa> */
'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="min-h-screen bg-background py-20" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6 font-bold text-4xl text-foreground sm:text-5xl md:text-6xl">
            Sobre o Jogo
          </h2>
          <p className="mx-auto max-w-3xl text-muted-foreground text-xl md:text-2xl">
            Este jogo é inspirado no já existente "Cartas Contra a Humanidade", mas não possui nenhuma ligação oficial com ele. Trata-se apenas de uma versão feita de fã para fã, assim como muitos outros jogos físicos que gostamos de jogar para passar o tempo — agora disponível online.
          </p>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
