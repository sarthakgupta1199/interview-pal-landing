import { Card, CardContent } from "@/components/ui/card";
const Testimonials = () => {
  const testimonials = [{
    name: "Sarah Chen",
    role: "Software Engineer at Google",
    content: "Interview Pal helped me go from stumbling through technical questions to confidently explaining my thought process. The AI feedback was spot-on.",
    rating: 5
  }, {
    name: "Marcus Rodriguez",
    role: "Product Manager at Meta",
    content: "The voice practice was a game-changer. I could practice anywhere, anytime. Landed my PM role after just a week of daily sessions.",
    rating: 5
  }, {
    name: "Emily Johnson",
    role: "Marketing Director at Spotify",
    content: "Finally, an interview prep tool that doesn't feel robotic. The conversations felt natural, and the feedback was actually helpful.",
    rating: 5
  }];
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-muted-foreground mb-4">Trusted by job seekers at top companies</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent">⭐</span>
                  ))}
                </div>
                <blockquote className="text-foreground mb-4">
                  "{testimonial.content}"
                </blockquote>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;