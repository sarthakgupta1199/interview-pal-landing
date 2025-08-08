import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <div className="bg-gradient-card rounded-3xl p-12 shadow-soft-xl">
            <h2 className="mb-6">
              Your next job starts with
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">confident interviews</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stop letting interview anxiety hold you back. Start practicing today and transform how you show up in every interview.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 shadow-soft-lg hover:shadow-soft-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => navigate('/interview')}
              >
                Start your free practice
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={() => navigate('/interview')}
              >
                Schedule a demo
              </Button>
            </div>

            {/* Value props */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>Free to start</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>Setup in 2 minutes</span>
              </div>
            </div>
          </div>

          {/* Secondary CTA */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help.
            </p>
            <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary">
              Talk to our team →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;