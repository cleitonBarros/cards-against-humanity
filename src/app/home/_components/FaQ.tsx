/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
"use client"
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

export default function FaQ() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-16" id="faq">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <motion.div
          className="mb-12 flex flex-col items-center justify-center space-y-4 text-center"
        >
          <Badge
            className="rounded-full px-4 py-1.5 font-medium text-sm"
            variant="secondary"
          >
            FAQ
          </Badge>
          <h2 className="font-bold text-3xl tracking-tight md:text-5xl">
            Perguntas Frequentes
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Encontre resposta para perguntas comum em nossa plataforma
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <Accordion className="w-full" collapsible type="single"  >
            {[
              {
                question: 'Esse jogo é para toda a família?',
                answer:
                  'Claro! Se sua família curte humor sombrio, piadas politicamente incorretas e a sensação constante de arrependimento... é perfeito para o almoço de domingo!',
              },
              {
                question: 'Onde posso jogar este jogo?',
                answer:
                  'Em navegadores, tanto desktop quanto mobile.',
              },
              {
                question: 'Qual idade adeguada para jogar?',
                answer:
                  'Nosso jogo contem linguagem nao recomendada para criancas, logo focado para publico adulto.',
              },
              {
                question:
                  'Como Jogar ?',
                answer:
                  'Acesse ao tutorial para ver a regas e como jogar, ademais e um jogo bem simples.',
              },
              {
                question: 'Com quem devo jogar ?',
                answer:
                  'Recomendamos  jogar com amigos que possuem o mesmo humor quebrado que voce',
              },
            ].map((faq, i) => (
              // biome-ignore assist/source/useSortedAttributes: <nao precisa>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                key={i}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <AccordionItem
                  className="border-border/40 border-b py-2"
                  value={`item-${i}`}
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
