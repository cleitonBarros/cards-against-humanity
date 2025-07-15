/** biome-ignore-all lint/suspicious/noArrayIndexKey: <nao precisa de preocpar com esse index> */
"use client"

import { motion } from "framer-motion"

export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden bg-background py-16">
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-transparent to-background" />
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        className="flex whitespace-nowrap"
        transition={{ repeat: Number.POSITIVE_INFINITY, ease: "linear", duration: 20 }}
      >
        {[...new Array(4)].map((_, index) => (
          <div className="mx-4 flex items-center"  key={index} >
            <span
              className="px-4 font-bold text-7xl text-transparent sm:text-8xl md:text-9xl"
              style={{
                WebkitTextStroke: "1px rgb(156 163 175)", // tailwind gray-400
              }}
            >
             Cartas Contra Humanidade
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
