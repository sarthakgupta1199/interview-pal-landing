import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Tell us your goal",
      description: "Share the role you're interviewing for and your experience level. We'll customize everything."
    },
    {
      number: "02", 
      title: "Start your session",
      description: "Jump into a realistic mock interview. Our AI adapts to your responses and asks follow-ups."
    },
    {
      number: "03",
      title: "Get instant feedback",
      description: "Receive detailed analysis on your performance with specific tips to improve."
    },
    {
      number: "04",
      title: "Practice until confident",
      description: "Keep practicing with new questions. Track your progress and watch your confidence grow."
    }
  ];

  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="mb-4">
            How it works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From nervous to confident in just a few sessions. Here's how we help you nail your next interview.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="border-0 shadow-soft-md hover:shadow-soft-lg transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-semibold text-lg group-hover:scale-110 transition-transform duration-300">
                        {step.number}
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-3 text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-success-soft px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-success" />
            Ready in under 2 minutes
          </div>
          <h3 className="mb-4">
            Ready to transform your interview game?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join thousands of job seekers who've already boosted their confidence and landed their dream jobs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;