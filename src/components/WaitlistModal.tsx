import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import confetti from "canvas-confetti";
import catTyping from "@/assets/cat-typing.png";
import catDancing from "@/assets/cat-dancing.png";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const triggerConfetti = () => {
    const duration = 1500;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['hsl(var(--primary))', 'hsl(var(--accent))', 'hsl(var(--success))']
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['hsl(var(--primary))', 'hsl(var(--accent))', 'hsl(var(--success))']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    triggerConfetti();
  };

  const handleClose = () => {
    onClose();
    // Reset state after animation completes
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-background rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 animate-scale-in">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="text-center">
          {/* Cat animation */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 relative">
              <img 
                src={catTyping} 
                alt="Cat typing" 
                className="w-full h-full object-contain animate-pulse"
              />
            </div>
          </div>

          {!isSubmitted ? (
            <>
              {/* Pre-submission state */}
              <h2 className="text-2xl font-bold mb-3 font-manrope">
                Your future self will thank you
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Drop your email to be first in line when we go live.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="text-center text-lg py-3"
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Joining..." : "Count me in 🚀"}
                </Button>
              </form>
            </>
          ) : (
            <>
              {/* Post-submission state */}
              <div className="animate-fade-in">
                {/* Dancing cat for success */}
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 relative">
                    <img 
                      src={catDancing} 
                      alt="Cat dancing" 
                      className="w-full h-full object-contain animate-bounce"
                    />
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-3 font-manrope">
                  You're officially on the list 🎉
                </h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  We'll let you know the moment we're ready for you. Until then, maybe practice your "I aced that interview" smile.
                </p>
                
                <Button 
                  size="lg" 
                  className="w-full text-lg py-3"
                  onClick={handleClose}
                >
                  Nice, can't wait!
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WaitlistModal;