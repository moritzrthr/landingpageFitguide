import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export default function FAQs() {
  const [activeItem, setActiveItem] = useState<string | null>(null)

  const faqItems = [
    {
      question: "Will this app annoy me?",
      answer: "No, only if you want it to. We motivate, not bombard.",
      color: "bg-gradient-to-r from-purple-400 to-pink-500",
    },
    {
      question: "What makes this app different?",
      answer: "We understand you – and make health simple.",
      color: "bg-gradient-to-r from-green-400 to-blue-500",
    },
    {
      question: "Is this app suitable for all fitness levels?",
      answer:
        "Absolutely. Whether you're a beginner or a fitness enthusiast, the assistant adapts to your pace and needs, starting with small, achievable steps.",
      color: "bg-gradient-to-r from-yellow-400 to-orange-500",
    },
    {
      question: "How does Fitguide create personalized plans?",
      answer:
        "Fitguide uses advanced AI and behavioral science to analyze your goals, preferences, and lifestyle. It then creates a tailored plan that fits seamlessly into your daily routine.",
      color: "bg-gradient-to-r from-red-400 to-pink-500",
    },
    {
      question: "Can I try it for free?",
      answer: "Yes! We offer a free trial so you can explore the app and see how it fits into your daily routine.",
      color: "bg-gradient-to-r from-indigo-400 to-purple-500",
    },
    {
      question: "How is my data protected?",
      answer:
        "We prioritize your privacy and comply with GDPR standards. All your data is encrypted and used solely to enhance your experience.",
      color: "bg-gradient-to-r from-blue-400 to-teal-500",
    },
  ]

  const handleEmailClick = () => {
    window.location.href = "mailto:fitguide@thamori.com?subject=Question%20about%20Fitguide"
  }

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Curious Minds Want to Know</h2>
        <Accordion type="single" collapsible value={activeItem} onValueChange={setActiveItem}>
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className={`mb-4 rounded-lg overflow-hidden transition-all duration-300 ${activeItem === `item-${index + 1}` ? item.color : "bg-gray-800"}`}
            >
              <AccordionTrigger className="px-6 py-4 text-lg font-semibold hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-opacity-90 backdrop-filter backdrop-blur-lg">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-12 text-center">
          <Button
            onClick={handleEmailClick}
            className="bg-white text-gray-900 hover:bg-gray-200 transition-colors duration-300"
          >
            <Mail className="mr-2 h-4 w-4" /> Didn't find what you're looking for? Ask us!
          </Button>
        </div>
      </div>
    </section>
  )
}

