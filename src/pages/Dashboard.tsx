import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  MessageCircle, 
  Calendar, 
  Smile, 
  Frown, 
  Meh,
  TrendingUp,
  Award,
  Target
} from "lucide-react";

const Dashboard = () => {
  const moodData = [
    { date: "Mon", mood: 4, color: "bg-success" },
    { date: "Tue", mood: 3, color: "bg-warning" },
    { date: "Wed", mood: 5, color: "bg-success" },
    { date: "Thu", mood: 2, color: "bg-destructive" },
    { date: "Fri", mood: 4, color: "bg-success" },
    { date: "Sat", mood: 5, color: "bg-success" },
    { date: "Sun", mood: 4, color: "bg-success" },
  ];

  const achievements = [
    { title: "7 Day Streak", icon: Award, earned: true },
    { title: "Mood Logger", icon: Target, earned: true },
    { title: "Resource Explorer", icon: BarChart3, earned: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Good morning, Alex! 👋</h1>
          <p className="text-muted-foreground">How are you feeling today?</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Mood Check */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smile className="h-5 w-5 text-primary" />
                  Quick Mood Check
                </CardTitle>
                <CardDescription>How are you feeling right now?</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <Button variant="outline" size="lg" className="flex-1 mx-1">
                    <Frown className="h-5 w-5 text-destructive mr-2" />
                    Poor
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1 mx-1">
                    <Meh className="h-5 w-5 text-warning mr-2" />
                    Okay
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1 mx-1">
                    <Smile className="h-5 w-5 text-success mr-2" />
                    Great
                  </Button>
                </div>
                <Button className="w-full">Log Today's Mood</Button>
              </CardContent>
            </Card>

            {/* Mood Trends */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-secondary" />
                  Weekly Mood Trends
                </CardTitle>
                <CardDescription>Your emotional wellbeing over the past 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between h-32 mb-4">
                  {moodData.map((day, index) => (
                    <div key={index} className="flex flex-col items-center flex-1">
                      <div 
                        className={`w-8 mb-2 rounded-t ${day.color}`}
                        style={{ height: `${day.mood * 20}%` }}
                      />
                      <span className="text-xs text-muted-foreground">{day.date}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="h-4 w-4 text-success" />
                  <span className="text-success">Trending upward this week</span>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Activities */}
            <Card>
              <CardHeader>
                <CardTitle>Recommended for You</CardTitle>
                <CardDescription>Based on your recent mood patterns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 rounded-lg bg-calm border">
                  <h4 className="font-medium mb-1">5-Minute Breathing Exercise</h4>
                  <p className="text-sm text-muted-foreground mb-2">Perfect for reducing stress and anxiety</p>
                  <Button size="sm" variant="outline">Start Now</Button>
                </div>
                <div className="p-3 rounded-lg bg-soothing border">
                  <h4 className="font-medium mb-1">Gratitude Journal</h4>
                  <p className="text-sm text-muted-foreground mb-2">Reflect on positive moments from your day</p>
                  <Button size="sm" variant="outline">Write Entry</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat with AI Buddy
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Counseling
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Take Assessment
                </Button>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
                <CardDescription>Your wellness journey milestones</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`p-2 rounded ${achievement.earned ? 'bg-success/10' : 'bg-muted'}`}>
                      <achievement.icon className={`h-4 w-4 ${achievement.earned ? 'text-success' : 'text-muted-foreground'}`} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{achievement.title}</p>
                    </div>
                    {achievement.earned && (
                      <Badge variant="secondary" className="bg-success/10 text-success">
                        Earned
                      </Badge>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Wellness Score */}
            <Card>
              <CardHeader>
                <CardTitle>Wellness Score</CardTitle>
                <CardDescription>Overall mental health indicator</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-success mb-2">78</div>
                  <Badge variant="secondary" className="bg-success/10 text-success">Good</Badge>
                </div>
                <Progress value={78} className="mb-2" />
                <p className="text-xs text-muted-foreground text-center">
                  Based on mood tracking, activity completion, and resource engagement
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;