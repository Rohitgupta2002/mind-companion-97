import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Phone, MessageCircle, Users, MapPin } from "lucide-react";

const CrisisSupport = () => {
  const hotlines = [
    {
      name: "National Suicide Prevention Lifeline",
      number: "1800-599-0019",
      description: "24/7 crisis counseling and mental health referrals",
      icon: Phone
    },
    {
      name: "KIRAN Mental Health Helpline",
      number: "1800-599-0019", 
      description: "Free, confidential support for mental health crises",
      icon: MessageCircle
    },
    {
      name: "Vandrevala Foundation Helpline",
      number: "+91-99996-66555",
      description: "24/7 helpline for mental health support and crisis intervention",
      icon: Users
    },
    {
      name: "Campus Counseling Center",
      number: "Your Campus Extension",
      description: "Immediate support from your institution's counseling team",
      icon: MapPin
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-warning/5 to-destructive/5 border-t border-warning/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-warning/10 mb-6">
            <AlertTriangle className="h-8 w-8 text-warning" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-warning-foreground">
            Crisis Support Available 24/7
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            If you're having thoughts of self-harm or suicide, please reach out immediately. 
            You're not alone, and help is always available.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {hotlines.map((hotline, index) => (
            <Card key={index} className="border-warning/20 bg-card/50 backdrop-blur">
              <CardHeader className="pb-3">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center">
                    <hotline.icon className="h-5 w-5 text-warning" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg text-warning-foreground">{hotline.name}</CardTitle>
                    <div className="text-2xl font-bold text-warning mt-1">{hotline.number}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{hotline.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-warning text-warning-foreground hover:bg-warning/90">
              <Phone className="mr-2 h-5 w-5" />
              Emergency Call
            </Button>
            <Button size="lg" variant="outline" className="border-warning text-warning hover:bg-warning/10">
              <MessageCircle className="mr-2 h-5 w-5" />
              Crisis Chat
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            All crisis support is free, confidential, and available 24/7
          </p>
        </div>
      </div>
    </section>
  );
};

export default CrisisSupport;