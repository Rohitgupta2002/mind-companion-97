import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  BarChart3, 
  Users, 
  AlertCircle, 
  BookOpen, 
  Calendar,
  Brain,
  Gamepad2
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "AI Mental Health Buddy",
      description: "24/7 AI-powered chatbot providing instant emotional support and guidance",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: BarChart3,
      title: "Mood Tracker & Analytics",
      description: "Track your daily mood and visualize mental health patterns over time",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: AlertCircle,
      title: "Crisis Detection & SOS",
      description: "Immediate help when you need it most with emergency support activation",
      color: "text-warning",
      bgColor: "bg-warning/10"
    },
    {
      icon: Users,
      title: "Anonymous Community",
      description: "Connect with peers in safe, moderated discussion forums",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: BookOpen,
      title: "Mental Health Resources",
      description: "Curated articles, videos, and tools for stress management and wellness",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Calendar,
      title: "Counselor Appointments",
      description: "Easy booking with certified mental health professionals",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Brain,
      title: "Self-Assessment Tools",
      description: "Standardized screening tools (PHQ-9, GAD-7) for mental health insights",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      icon: Gamepad2,
      title: "Gamified Wellness",
      description: "Interactive stress-relief activities and reward systems for consistency",
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-calm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Mental Health Support
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to maintain and improve your mental wellbeing, 
            all in one secure platform designed for students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50">
              <CardHeader className="pb-3">
                <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <a href="/resources">Explore All Features</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;