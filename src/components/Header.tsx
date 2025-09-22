import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary">
            <Heart className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-primary">MindCare</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </a>
          <a href="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
            Dashboard
          </a>
          <a href="/resources" className="text-sm font-medium hover:text-primary transition-colors">
            Resources
          </a>
          <a href="/chat" className="text-sm font-medium hover:text-primary transition-colors">
            Support Chat
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          {/* Crisis Hotline */}
          <div className="hidden sm:flex items-center space-x-2 text-warning">
            <Phone className="h-4 w-4" />
            <span className="text-sm font-medium">Crisis: 1800-599-0019</span>
          </div>
          
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button size="sm" asChild>
            <a href="/dashboard">Get Support</a>
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 flex flex-col space-y-3">
            <a href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </a>
            <a href="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
              Dashboard
            </a>
            <a href="/resources" className="text-sm font-medium hover:text-primary transition-colors">
              Resources
            </a>
            <a href="/chat" className="text-sm font-medium hover:text-primary transition-colors">
              Support Chat
            </a>
            <div className="pt-2 border-t">
              <div className="flex items-center space-x-2 text-warning">
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">Crisis Hotline: 1800-599-0019</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;