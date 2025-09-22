import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Users, Shield } from "lucide-react";
import heroImage from "@/assets/hero-mental-health.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-calm via-background to-soothing" />
      
      {/* Hero Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Students in a supportive campus environment" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border bg-card px-3 py-1 text-sm mb-6">
            <Shield className="mr-2 h-4 w-4 text-primary" />
            Anonymous & Confidential Support
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Your Mental Health
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Matters
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
            24/7 digital support system designed specifically for students. Get help, track your wellbeing, 
            and connect with a caring community.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
              <a href="/chat">
                Start Free Chat
                <MessageCircle className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/dashboard">
                Explore Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Available Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Anonymous</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">10K+</div>
              <div className="text-sm text-muted-foreground">Students Helped</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-16 h-16 rounded-full bg-secondary/10 animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;