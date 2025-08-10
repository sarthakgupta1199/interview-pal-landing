import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Play, Target, Zap, FileText, MessageSquare, BarChart3 } from "lucide-react";

const AceSolution = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "AI Interview Simulation",
      description: "Practice with realistic questions and challenging follow-ups that adapt to your responses",
      icon: MessageSquare,
      screenshot: "/api/placeholder/400/300",
      bgColor: "bg-primary/5",
      iconColor: "text-primary",
      textColor: "text-foreground"
    },
    {
      title: "Real-time Feedback",
      description: "Get instant coaching on your answers, body language, and speaking pace",
      icon: Zap,
      screenshot: "/api/placeholder/400/300",
      bgColor: "bg-accent/5",
      iconColor: "text-accent",
      textColor: "text-foreground"
    },
    {
      title: "Performance Analytics",
      description: "Detailed reports with actionable insights to improve your interview skills",
      icon: BarChart3,
      screenshot: "/api/placeholder/400/300",
      bgColor: "bg-success/5",
      iconColor: "text-success",
      textColor: "text-foreground"
    }
  ];

  return (
    <section id="features" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-6 font-manrope">Meet your ultimate interview coach</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            24/7 AI with actionable reports, speech and video analysis of your mock interview.
          </p>
        </div>
        
        {/* Main Demo Section */}
        <Card className="mb-16 overflow-hidden bg-gradient-card border-0 shadow-soft-xl">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 items-center">
              <div className="p-12">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Play className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-4 font-manrope text-foreground">See Ace Interviewer in action</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Watch how our AI conducts realistic interviews with challenging follow-ups and provides real-time feedback to help you improve.
                </p>
                <Button 
                  size="lg"
                  className="shadow-soft-md hover:shadow-soft-lg transition-all duration-300"
                  onClick={() => navigate('/interview')}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
              <div className="bg-muted/20 h-full min-h-[400px] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Play className="h-12 w-12 text-primary" />
                  </div>
                  <p className="text-muted-foreground">Demo Video Placeholder</p>
                  <p className="text-sm text-muted-foreground/70 mt-2">Click "Watch Demo" to see it in action</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feature Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className={`${feature.bgColor} border-0 hover:shadow-soft-lg transition-all duration-300 group overflow-hidden`}>
                <CardContent className="p-0">
                  {/* Screenshot placeholder */}
                  <div className="bg-muted/30 h-48 flex items-center justify-center border-b border-border/20">
                    <div className="text-center">
                      <IconComponent className={`h-12 w-12 ${feature.iconColor} mb-2 mx-auto`} />
                      <p className="text-sm text-muted-foreground">Screenshot placeholder</p>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-full ${feature.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <IconComponent className={`h-5 w-5 ${feature.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-manrope ${feature.textColor} mb-2`}>{feature.title}</h4>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

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