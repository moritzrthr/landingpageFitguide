import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQs() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Got Questions? We've Got Answers</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>How does Fitguide create personalized plans?</AccordionTrigger>
            <AccordionContent>
              Fitguide uses advanced AI and behavioral science to analyze your goals, preferences, and lifestyle. It then creates a tailored plan that fits seamlessly into your daily routine.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is this suitable for people with unique health conditions?</AccordionTrigger>
            <AccordionContent>
              Yes, Fitguide can adapt to various health conditions. However, we always recommend consulting with your healthcare provider before starting any new health regimen.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Can I track my progress over time?</AccordionTrigger>
            <AccordionContent>
              Fitguide provides detailed progress tracking, allowing you to see your improvements over time. You can view your progress through charts, graphs, and personalized insights.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

