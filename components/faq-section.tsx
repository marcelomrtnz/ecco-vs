import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { JsonLd } from '@/components/json-ld'
import { generateFAQPageLD } from '@/lib/seo-utils'
import type { FAQ } from '@/data/carreras'

interface FAQSectionProps {
  faqs: FAQ[]
  title?: string
}

export function FAQSection({
  faqs,
  title = 'Preguntas Frecuentes',
}: FAQSectionProps) {
  if (faqs.length === 0) return null

  return (
    <section className="flex flex-col gap-6">
      <JsonLd data={generateFAQPageLD(faqs)} />
      <h2 className="text-2xl font-bold text-foreground md:text-3xl">
        {title}
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="text-left text-base font-medium text-foreground">
              {faq.pregunta}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {faq.respuesta}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
