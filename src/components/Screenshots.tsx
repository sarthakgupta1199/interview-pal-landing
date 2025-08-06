import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Screenshots = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">See Interview Pal in action</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time AI feedback, industry-specific questions, and detailed performance analytics
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Auto Apply */}
          <div className="relative group cursor-pointer">
            <div className="aspect-[4/3] bg-gradient-card rounded-2xl overflow-hidden shadow-soft-lg border border-border">
              {/* Video/Image placeholder */}
              <div className="w-full h-full bg-muted/20 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                
                {/* Play button for video */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer shadow-soft-lg">
                    <Play className="w-6 h-6 text-primary-foreground ml-1" />
                  </div>
                </div>
                
                {/* Text overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <h3 className="text-white font-semibold text-lg mb-1">Auto Apply</h3>
                  <p className="text-white/80 text-sm">Want to apply to 1,000 jobs with one click? No worries — all positions are smart-matched to your resume.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Question Bank */}
          <div className="relative group cursor-pointer">
            <div className="aspect-[4/3] bg-gradient-card rounded-2xl overflow-hidden shadow-soft-lg border border-border">
              {/* Video/Image placeholder */}
              <div className="w-full h-full bg-muted/20 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-success/10" />
                
                {/* Play button for video */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-accent/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer shadow-soft-lg">
                    <Play className="w-6 h-6 text-accent-foreground ml-1" />
                  </div>
                </div>
                
                {/* Text overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <h3 className="text-white font-semibold text-lg mb-1">Question Bank</h3>
                  <p className="text-white/80 text-sm">Real interview questions from top companies, including behavioral, technical, and case questions.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Preparation Hub */}
          <div className="relative group cursor-pointer">
            <div className="aspect-[4/3] bg-gradient-card rounded-2xl overflow-hidden shadow-soft-lg border border-border">
              {/* Video/Image placeholder */}
              <div className="w-full h-full bg-muted/20 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-success/10 to-primary/10" />
                
                {/* Play button for video */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-success/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer shadow-soft-lg">
                    <Play className="w-6 h-6 text-success-foreground ml-1" />
                  </div>
                </div>
                
                {/* Text overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <h3 className="text-white font-semibold text-lg mb-1">Preparation Hub</h3>
                  <p className="text-white/80 text-sm">Based on your resume and the job, we'll list questions you might get in the interview.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA below bento grid */}
        <div className="text-center mt-12">
          <Button size="lg" className="text-lg px-8 py-4">
            Start your first practice session
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;