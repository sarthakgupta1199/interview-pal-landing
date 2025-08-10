import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Play, Target, Zap, FileText } from "lucide-react";

const AceSolution = () => {
  const navigate = useNavigate();

  return (
    <section id="features" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-6 font-manrope">Meet your ultimate interview coach</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            24/7 AI with actionable reports, speech and video analysis of your mock interview.
          </p>
        </div>
        
        {/* Bento Grid */}
        <div className="grid lg:grid-cols-12 lg:grid-rows-2 gap-6 mb-12">
          {/* Large video tile */}
          <Card className="lg:col-span-8 lg:row-span-2 bg-gradient-card hover:shadow-soft-xl transition-all duration-300 group">
            <CardContent className="p-8 h-full flex flex-col justify-center items-center text-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Play className="h-12 w-12 text-primary" />
              </div>
              <h3 className="mb-4 font-manrope">See Ace Interviewer in action</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Watch how our AI conducts realistic interviews with challenging follow-ups and real-time feedback
              </p>
              <Button 
                variant="outline"
                className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                onClick={() => navigate('/interview')}
              >
                <Play className="mr-2 h-4 w-4" />
                Play Demo
              </Button>
            </CardContent>
          </Card>

          {/* Tough follow-ups */}
          <Card className="lg:col-span-4 bg-success-soft hover:shadow-soft-lg transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target className="h-6 w-6 text-success" />
              </div>
              <h4 className="mb-3 font-manrope text-success-foreground">Tough follow-ups</h4>
              <p className="text-success-foreground/80 text-sm">
                Probes on metrics, users, trade-offs, and strategy
              </p>
            </CardContent>
          </Card>

          {/* Real-time coaching */}
          <Card className="lg:col-span-4 bg-accent-soft hover:shadow-soft-lg transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h4 className="mb-3 font-manrope text-accent-foreground">Real-time coaching</h4>
              <p className="text-accent-foreground/80 text-sm">
                Instant feedback after every answer so you improve before the next
              </p>
            </CardContent>
          </Card>
        </div>

        {/* One-click report card */}
        <Card className="bg-warning-soft hover:shadow-soft-lg transition-all duration-300 group mb-12">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-warning/20 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
              <FileText className="h-8 w-8 text-warning" />
            </div>
            <h3 className="mb-4 font-manrope text-warning-foreground">One-click report</h3>
            <p className="text-warning-foreground/80 max-w-2xl mx-auto">
              Clear score with quotes from your transcript, AI-driven speech and body-language insights, and step-by-step recommendations
            </p>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="text-lg px-8 py-4 shadow-soft-lg hover:shadow-soft-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => navigate('/interview')}
          >
            Start your first mock in minutes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AceSolution;