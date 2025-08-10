import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Screenshots = () => {
  const navigate = useNavigate();
  return <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">See Ace Interviewer in action</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Mock interviews that feel real and instant reports that make you better</p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
          {/* Large video demo - takes up 8 columns on desktop */}
          <div className="md:col-span-8 relative group">
            <div className="aspect-video bg-gradient-card rounded-2xl overflow-hidden shadow-soft-lg border border-border">
              {/* Video placeholder */}
              <div className="w-full h-full bg-muted/20 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 cursor-pointer shadow-soft-lg">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                  <p className="text-lg font-semibold mb-2">Watch Demo</p>
                  <p className="text-muted-foreground">See how real interviews work</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - 4 columns with 2 stacked screenshots */}
          <div className="md:col-span-4 space-y-6">
            {/* AI Feedback Screenshot */}
            <div className="aspect-[4/3] bg-gradient-card rounded-2xl overflow-hidden shadow-soft-lg border border-border">
              <div className="w-full h-full bg-muted/10 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-success/10 to-primary/10" />
                <div className="relative z-10 text-center p-6">
                  <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center mb-3 mx-auto">
                    <span className="text-success-foreground font-bold">AI</span>
                  </div>
                  <p className="font-semibold mb-1">Real-time Feedback</p>
                  <p className="text-sm text-muted-foreground">Instant AI coaching</p>
                </div>
              </div>
            </div>

            {/* Performance Analytics Screenshot */}
            <div className="aspect-[4/3] bg-gradient-card rounded-2xl overflow-hidden shadow-soft-lg border border-border">
              <div className="w-full h-full bg-muted/10 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10" />
                <div className="relative z-10 text-center p-6">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-3 mx-auto">
                    <span className="text-accent-foreground font-bold">📊</span>
                  </div>
                  <p className="font-semibold mb-1">Performance Analytics</p>
                  <p className="text-sm text-muted-foreground">Track your progress</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row - 3 smaller feature highlights */}
          <div className="md:col-span-4 aspect-[4/3] bg-gradient-card rounded-2xl overflow-hidden shadow-soft-lg border border-border">
            <div className="w-full h-full bg-muted/10 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
              <div className="relative z-10 text-center p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <span className="text-primary-foreground font-bold">🎯</span>
                </div>
                <p className="font-semibold mb-1">Industry Questions</p>
                <p className="text-sm text-muted-foreground">Tailored for your field</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 aspect-[4/3] bg-gradient-card rounded-2xl overflow-hidden shadow-soft-lg border border-border">
            <div className="w-full h-full bg-muted/10 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-success/10" />
              <div className="relative z-10 text-center p-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <span className="text-accent-foreground font-bold">🗣️</span>
                </div>
                <p className="font-semibold mb-1">Voice Practice</p>
                <p className="text-sm text-muted-foreground">Perfect your delivery</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 aspect-[4/3] bg-gradient-card rounded-2xl overflow-hidden shadow-soft-lg border border-border">
            <div className="w-full h-full bg-muted/10 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-success/10 to-primary/10" />
              <div className="relative z-10 text-center p-6">
                <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <span className="text-success-foreground font-bold">⏱️</span>
                </div>
                <p className="font-semibold mb-1">Timing Practice</p>
                <p className="text-sm text-muted-foreground">Master your pace</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA below bento grid */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="text-lg px-8 py-4"
            onClick={() => navigate('/interview')}
          >
            Start your first practice session
          </Button>
        </div>
      </div>
    </section>;
};
export default Screenshots;