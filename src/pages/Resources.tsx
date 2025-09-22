import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  BookOpen, 
  Video, 
  Headphones, 
  FileText,
  Clock,
  Heart,
  Brain,
  Users,
  Zap
} from "lucide-react";

const Resources = () => {
  const articles = [
    {
      title: "Managing Exam Stress: A Complete Guide",
      description: "Evidence-based strategies for reducing anxiety during exam periods",
      category: "Stress Management",
      readTime: "8 min",
      difficulty: "Beginner",
      icon: Brain
    },
    {
      title: "Building Healthy Sleep Habits in College",
      description: "Practical tips for better sleep hygiene and managing sleep schedules",
      category: "Wellness", 
      readTime: "6 min",
      difficulty: "Beginner",
      icon: Heart
    },
    {
      title: "Social Anxiety: Understanding and Coping",
      description: "Comprehensive guide to managing social anxiety in academic settings",
      category: "Anxiety",
      readTime: "12 min", 
      difficulty: "Intermediate",
      icon: Users
    },
    {
      title: "Mindfulness Meditation for Students",
      description: "Introduction to mindfulness practices for mental clarity and calm",
      category: "Mindfulness",
      readTime: "10 min",
      difficulty: "Beginner", 
      icon: Zap
    }
  ];

  const videos = [
    {
      title: "5-Minute Breathing Exercise",
      description: "Quick relaxation technique for immediate stress relief",
      duration: "5:23",
      category: "Breathing",
      thumbnail: "🌸"
    },
    {
      title: "Progressive Muscle Relaxation",
      description: "Full-body relaxation technique for better sleep",
      duration: "15:42", 
      category: "Relaxation",
      thumbnail: "🧘"
    },
    {
      title: "Cognitive Behavioral Techniques",
      description: "Understanding thought patterns and emotional responses",
      duration: "22:15",
      category: "CBT",
      thumbnail: "🧠"
    }
  ];

  const podcasts = [
    {
      title: "Student Mental Health Matters",
      description: "Weekly discussions on college mental health topics",
      episodes: 45,
      category: "Education"
    },
    {
      title: "Mindful Campus",
      description: "Mindfulness and meditation for academic success",
      episodes: 32,
      category: "Mindfulness" 
    }
  ];

  const tools = [
    {
      title: "PHQ-9 Depression Screening",
      description: "Standardized assessment for depression symptoms",
      type: "Assessment",
      icon: FileText
    },
    {
      title: "GAD-7 Anxiety Scale",
      description: "Quick screening tool for generalized anxiety",
      type: "Assessment", 
      icon: FileText
    },
    {
      title: "Stress Level Calculator",
      description: "Evaluate your current stress levels and triggers",
      type: "Calculator",
      icon: Brain
    },
    {
      title: "Mood Journal Template",
      description: "Structured daily mood tracking worksheet",
      type: "Worksheet",
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Mental Health Resources</h1>
          <p className="text-muted-foreground mb-6">
            Curated collection of articles, videos, tools, and resources to support your mental wellbeing journey.
          </p>
          
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search resources..." className="pl-10" />
          </div>
        </div>

        <Tabs defaultValue="articles" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="articles" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Articles
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              Videos
            </TabsTrigger>
            <TabsTrigger value="podcasts" className="flex items-center gap-2">
              <Headphones className="h-4 w-4" />
              Podcasts
            </TabsTrigger>
            <TabsTrigger value="tools" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Tools
            </TabsTrigger>
          </TabsList>

          <TabsContent value="articles" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <article.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg group-hover:text-primary transition-colors">
                            {article.title}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {article.description}
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{article.category}</Badge>
                        <Badge variant="outline">{article.difficulty}</Badge>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </div>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      Read Article
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center text-4xl mb-3">
                      {video.thumbnail}
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {video.title}
                    </CardTitle>
                    <CardDescription>{video.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary">{video.category}</Badge>
                      <span className="text-sm text-muted-foreground">{video.duration}</span>
                    </div>
                    <Button className="w-full">
                      <Video className="mr-2 h-4 w-4" />
                      Watch Video
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="podcasts" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {podcasts.map((podcast, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                        <Headphones className="h-6 w-6 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {podcast.title}
                        </CardTitle>
                        <CardDescription>{podcast.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary">{podcast.category}</Badge>
                      <span className="text-sm text-muted-foreground">{podcast.episodes} episodes</span>
                    </div>
                    <Button className="w-full" variant="outline">
                      Listen Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tools" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tools.map((tool, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                        <tool.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {tool.title}
                        </CardTitle>
                        <CardDescription>{tool.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{tool.type}</Badge>
                      <Button>Use Tool</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Resources;