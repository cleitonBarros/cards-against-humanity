/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';


export const MatchCard = () => {

  return (
    <div className="transform-3d mt-16 flex w-full justify-center">
      <motion.div
        animate={{ rotateY: 300 }}
        className="h-[350px] w-[250px]"
        initial={{ rotateZ: 10 }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 5,
          ease: "linear",
        }}
        whileHover={{
          rotateY: 0,
          transition: { duration: 0.1 },
        }}

      >
        <Card className="flex h-full w-full items-center justify-center rounded-2xl border-2 border-black bg-white p-4 text-center shadow-xl" style={{
          backfaceVisibility: "hidden",
          transform: "rotateY(0deg)",
        }}>
          {/* Face Frontal */}
          <CardContent>
            <p
              className="font-medium text-base "
            >
              Inicie a partida a qualquer momento.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};
