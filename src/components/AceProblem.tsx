import { Card, CardContent } from "@/components/ui/card";
import { UserX, Clock, MessageSquareX, Play } from "lucide-react";

const AceProblem = () => {
  const problems = [
    {
      icon: UserX,
      title: "No real interviewer",
      description: "Friends and family rarely challenge you like a real hiring manager",
      screenshot: "/placeholder.svg",
      imageAlt: "Generic mock interview with friends"
    },
    {
      icon: Clock,
      title: "Scheduling is a time trap",
      description: "Calendars never match, practice gets delayed, confidence drops",
      screenshot: "/placeholder.svg",
      imageAlt: "Calendar scheduling conflicts"
    },
    {
      icon: MessageSquareX,
      title: "Vague feedback kills progress",
      description: "You finish a mock, get generic notes, and still don't know what to fix",
      screenshot: "/placeholder.svg",
      imageAlt: "Unclear feedback document"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-6 font-manrope text-foreground">Why winging it never works</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Traditional interview prep is broken. Here's why most people struggle.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <Card key={index} className="bg-background border-border/50 hover:shadow-soft-lg hover:border-destructive/20 transition-all duration-300 group overflow-hidden">
                {/* Screenshot container */}
                <div className="relative h-48 bg-muted/20 overflow-hidden">
                  <img 
                    src={problem.screenshot} 
                    alt={problem.imageAlt}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-destructive/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 rounded-full bg-destructive/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="h-6 w-6 text-destructive" />
                    </div>
                  </div>
                  {/* Play button overlay for visual interest */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center">
                      <Play className="h-5 w-5 text-destructive ml-0.5" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <CardContent className="p-6">
                  <h3 className="mb-3 font-manrope text-foreground text-lg">{problem.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AceProblem;