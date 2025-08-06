import { Card, CardContent } from "@/components/ui/card";
import voiceIcon from "@/assets/voice-icon.jpg";
import feedbackIcon from "@/assets/feedback-icon.jpg";
import practiceIcon from "@/assets/practice-icon.jpg";

const Features = () => {
  const features = [
    {
      icon: voiceIcon,
      title: "Voice-first practice",
      description: "Practice like a real interview. Our AI listens, responds, and adapts to your speaking style in real-time."
    },
    {
      icon: feedbackIcon,
      title: "Instant feedback",
      description: "Get detailed analysis on your answers, body language cues, and speaking patterns within seconds."
    },
    {
      icon: practiceIcon,
      title: "Personalized prep",
      description: "Custom question sets based on your industry, role, and experience level. Practice what matters most."
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="mb-4">
            Everything you need to
            <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">ace your interviews</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Practice with purpose. Our AI coach gives you the tools to turn interview anxiety into interview confidence.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-soft-md hover:shadow-soft-lg transition-all duration-300 bg-gradient-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary-soft flex items-center justify-center">
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="w-8 h-8 object-contain opacity-80"
                  />
                </div>
                <h3 className="mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">92%</div>
            <div className="text-muted-foreground">Success rate</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">15min</div>
            <div className="text-muted-foreground">Average session</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-success mb-2">10k+</div>
            <div className="text-muted-foreground">Active users</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.9★</div>
            <div className="text-muted-foreground">User rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;