import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
interface VideoTestimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  thumbnail: string;
  duration: string;
  takeaway: string;
}
const AceTestimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const testimonials: VideoTestimonial[] = [{
    id: 1,
    name: "Sarah Chen",
    role: "PM",
    company: "Google",
    rating: 5,
    thumbnail: "/placeholder.svg",
    duration: "2:15",
    takeaway: "Went from 0 to 3 final rounds in tech"
  }, {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Consultant",
    company: "McKinsey",
    rating: 5,
    thumbnail: "/placeholder.svg",
    duration: "1:45",
    takeaway: "Nailed the case study framework"
  }, {
    id: 3,
    name: "Emily Johnson",
    role: "MBA",
    company: "Wharton → Tesla",
    rating: 5,
    thumbnail: "/placeholder.svg",
    duration: "3:20",
    takeaway: "Confidence boost changed everything"
  }, {
    id: 4,
    name: "David Kim",
    role: "PM",
    company: "Meta",
    rating: 5,
    thumbnail: "/placeholder.svg",
    duration: "2:30",
    takeaway: "Mastered product sense questions"
  }];
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  return <section id="testimonials" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-6 font-manrope">From practice to job offers</h2>
          
        </div>

        {/* Carousel Container */}
        <div className="relative mb-12">
          {/* Navigation Buttons */}
          <Button variant="outline" size="icon" className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm" onClick={() => scroll('left')}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button variant="outline" size="icon" className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm" onClick={() => scroll('right')}>
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Scrollable Container */}
          <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide px-12" style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>
            {testimonials.map(testimonial => <Card key={testimonial.id} className="flex-shrink-0 w-80 bg-card hover:shadow-soft-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  {/* Video Thumbnail */}
                  <div className="relative mb-4 rounded-lg overflow-hidden bg-muted aspect-video group-hover:scale-105 transition-transform">
                    <img src={testimonial.thumbnail} alt={`${testimonial.name} testimonial`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="h-6 w-6 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {testimonial.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-3">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
                  </div>

                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => <span key={i} className="text-yellow-400">⭐</span>)}
                  </div>

                  <p className="text-sm text-muted-foreground italic">
                    "{testimonial.takeaway}"
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="text-lg px-8 py-4">
            See more reviews
          </Button>
        </div>
      </div>
    </section>;
};
export default AceTestimonials;