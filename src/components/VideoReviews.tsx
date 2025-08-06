import { Play, Star } from "lucide-react";
import { useRef } from "react";

interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  thumbnail: string;
  duration: string;
  quote: string;
}

const reviews: Review[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Software Engineer",
    company: "Google",
    rating: 5,
    thumbnail: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    duration: "2:45",
    quote: "Interview Pal helped me land my dream job at Google. The AI feedback was incredibly accurate."
  },
  {
    id: "2", 
    name: "Marcus Rodriguez",
    role: "Product Manager",
    company: "Meta",
    rating: 5,
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    duration: "3:12",
    quote: "The voice analysis feature completely changed how I approach interviews. Game changer!"
  },
  {
    id: "3",
    name: "Emily Watson",
    role: "UX Designer", 
    company: "Apple",
    rating: 5,
    thumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    duration: "2:28",
    quote: "I was so nervous about interviews. Interview Pal gave me the confidence I needed."
  },
  {
    id: "4",
    name: "David Kim",
    role: "Data Scientist",
    company: "Netflix",
    rating: 5,
    thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    duration: "4:01",
    quote: "The industry-specific questions were exactly what I faced in my actual interviews."
  },
  {
    id: "5",
    name: "Rachel Thompson",
    role: "Marketing Manager",
    company: "Spotify",
    rating: 5,
    thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    duration: "3:33",
    quote: "Interview Pal's feedback helped me improve my storytelling and presentation skills."
  },
  {
    id: "6",
    name: "Alex Johnson",
    role: "DevOps Engineer",
    company: "Amazon",
    rating: 5,
    thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    duration: "2:56",
    quote: "The real-time coaching during practice sessions was like having a personal interview coach."
  }
];

const VideoReviews = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // Width of one card plus gap
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">Real success stories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from candidates who transformed their interview skills and landed their dream jobs
          </p>
        </div>

        {/* Scrollable video reviews */}
        <div className="relative max-w-7xl mx-auto">
          {/* Scroll buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-background/95 backdrop-blur-sm border border-border rounded-full flex items-center justify-center shadow-soft-lg hover:bg-muted/50 transition-colors"
          >
            <span className="sr-only">Scroll left</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-background/95 backdrop-blur-sm border border-border rounded-full flex items-center justify-center shadow-soft-lg hover:bg-muted/50 transition-colors"
          >
            <span className="sr-only">Scroll right</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review) => (
              <div key={review.id} className="flex-none w-80">
                <div className="bg-gradient-card rounded-2xl overflow-hidden shadow-soft-lg border border-border group hover:shadow-soft-xl transition-all duration-300">
                  {/* Video thumbnail */}
                  <div className="relative aspect-video bg-muted/20">
                    <img
                      src={review.thumbnail}
                      alt={`${review.name} video review`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-soft-lg cursor-pointer">
                        <Play className="w-6 h-6 text-primary-foreground ml-1" />
                      </div>
                    </div>
                    
                    {/* Duration */}
                    <div className="absolute bottom-3 right-3 bg-black/80 text-white text-sm px-2 py-1 rounded">
                      {review.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={review.thumbnail}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{review.name}</h4>
                        <p className="text-sm text-muted-foreground">{review.role} at {review.company}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    
                    <blockquote className="text-muted-foreground italic leading-relaxed">
                      "{review.quote}"
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA below reviews */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Ready to join thousands of successful candidates?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="text-primary hover:text-primary/80 transition-colors font-medium">
              Watch more success stories →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoReviews;