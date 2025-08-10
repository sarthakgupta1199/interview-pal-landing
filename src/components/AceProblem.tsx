import { Card, CardContent } from "@/components/ui/card";
import { UserX, Clock, MessageSquareX } from "lucide-react";
const AceProblem = () => {
  const problems = [{
    icon: UserX,
    title: "No real interviewer",
    description: "Friends and family rarely challenge you like a real hiring manager"
  }, {
    icon: Clock,
    title: "Scheduling is a time trap",
    description: "Calendars never match, practice gets delayed, confidence drops"
  }, {
    icon: MessageSquareX,
    title: "Vague feedback kills progress",
    description: "You finish a mock, get generic notes, and still don't know what to fix"
  }];
  return <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-6 font-manrope">Traditional interview prep is broken.</h2>
          
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
          const IconComponent = problem.icon;
          return <Card key={index} className="bg-card hover:shadow-soft-lg transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="h-8 w-8 text-destructive" />
                    </div>
                  </div>
                  <h3 className="mb-4 font-manrope">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>;
        })}
        </div>
      </div>
    </section>;
};
export default AceProblem;