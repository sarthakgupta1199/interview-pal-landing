import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Check, X } from "lucide-react";
const AceComparison = () => {
  const navigate = useNavigate();
  const comparisons = [{
    category: "Purpose",
    ace: "Tuned only for interviews with smaller, focused data and expert prompts",
    chatgpt: "Generalist that answers everything, shallow for interview depth"
  }, {
    category: "Coaching style",
    ace: "Pushes back, asks hard follow-ups, corrects weak structure",
    chatgpt: "Often affirms, rarely challenges, easy to get flattery"
  }, {
    category: "Outcomes",
    ace: "Standardised evaluation report after every mock, cumulative progress view",
    chatgpt: "No consistent rubric, no tracking"
  }];
  return <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-6 font-manrope">&quot;But I can do this on ChatGPT&quot;</h2>
          
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Comparison Table */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-center font-manrope">Feature Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 px-4 font-semibold">Feature</th>
                      <th className="text-center py-4 px-4 font-semibold text-primary">Ace Interviewer</th>
                      <th className="text-center py-4 px-4 font-semibold text-muted-foreground">ChatGPT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisons.map((comparison, index) => <tr key={index} className={index === comparisons.length - 1 ? "" : "border-b"}>
                        <td className="py-6 px-4 font-medium">{comparison.category}</td>
                        <td className="py-6 px-4 text-center">
                          <div className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground text-left">{comparison.ace}</span>
                          </div>
                        </td>
                        <td className="py-6 px-4 text-center">
                          <div className="flex items-start gap-3">
                            <X className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground text-left">{comparison.chatgpt}</span>
                          </div>
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Button size="lg" className="text-lg px-8 py-4 shadow-soft-lg hover:shadow-soft-xl transition-all duration-300 transform hover:scale-105" onClick={() => navigate('/interview')}>Train me now</Button>
          </div>
        </div>
      </div>
    </section>;
};
export default AceComparison;