import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Mic, MicOff, Pause, Play, RotateCcw, X, Upload, Type } from 'lucide-react';
import confetti from 'canvas-confetti';

type InterviewState = 'setup' | 'idle' | 'ai_speaking' | 'user_listening' | 'processing' | 'finished';

type TranscriptLine = {
  id: string;
  speaker: 'ai' | 'user';
  text: string;
  timestamp: number;
  isCurrent?: boolean;
};

const Interview = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<InterviewState>('setup');
  const [showModal, setShowModal] = useState(true);
  const [showTypeModal, setShowTypeModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes in seconds
  const [isPaused, setIsPaused] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [transcript, setTranscript] = useState<TranscriptLine[]>([]);
  const [showAllTranscript, setShowAllTranscript] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [typedMessage, setTypedMessage] = useState('');
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [micPermission, setMicPermission] = useState<'granted' | 'denied' | 'prompt'>('prompt');
  
  const questions = [
    "Tell me about yourself and your background.",
    "Why are you interested in this role?",
    "What's your greatest strength?",
    "Describe a challenging project you've worked on.",
    "Where do you see yourself in 5 years?"
  ];

  // Setup form state
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    resume: null as File | null,
    jobDescription: '',
    company: '',
    role: ''
  });

  // Timer effect
  useEffect(() => {
    if (state === 'ai_speaking' || state === 'user_listening' || state === 'processing') {
      if (!isPaused && timeLeft > 0) {
        timerRef.current = setInterval(() => {
          setTimeLeft(prev => {
            if (prev <= 1) {
              setState('finished');
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [state, isPaused, timeLeft]);

  // Check microphone permission
  useEffect(() => {
    const checkMicPermission = async () => {
      try {
        const result = await navigator.permissions.query({ name: 'microphone' as PermissionName });
        setMicPermission(result.state);
        result.onchange = () => setMicPermission(result.state);
      } catch (error) {
        console.error('Error checking mic permission:', error);
      }
    };
    checkMicPermission();
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSetupSubmit = () => {
    setShowModal(false);
    startInterview();
  };

  const handleSetupSkip = () => {
    setShowModal(false);
    setState('idle');
  };

  const startInterview = () => {
    setState('ai_speaking');
    addTranscriptLine('ai', "Hi! I'm your AI interviewer. Let's begin with our first question.");
    setTimeout(() => {
      addTranscriptLine('ai', questions[currentQuestion], true);
      setState('user_listening');
    }, 2000);
  };

  const addTranscriptLine = (speaker: 'ai' | 'user', text: string, isCurrent = false) => {
    const newLine: TranscriptLine = {
      id: Date.now().toString(),
      speaker,
      text,
      timestamp: Date.now(),
      isCurrent
    };
    
    setTranscript(prev => {
      const updated = prev.map(line => ({ ...line, isCurrent: false }));
      return [...updated, newLine];
    });
  };

  const handleMicPress = async () => {
    if (micPermission === 'denied') {
      return;
    }

    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setIsRecording(true);
      // Stub: Start audio recording
    } catch (error) {
      setMicPermission('denied');
    }
  };

  const handleMicRelease = () => {
    setIsRecording(false);
    setState('processing');
    
    // Stub: Process audio and add user response
    setTimeout(() => {
      addTranscriptLine('user', "Thank you for the question. I have experience in...");
      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(prev => prev + 1);
          setState('ai_speaking');
          addTranscriptLine('ai', questions[currentQuestion + 1], true);
          setTimeout(() => setState('user_listening'), 1500);
        } else {
          setState('finished');
        }
      }, 1000);
    }, 2000);
  };

  const handleTypeSubmit = () => {
    if (typedMessage.trim()) {
      addTranscriptLine('user', typedMessage);
      setTypedMessage('');
      setShowTypeModal(false);
      
      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(prev => prev + 1);
          setState('ai_speaking');
          addTranscriptLine('ai', questions[currentQuestion + 1], true);
          setTimeout(() => setState('user_listening'), 1500);
        } else {
          setState('finished');
        }
      }, 1000);
    }
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleRestart = () => {
    if (confirm('Are you sure you want to restart the current question?')) {
      setState('ai_speaking');
      addTranscriptLine('ai', questions[currentQuestion], true);
      setTimeout(() => setState('user_listening'), 1500);
    }
  };

  const handleEndSession = () => {
    if (confirm('Are you sure you want to end the interview?')) {
      setState('finished');
    }
  };

  const handleSubmitInterview = () => {
    navigate('/report');
  };

  const requestMicPermission = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setMicPermission('granted');
    } catch (error) {
      setMicPermission('denied');
    }
  };

  const visibleTranscript = showAllTranscript 
    ? transcript 
    : transcript.slice(-3);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Setup Modal */}
      <Dialog open={showModal} onOpenChange={() => {}}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Set up your mock</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="resume">Resume (optional)</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={(e) => setFormData({...formData, resume: e.target.files?.[0] || null})}
                />
                <Button
                  variant="outline"
                  onClick={() => document.getElementById('resume')?.click()}
                  className="w-full"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  {formData.resume ? formData.resume.name : 'Upload Resume'}
                </Button>
              </div>
            </div>
            <div>
              <Label htmlFor="jobDescription">Job Description (optional)</Label>
              <Textarea
                id="jobDescription"
                placeholder="Paste job description here..."
                value={formData.jobDescription}
                onChange={(e) => setFormData({...formData, jobDescription: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="role">Role</Label>
              <Select value={formData.role} onValueChange={(value) => setFormData({...formData, role: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pm">PM</SelectItem>
                  <SelectItem value="consulting">Consulting</SelectItem>
                  <SelectItem value="mba">MBA</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2">
              <Button onClick={handleSetupSubmit} className="w-full text-lg py-6" size="lg">
                Submit & start
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Type Modal */}
      <Dialog open={showTypeModal} onOpenChange={setShowTypeModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Type your response</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Textarea
              placeholder="Type your answer here..."
              value={typedMessage}
              onChange={(e) => setTypedMessage(e.target.value)}
              className="min-h-[100px]"
            />
            <div className="flex gap-2">
              <Button onClick={handleTypeSubmit} className="flex-1">Submit</Button>
              <Button variant="outline" onClick={() => setShowTypeModal(false)} className="flex-1">Cancel</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Top Bar */}
      <div className="flex items-center justify-between p-4 border-b bg-background">
        <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-semibold">Ace Interviewer</h1>
        <div className={`text-lg font-mono ${timeLeft <= 120 ? 'text-destructive' : 'text-foreground'}`}>
          {formatTime(timeLeft)}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {state === 'idle' && (
          <div className="flex-1 flex items-center justify-center p-4">
            <Button onClick={startInterview} size="lg" className="text-lg px-8 py-6">
              Start Interview
            </Button>
          </div>
        )}

        {state === 'finished' && (
          <div className="flex-1 flex items-center justify-center p-4">
            <div className="text-center space-y-4 max-w-md">
              <h2 className="text-2xl font-bold">Interview Complete!</h2>
              <p className="text-muted-foreground">
                Reviewing your performance. Your evaluation report will arrive in your inbox in under 2 minutes.
              </p>
              <div className="space-y-2">
                <Button onClick={handleSubmitInterview} size="lg" className="w-full">
                  Submit
                </Button>
                <Button variant="outline" onClick={() => navigate('/')} className="w-full">
                  Back to Home
                </Button>
              </div>
            </div>
          </div>
        )}

        {(state === 'ai_speaking' || state === 'user_listening' || state === 'processing') && (
          <>
            {/* Progress Indicators */}
            <div className="flex justify-center py-4">
              <div className="flex gap-2">
                {questions.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-8 rounded-full ${
                      index <= currentQuestion ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* AI Bubble Area */}
            <div className="flex-1 p-4 space-y-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Interviewer</p>
                <div
                  className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center ${
                    state === 'ai_speaking' ? 'animate-pulse' : 'opacity-80'
                  }`}
                >
                  <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-primary-foreground/40" />
                  </div>
                </div>
              </div>

              {/* Transcript Area */}
              <div className="space-y-3 max-w-md mx-auto">
                {visibleTranscript.map((line, index) => (
                  <div key={line.id} className="space-y-1">
                    <p className="text-xs text-muted-foreground">
                      {line.speaker === 'ai' ? 'Interviewer' : 'You'}
                    </p>
                    <p
                      className={`text-sm ${
                        line.isCurrent
                          ? 'opacity-100 font-medium'
                          : line.speaker === 'ai'
                          ? 'opacity-70'
                          : 'opacity-50'
                      }`}
                    >
                      {line.text}
                    </p>
                  </div>
                ))}
                {transcript.length > 3 && !showAllTranscript && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowAllTranscript(true)}
                    className="text-xs"
                  >
                    Show more
                  </Button>
                )}
              </div>
            </div>

            {/* Controls */}
            <div className="p-4 space-y-4">
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="icon" onClick={handlePause}>
                  {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
                </Button>
                <Button variant="outline" size="icon" onClick={handleRestart}>
                  <RotateCcw className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={handleEndSession}>
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Microphone Permission Denied */}
              {micPermission === 'denied' && (
                <div className="bg-muted p-4 rounded-lg text-center space-y-2">
                  <p className="text-sm font-medium">Microphone access needed</p>
                  <p className="text-xs text-muted-foreground">
                    Please enable microphone access in your browser settings to continue.
                  </p>
                  <Button size="sm" onClick={requestMicPermission}>
                    Enable Microphone
                  </Button>
                </div>
              )}

              {/* Mic Button */}
              {micPermission !== 'denied' && (
                <>
                  <div className="flex justify-center">
                    <div className="relative">
                      <Button
                        size="icon"
                        className={`h-20 w-20 rounded-full ${
                          state === 'ai_speaking' ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        disabled={state === 'ai_speaking'}
                        onMouseDown={handleMicPress}
                        onMouseUp={handleMicRelease}
                        onTouchStart={handleMicPress}
                        onTouchEnd={handleMicRelease}
                      >
                        {state === 'processing' ? (
                          <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                        ) : isRecording ? (
                          <div className="flex space-x-1">
                            <div className="h-2 w-1 bg-primary-foreground animate-pulse" />
                            <div className="h-4 w-1 bg-primary-foreground animate-pulse" style={{ animationDelay: '0.2s' }} />
                            <div className="h-6 w-1 bg-primary-foreground animate-pulse" style={{ animationDelay: '0.4s' }} />
                            <div className="h-4 w-1 bg-primary-foreground animate-pulse" style={{ animationDelay: '0.6s' }} />
                            <div className="h-2 w-1 bg-primary-foreground animate-pulse" style={{ animationDelay: '0.8s' }} />
                          </div>
                        ) : state === 'ai_speaking' ? (
                          <MicOff className="h-8 w-8" />
                        ) : (
                          <Mic className="h-8 w-8" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-xs text-muted-foreground mb-2">
                      {state === 'ai_speaking'
                        ? 'Wait'
                        : state === 'processing'
                        ? 'Processing'
                        : isRecording
                        ? 'Listening'
                        : 'Press to speak'}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowTypeModal(true)}
                      className="text-xs"
                    >
                      <Type className="mr-1 h-3 w-3" />
                      Tap to type
                    </Button>
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Interview;