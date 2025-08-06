import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer at Google",
      content: "Interview Pal helped me go from stumbling through technical questions to confidently explaining my thought process. The AI feedback was spot-on.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Product Manager at Meta", 
      content: "The voice practice was a game-changer. I could practice anywhere, anytime. Landed my PM role after just a week of daily sessions.",
      rating: 5
    },
    {
      name: "Emily Johnson",
      role: "Marketing Director at Spotify",
      content: "Finally, an interview prep tool that doesn't feel robotic. The conversations felt natural, and the feedback was actually helpful.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="mb-4">
            Real people, real results
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what people are saying about their Interview Pal experience.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-soft-md hover:shadow-soft-lg transition-all duration-300 bg-gradient-card">
              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-20 text-center">
          <p className="text-sm text-muted-foreground mb-8">
            Trusted by job seekers at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-muted-foreground">Google</div>
            <div className="text-2xl font-bold text-muted-foreground">Meta</div>
            <div className="text-2xl font-bold text-muted-foreground">Apple</div>
            <div className="text-2xl font-bold text-muted-foreground">Netflix</div>
            <div className="text-2xl font-bold text-muted-foreground">Spotify</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;