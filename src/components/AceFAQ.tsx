import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AceFAQ = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "How real does the interview feel?",
      answer: "Incredibly real. Our AI interviewer has been trained on thousands of real interview scenarios and will push back on weak answers, ask challenging follow-ups, and adapt to your responses just like a real hiring manager would."
    },
    {
      question: "Which roles are supported?",
      answer: "We support Product Manager, Consulting, and MBA track interviews. Each role has specialized question banks and evaluation criteria tailored to what top companies actually look for."
    },
    {
      question: "What happens after a mock?",
      answer: "You get an instant, detailed evaluation report with your overall score, breakdown by key competencies, specific quotes from your answers, and actionable recommendations for improvement. Plus speech analysis and body language insights."
    },
    {
      question: "Do I need to book a slot?",
      answer: "Absolutely not. That's the whole point - no calendars, no scheduling conflicts, no waiting. Start practicing the moment you feel like it, 24/7."
    },
    {
      question: "Will this help with confidence?",
      answer: "Yes, that's often the biggest transformation our users report. By practicing in a safe environment with immediate feedback, you'll walk into real interviews feeling prepared and confident instead of anxious."
    },
    {
      question: "How many practice sessions do I need?",
      answer: "Most users see significant improvement after 3-5 sessions, but it depends on your starting point and target role. The beauty is you can practice as much as you want without any scheduling constraints."
    }
  ];

  return (
    <section id="faq" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-6 font-manrope">Still curious?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to the most common questions about Ace Interviewer
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.slice(0, 3).map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg border px-6">
                    <AccordionTrigger className="text-left text-base font-normal hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.slice(3).map((faq, index) => (
                  <AccordionItem key={index + 3} value={`item-${index + 3}`} className="bg-card rounded-lg border px-6">
                    <AccordionTrigger className="text-left text-base font-normal hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="text-lg px-8 py-4 shadow-soft-lg hover:shadow-soft-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => navigate('/interview')}
            >
              Start practicing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AceFAQ;