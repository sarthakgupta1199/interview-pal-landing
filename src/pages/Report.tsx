import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ArrowLeft, Star, Download, Calendar, Building, User, Briefcase, ChevronDown, Target } from "lucide-react";
import confetti from 'canvas-confetti';

const Report = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  // Mock data for the report
  const reportData = {
    candidate: {
      name: "Alex Johnson",
      email: "alex@example.com",
      targetRole: "Product Manager",
      company: "TechCorp",
      interviewType: "Behavioral + Case Study",
      date: "January 15, 2025"
    },
    overallScore: 78,
    topWins: [
      { text: "Excellent STAR framework usage", quote: "When I led the product redesign...", timestamp: "3:42" },
      { text: "Strong stakeholder management example", quote: "I coordinated with 5 different teams...", timestamp: "8:15" },
      { text: "Clear metrics-driven thinking", quote: "We increased conversion by 23%...", timestamp: "12:30" }
    ],
    areasToImprove: [
      { text: "More specific numbers needed", quote: "We improved the process significantly", timestamp: "5:20" },
      { text: "Clearer problem definition", quote: "There were some challenges...", timestamp: "9:45" },
      { text: "Better closing statements", quote: "That's basically what happened", timestamp: "14:10" }
    ],
    nextMockGoals: [
      "Practice technical PM questions",
      "Improve data storytelling",
      "Work on executive presence"
    ],
    skillScores: {
      structureClarity: { score: 4, feedback: "Excellent use of frameworks. Minor improvements in logical flow." },
      analyticalThinking: { score: 3, feedback: "Good problem breakdown. Work on deeper insights and hypothesis generation." },
      communication: { score: 4, feedback: "Clear and confident delivery. Watch filler words and pace." },
      evidenceMetrics: { score: 3, feedback: "Some good examples but need more specific numbers and outcomes." },
      handlingPushback: { score: 2, feedback: "Struggled with follow-up questions. Practice defending assumptions." }
    },
    improvements: [
      {
        title: "Quantify Your Impact",
        transcript: "We improved the user experience and got good feedback from customers.",
        betterAnswer: "We improved the user experience by reducing checkout time from 3.2 to 1.8 minutes, resulting in a 23% increase in conversion rate and $2.3M additional quarterly revenue based on feedback from 1,200+ customers."
      },
      {
        title: "Structure Complex Answers",
        transcript: "There were multiple issues with the project timeline and budget constraints plus team coordination problems.",
        betterAnswer: "Let me break this down into three key challenges: First, timeline - we had a 2-week delay due to API changes. Second, budget - we were 15% over due to additional security requirements. Third, coordination - with 4 cross-functional teams, we needed better communication protocols."
      }
    ],
    voiceVideoInsights: {
      voice: {
        wordsPerMinute: 145,
        fillerWords: 23,
        pauseAnalysis: "Good use of strategic pauses",
        toneEnergy: 7.2
      },
      video: {
        eyeContactPercent: 78,
        postureScore: 8.5,
        gestureUsage: "Moderate and appropriate",
        facialExpressiveness: 6.8
      }
    },
    actionPlan: [
      {
        title: "Numbers & Metrics Drill",
        description: "Practice adding specific numbers to every achievement story",
        outcome: "Improve evidence-based communication by 40%"
      },
      {
        title: "Pushback Response Framework",
        description: "Use: Acknowledge → Clarify → Respond with data → Check understanding",
        outcome: "Handle challenging questions with confidence"
      },
      {
        title: "Executive Presence Practice",
        description: "Record 5-minute self-intro focusing on eye contact and gesture control",
        outcome: "Boost leadership communication style"
      }
    ]
  };

  const previousReports = [
    { id: 1, role: "Product Manager", company: "TechCorp", date: "Jan 15", score: 78 },
    { id: 2, role: "Product Manager", company: "StartupXYZ", date: "Jan 10", score: 72 },
    { id: 3, role: "Sr PM", company: "BigTech", date: "Jan 5", score: 85 },
    { id: 4, role: "Product Lead", company: "ScaleUp", date: "Dec 28", score: 69 }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return "bg-green-50 border-green-200";
    if (score >= 70) return "bg-yellow-50 border-yellow-200";
    return "bg-red-50 border-red-200";
  };

  const renderStars = (score: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < score ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'
        }`}
      />
    ));
  };

  const downloadPDF = () => {
    // PDF download functionality would go here
    console.log("Downloading PDF report...");
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Sidebar - Previous Reports */}
      <div className="w-80 border-r border-border bg-muted/30 hidden lg:block">
        <div className="p-6">
          <h3 className="font-semibold text-lg mb-4">Previous Reports</h3>
          <ScrollArea className="h-[calc(100vh-120px)]">
            <div className="space-y-3">
              {previousReports.map((report) => (
                <Card key={report.id} className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <p className="font-medium text-sm">{report.role}</p>
                        <p className="text-xs text-muted-foreground">{report.company}</p>
                      </div>
                      <div className={`text-right ${getScoreColor(report.score)}`}>
                        <p className="font-bold text-lg">{report.score}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{report.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 relative">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-background border-b border-border p-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Home</span>
            </Button>
            
            <h1 className="text-lg font-semibold">Ace Interviewer</h1>
            
            <div className="w-[120px]" /> {/* Spacer for centering */}
          </div>
        </div>

        <ScrollArea className="h-[calc(100vh-80px)]">
          <div className="p-6 max-w-5xl mx-auto space-y-8">
            {/* Report Header */}
            <Card className={`transition-all duration-700 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Interview Report
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-muted-foreground">Candidate</p>
                      <p className="font-medium">{reportData.candidate.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-muted-foreground">Target Role</p>
                      <p className="font-medium">{reportData.candidate.targetRole}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-muted-foreground">Company</p>
                      <p className="font-medium">{reportData.candidate.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-muted-foreground">Date</p>
                      <p className="font-medium">{reportData.candidate.date}</p>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <p className="text-muted-foreground">Interview Type</p>
                    <p className="font-medium">{reportData.candidate.interviewType}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Summary at a Glance */}
            <Card className={`transition-all duration-700 delay-100 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <CardHeader>
                <CardTitle>Summary at a Glance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Overall Score */}
                  <div className="text-center">
                    <div className={`w-32 h-32 mx-auto rounded-full border-4 flex items-center justify-center ${getScoreBgColor(reportData.overallScore)}`}>
                      <div className="text-center">
                        <div className={`text-4xl font-bold ${getScoreColor(reportData.overallScore)}`}>
                          {reportData.overallScore}
                        </div>
                        <div className="text-sm text-muted-foreground">Overall</div>
                      </div>
                    </div>
                  </div>

                  {/* Top 3 Wins */}
                  <div>
                    <h4 className="font-semibold text-green-600 mb-3">🎉 Top 3 Wins</h4>
                    <div className="space-y-3">
                      {reportData.topWins.map((win, index) => (
                        <div key={index} className="p-3 bg-green-50 border border-green-200 rounded-lg">
                          <p className="font-medium text-sm text-green-800">{win.text}</p>
                          <p className="text-xs text-green-600 italic">"{win.quote}"</p>
                          <p className="text-xs text-green-500">{win.timestamp}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Areas to Improve */}
                  <div>
                    <h4 className="font-semibold text-amber-600 mb-3">📈 Areas to Improve</h4>
                    <div className="space-y-3">
                      {reportData.areasToImprove.map((area, index) => (
                        <div key={index} className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                          <p className="font-medium text-sm text-amber-800">{area.text}</p>
                          <p className="text-xs text-amber-600 italic">"{area.quote}"</p>
                          <p className="text-xs text-amber-500">{area.timestamp}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Next Mock Goals */}
                <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Next Mock Goals
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {reportData.nextMockGoals.map((goal, index) => (
                      <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800 justify-center py-2">
                        {goal}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Core Skill Heatmap */}
            <Card className={`transition-all duration-700 delay-200 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <CardHeader>
                <CardTitle>Core Skill Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(reportData.skillScores).map(([skill, data]) => (
                    <div key={skill} className="p-4 border border-border rounded-lg">
                      <h4 className="font-medium mb-2">
                        {skill.replace(/([A-Z])/g, ' $1').trim().toLowerCase().replace(/^\w/, c => c.toUpperCase())}
                      </h4>
                      <div className="flex items-center gap-2 mb-2">
                        {renderStars(data.score)}
                        <span className="text-sm text-muted-foreground">({data.score}/5)</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{data.feedback}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Areas to Improve */}
            <Card className={`transition-all duration-700 delay-300 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <CardHeader>
                <CardTitle>Areas to Improve</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {reportData.improvements.map((improvement, index) => (
                  <div key={index} className="space-y-4">
                    <h4 className="font-semibold text-lg">{improvement.title}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-sm font-medium text-red-800 mb-2">Your Answer:</p>
                        <p className="text-sm text-red-700 italic">"{improvement.transcript}"</p>
                      </div>
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-sm font-medium text-green-800 mb-2">Better Answer:</p>
                        <p className="text-sm text-green-700">"{improvement.betterAnswer}"</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Voice & Video Insights */}
            <Card className={`transition-all duration-700 delay-400 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <CardHeader>
                <CardTitle>Voice & Video Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Voice Metrics */}
                  <div>
                    <h4 className="font-semibold mb-4 text-purple-600">🎙️ Voice Analysis</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="text-sm">Words per minute</span>
                        <span className="font-medium">{reportData.voiceVideoInsights.voice.wordsPerMinute}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="text-sm">Filler words</span>
                        <span className="font-medium">{reportData.voiceVideoInsights.voice.fillerWords}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="text-sm">Tone energy</span>
                        <span className="font-medium">{reportData.voiceVideoInsights.voice.toneEnergy}/10</span>
                      </div>
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <span className="text-sm block mb-1">Pause analysis</span>
                        <span className="text-xs text-muted-foreground">{reportData.voiceVideoInsights.voice.pauseAnalysis}</span>
                      </div>
                    </div>
                  </div>

                  {/* Video Metrics */}
                  <div>
                    <h4 className="font-semibold mb-4 text-blue-600">📹 Video Analysis</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="text-sm">Eye contact</span>
                        <span className="font-medium">{reportData.voiceVideoInsights.video.eyeContactPercent}%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="text-sm">Posture score</span>
                        <span className="font-medium">{reportData.voiceVideoInsights.video.postureScore}/10</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="text-sm">Facial expressiveness</span>
                        <span className="font-medium">{reportData.voiceVideoInsights.video.facialExpressiveness}/10</span>
                      </div>
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <span className="text-sm block mb-1">Gesture usage</span>
                        <span className="text-xs text-muted-foreground">{reportData.voiceVideoInsights.video.gestureUsage}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 48-Hour Action Plan */}
            <Card className={`transition-all duration-700 delay-500 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <CardHeader>
                <CardTitle>48-Hour Action Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reportData.actionPlan.map((action, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{action.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{action.description}</p>
                          <Badge variant="outline" className="text-xs">
                            Expected: {action.outcome}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollArea>

        {/* Fixed Download Button */}
        <div className="fixed bottom-6 right-6">
          <Button
            onClick={downloadPDF}
            size="lg"
            className="rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Report;