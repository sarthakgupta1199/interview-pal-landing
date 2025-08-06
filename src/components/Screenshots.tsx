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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Auto Apply */}
          <div className="group cursor-pointer">
            <div className="aspect-[3/2] bg-gradient-card rounded-2xl overflow-hidden shadow-soft-lg border border-border mb-4">
              {/* Video/Image placeholder */}
              <div className="w-full h-full bg-muted/20 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                
                {/* Play button for video */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer shadow-soft-lg">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                </div>
              </div>
            </div>
            {/* Title and subtext below */}
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">Smart Auto Apply</h3>
              <p className="text-muted-foreground text-sm">Apply to thousands of jobs with perfect matching</p>
            </div>
          </div>

          {/* Question Bank */}
          <div className="group cursor-pointer">
            <div className="aspect-[3/2] bg-gradient-card rounded-2xl overflow-hidden shadow-soft-lg border border-border mb-4">
              {/* Video/Image placeholder */}
              <div className="w-full h-full bg-muted/20 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-success/10" />
                
                {/* Play button for video */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-accent/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer shadow-soft-lg">
                    <Play className="w-8 h-8 text-accent-foreground ml-1" />
                  </div>
                </div>
              </div>
            </div>
            {/* Title and subtext below */}
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">Question Bank Library</h3>
              <p className="text-muted-foreground text-sm">Real questions from top tech companies</p>
            </div>
          </div>

          {/* Preparation Hub */}
          <div className="group cursor-pointer">
            <div className="aspect-[3/2] bg-gradient-card rounded-2xl overflow-hidden shadow-soft-lg border border-border mb-4">
              {/* Video/Image placeholder */}
              <div className="w-full h-full bg-muted/20 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-success/10 to-primary/10" />
                
                {/* Play button for video */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-success/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer shadow-soft-lg">
                    <Play className="w-8 h-8 text-success-foreground ml-1" />
                  </div>
                </div>
              </div>
            </div>
            {/* Title and subtext below */}
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">Personal Preparation Hub</h3>
              <p className="text-muted-foreground text-sm">Customized questions based on your resume</p>
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