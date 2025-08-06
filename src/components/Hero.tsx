import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Hero background" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-subtle" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          
          
          {/* Main headline */}
          <h1 className="mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight">
            Practice interviews
            <br />
            with your personal AI coach
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">Get actionable feedback, build confidence, and land your dream job. No more interview anxiety.</p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="text-lg px-8 py-4 shadow-soft-lg hover:shadow-soft-xl transition-all duration-300 transform hover:scale-105">
              Start practicing free
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Watch demo
            </Button>
          </div>
          
          {/* Social proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary-soft border-2 border-background" />
                <div className="w-8 h-8 rounded-full bg-accent-soft border-2 border-background" />
                <div className="w-8 h-8 rounded-full bg-success-soft border-2 border-background" />
              </div>
              <span className="text-sm">Join 10,000+ job seekers</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground" />
            <div className="flex items-center gap-1">
              <span className="text-sm">⭐⭐⭐⭐⭐</span>
              <span className="text-sm">4.9/5 from real users</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;