import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, BarChart3, MessageSquare, Mic, Clock, Zap, Brain, FileText } from "lucide-react";

const Screenshots = () => {
  return (
    <section id="screenshots" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Secret Weapons, Just for You
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Live Interview - Large */}
          <Card className="md:col-span-2 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 hover:border-primary/40 transition-all duration-300 group relative overflow-hidden">
            <CardContent className="p-8 h-full flex flex-col justify-between relative z-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Play className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold">Live Interview</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Interview Copilot - Real-time AI assistance acts like a magical teleprompter to help you crush your interviews.
                </p>
              </div>
              <Button className="self-start">Get Started</Button>
            </CardContent>
            <div className="absolute top-4 left-4 bg-black/80 text-white px-2 py-1 rounded text-sm">01:33</div>
          </Card>

          {/* Mock Interview */}
          <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20 hover:border-accent/40 transition-all duration-300">
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold">Mock Interview</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  1-on-1 live interview simulation that mirrors real interview usually lasts 30 minutes.
                </p>
              </div>
              <Button variant="outline" size="sm">Get Started</Button>
            </CardContent>
          </Card>

          {/* Auto Apply */}
          <Card className="bg-gradient-to-br from-success/10 to-accent/10 border-success/20 hover:border-success/40 transition-all duration-300">
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-success rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-success-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold">Auto Apply</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Want to apply to 1,000 jobs with one click? No worries — all positions are smart-matched to your resume.
                </p>
              </div>
              <Button variant="outline" size="sm" className="bg-red-500 text-white border-red-500 hover:bg-red-600">Auto Apply</Button>
            </CardContent>
          </Card>

          {/* Question Bank */}
          <Card className="bg-gradient-to-br from-warning/10 to-primary/10 border-warning/20 hover:border-warning/40 transition-all duration-300">
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-warning rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-warning-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold">Question Bank</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Real interview questions from top companies, including behavioral, technical, and case questions.
                </p>
              </div>
              <Button variant="outline" size="sm" className="bg-red-500 text-white border-red-500 hover:bg-red-600">Question Bank</Button>
            </CardContent>
          </Card>

          {/* Preparation Hub */}
          <Card className="bg-gradient-to-br from-info/10 to-accent/10 border-info/20 hover:border-info/40 transition-all duration-300">
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-info rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-info-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold">Preparation Hub</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Based on your resume and the job, we'll list questions you might get in the interview.
                </p>
              </div>
              <Button variant="outline" size="sm" className="bg-red-500 text-white border-red-500 hover:bg-red-600">Preparation</Button>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button size="lg" className="text-lg px-8 py-4">
            Try it yourself
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;