import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Play } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
const AceHero = () => {
  const navigate = useNavigate();
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Hero background" className="w-full h-full object-cover opacity-5" />
        <div className="absolute inset-0 bg-gradient-subtle" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-16">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          
          
          {/* Main headline */}
          <h1 className="mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight font-manrope">
            Practice interviews with your personal AI coach
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Get actionable feedback, build confidence, and land your dream job. No more interview anxiety.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="text-lg px-8 py-4 shadow-soft-lg hover:shadow-soft-xl transition-all duration-300 transform hover:scale-105" onClick={() => navigate('/interview')}>
              Start practicing
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 group" onClick={() => navigate('/interview')}>
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch demo
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-primary-soft border-2 border-background flex items-center justify-center text-primary font-semibold text-sm">
                  PM
                </div>
                <div className="w-10 h-10 rounded-full bg-success-soft border-2 border-background flex items-center justify-center text-success font-semibold text-sm">
                  C
                </div>
                <div className="w-10 h-10 rounded-full bg-accent-soft border-2 border-background flex items-center justify-center text-accent font-semibold text-sm">
                  M
                </div>
              </div>
              <span className="text-sm font-medium">Loved by ambitious candidates across PM, consulting, and MBA tracks</span>
            </div>
            
            <div className="hidden lg:block w-1 h-1 rounded-full bg-muted-foreground" />
            
            <div className="text-sm font-medium">
              No bookings, no waiting, just practice
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AceHero;