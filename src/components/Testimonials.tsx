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
  return <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => <Card key={index} className="border-0 shadow-soft-md hover:shadow-soft-lg transition-all duration-300 bg-gradient-card">
              
            </Card>)}
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
    </section>;
};
export default Testimonials;