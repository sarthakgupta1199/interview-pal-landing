import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Menu, Star, TrendingUp, TrendingDown, Lightbulb } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Report = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  // Trigger confetti on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Mock data
  const overallScore = 82;
  const subMetrics = [
    { name: 'Clarity of Thought', score: 4 },
    { name: 'Structure', score: 4 },
    { name: 'Product Thinking', score: 5 },
    { name: 'Metrics', score: 3 },
    { name: 'Creativity', score: 4 },
    { name: 'Collaboration', score: 4 },
    { name: 'Technical Depth', score: 3 },
    { name: 'Self-Awareness', score: 5 },
  ];

  const positives = [
    {
      title: "Strong Product Intuition",
      description: "Demonstrated excellent understanding of user needs and market dynamics.",
      quote: "I'd focus on reducing user friction in the onboarding flow to improve retention..."
    },
    {
      title: "Clear Communication",
      description: "Articulated complex ideas in a structured, easy-to-follow manner.",
      quote: "Let me break this down into three key areas: user impact, technical feasibility, and business value..."
    },
    {
      title: "Data-Driven Approach",
      description: "Consistently referenced metrics and quantifiable outcomes.",
      quote: "Based on the 15% conversion rate, I'd estimate this feature could drive $2M in additional revenue..."
    }
  ];

  const negatives = [
    {
      title: "Limited Technical Detail",
      description: "Could have provided more depth on implementation challenges.",
      quote: "We'd need to work with engineering on this..."
    },
    {
      title: "Missing Edge Cases",
      description: "Didn't consider potential failure scenarios or alternative user paths.",
      quote: "The main user flow would be straightforward..."
    }
  ];

  const recommendations = [
    {
      title: "Strengthen Technical Fluency",
      description: "Study common system design patterns and backend concepts.",
      example: "Instead of 'work with engineering,' say 'This would require API rate limiting and caching strategies to handle scale.'"
    },
    {
      title: "Practice Framework Thinking",
      description: "Use structured frameworks like STAR or the PM framework for answers.",
      example: "Always start with 'Let me clarify the problem first' then structure your response in clear sections."
    },
    {
      title: "Quantify More Often",
      description: "Support statements with specific numbers and assumptions.",
      example: "Instead of 'many users,' say 'approximately 40% of our DAU based on similar feature adoption rates.'"
    }
  ];

  const voiceFeedback = {
    tone: "Confident and warm delivery. Good energy level that kept the conversation engaging.",
    pauses: "Natural pacing with minimal fillers. Effective use of strategic pauses for emphasis.",
    overall: "Clear articulation and professional tone. Voice conveyed enthusiasm for the product space."
  };

  const previousReports = [
    { date: '2024-01-15', type: 'Product Manager', score: 85 },
    { date: '2024-01-10', type: 'Consulting', score: 78 },
    { date: '2024-01-05', type: 'MBA Interview', score: 82 },
  ];

  const downloadPDF = () => {
    // Stub function for PDF download
    console.log('Downloading PDF report...');
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const renderStars = (score: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < score ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  const PreviousReportsContent = () => (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg mb-4">Previous Reports</h3>
      {previousReports.map((report, index) => (
        <Card key={index} className="cursor-pointer hover:bg-accent transition-colors">
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">{report.type}</p>
                <p className="text-sm text-muted-foreground">{report.date}</p>
              </div>
              <Badge className={getScoreColor(report.score)}>
                {report.score}/100
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-green-50/20 to-blue-50/30">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Home</span>
            </Button>
            
            <h1 className="text-lg font-semibold">Interview Pal</h1>
            
            {/* Mobile menu for previous reports */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <PreviousReportsContent />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Previous Reports Sidebar - Desktop */}
          <aside className="hidden md:block w-80 space-y-4">
            <PreviousReportsContent />
          </aside>

          {/* Main Content */}
          <main className="flex-1 space-y-8">
            {/* Header Section */}
            <div className={`text-center space-y-4 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-green-600 to-blue-600 bg-clip-text text-transparent">
                Your Interview Report
              </h1>
              <p className="text-lg text-muted-foreground">
                Well done, here's how you did.
              </p>
            </div>

            {/* Score Card */}
            <Card className={`transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <CardHeader>
                <CardTitle className="text-center">Overall Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className={`text-6xl font-bold ${getScoreColor(overallScore)}`}>
                    {overallScore}
                  </div>
                  <div className="text-lg text-muted-foreground">out of 100</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {subMetrics.map((metric, index) => (
                    <div key={metric.name} className="flex justify-between items-center p-3 bg-accent/50 rounded-lg">
                      <span className="text-sm font-medium">{metric.name}</span>
                      <div className="flex gap-1">
                        {renderStars(metric.score)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Positives Section */}
            <Card className={`transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <TrendingUp className="w-5 h-5" />
                  Strengths
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {positives.map((positive, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-4 space-y-2">
                    <h4 className="font-semibold text-green-800">{positive.title}</h4>
                    <p className="text-sm text-muted-foreground">{positive.description}</p>
                    <blockquote className="text-sm italic bg-green-50 p-3 rounded-md border-l-2 border-green-200">
                      "{positive.quote}"
                    </blockquote>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Negatives Section */}
            <Card className={`transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-700">
                  <TrendingDown className="w-5 h-5" />
                  Areas to Improve
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {negatives.map((negative, index) => (
                  <div key={index} className="border-l-4 border-red-500 pl-4 space-y-2">
                    <h4 className="font-semibold text-red-800">{negative.title}</h4>
                    <p className="text-sm text-muted-foreground">{negative.description}</p>
                    <blockquote className="text-sm italic bg-red-50 p-3 rounded-md border-l-2 border-red-200">
                      "{negative.quote}"
                    </blockquote>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recommendations Section */}
            <Card className={`transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-700">
                  <Lightbulb className="w-5 h-5" />
                  Actionable Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recommendations.map((rec, index) => (
                  <div key={index} className="border-l-4 border-yellow-500 pl-4 space-y-2">
                    <h4 className="font-semibold text-yellow-800">{rec.title}</h4>
                    <p className="text-sm text-muted-foreground">{rec.description}</p>
                    <div className="text-sm bg-yellow-50 p-3 rounded-md border-l-2 border-yellow-200">
                      <strong>Example:</strong> {rec.example}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Voice Feedback Section */}
            <Card className={`transition-all duration-700 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <CardHeader>
                <CardTitle className="text-blue-700">Voice Feedback</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-blue-800">Tone</h4>
                    <p className="text-sm text-muted-foreground">{voiceFeedback.tone}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800">Pauses</h4>
                    <p className="text-sm text-muted-foreground">{voiceFeedback.pauses}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800">Overall Voice Delivery</h4>
                    <p className="text-sm text-muted-foreground">{voiceFeedback.overall}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>

      {/* Sticky Download Button */}
      <div className="fixed bottom-4 left-4 right-4 md:bottom-8 md:left-auto md:right-8 md:w-auto z-50">
        <Button
          onClick={downloadPDF}
          size="lg"
          className="w-full md:w-auto bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white shadow-lg"
        >
          <Download className="w-4 h-4 mr-2" />
          Download PDF Report
        </Button>
      </div>
    </div>
  );
};

export default Report;