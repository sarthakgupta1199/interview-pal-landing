import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center">
              <span className="text-white font-bold text-sm">IP</span>
            </div>
            <span className="font-bold text-xl text-foreground">Interview Pal</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("features")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection("how-it-works")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              How it works
            </button>
            <button 
              onClick={() => scrollToSection("reviews")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection("pricing")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Pricing
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button size="sm" className="font-medium">
              Try Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-border shadow-soft-lg">
            <nav className="py-4 space-y-2">
              <button 
                onClick={() => scrollToSection("features")}
                className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors font-medium"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection("how-it-works")}
                className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors font-medium"
              >
                How it works
              </button>
              <button 
                onClick={() => scrollToSection("reviews")}
                className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors font-medium"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection("pricing")}
                className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors font-medium"
              >
                Pricing
              </button>
              <div className="px-4 pt-2">
                <Button size="sm" className="w-full font-medium">
                  Try Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;