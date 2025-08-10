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
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Trusted by thousands</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from people who landed their dream jobs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card hover:shadow-soft-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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