import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free Trial",
      price: "FREE",
      duration: "5 minutes",
      description: "Perfect for getting started",
      features: [
        "1 interview session",
        "Basic feedback",
        "Voice recognition",
        "Simple questions"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Per Interview",
      price: "₹199",
      duration: "20 minutes",
      description: "Pay as you practice",
      features: [
        "Full interview session",
        "Detailed feedback",
        "Advanced voice recognition",
        "Industry-specific questions",
        "Performance analytics"
      ],
      popular: true,
      cta: "Buy Now"
    },
    {
      name: "Practice Pack",
      price: "₹899",
      duration: "5 interviews × 20 mins",
      description: "Best value for serious preparation",
      features: [
        "5 full interview sessions",
        "Comprehensive feedback",
        "Progress tracking",
        "All question categories",
        "Priority support",
        "Performance insights"
      ],
      popular: false,
      cta: "Get Pack"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-foreground mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your interview preparation needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-300 hover:shadow-lg ${
                plan.popular 
                  ? 'border-primary shadow-md scale-105' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {plan.popular && (
                <Badge 
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground"
                >
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-foreground">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">
                    {plan.price}
                  </span>
                  <CardDescription className="mt-2 text-base">
                    {plan.duration}
                  </CardDescription>
                </div>
                <p className="text-muted-foreground mt-2">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-success flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full font-medium ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90' 
                      : 'variant-outline'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include SSL encryption and secure payment processing
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;