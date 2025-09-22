import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Send, Bot, User, AlertTriangle, Heart } from "lucide-react";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI Mental Health Buddy. I'm here to provide support, listen to your concerns, and help you find resources. How are you feeling today?",
      sender: "ai",
      timestamp: "2:30 PM",
      mood: null
    },
    {
      id: 2,
      text: "Hi there. I've been feeling pretty overwhelmed with my studies lately. I have exams coming up and I'm not sleeping well.",
      sender: "user",
      timestamp: "2:32 PM",
      mood: "stressed"
    },
    {
      id: 3,
      text: "I understand that exam stress can be really challenging and affect your sleep. It's completely normal to feel overwhelmed during this time. Let's break this down - what specific aspects of your studies are causing you the most stress?",
      sender: "ai",
      timestamp: "2:32 PM",
      mood: null
    }
  ]);

  const quickResponses = [
    "I'm feeling anxious",
    "I need help with stress",
    "I'm feeling lonely",
    "I'm having trouble sleeping",
    "I need someone to talk to"
  ];

  const handleSend = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: "user",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        mood: null
      };
      setMessages([...messages, newMessage]);
      setMessage("");
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          text: "Thank you for sharing that with me. I'm here to support you through this. Can you tell me more about what you're experiencing?",
          sender: "ai",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          mood: null
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  const handleQuickResponse = (response: string) => {
    setMessage(response);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <div className="flex-1 container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full">
          {/* Chat Area */}
          <div className="lg:col-span-3">
            <Card className="h-full flex flex-col">
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">AI Mental Health Buddy</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        Online • Confidential & Secure
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                    <Heart className="w-3 h-3 mr-1" />
                    Safe Space
                  </Badge>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 p-4 overflow-y-auto space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      msg.sender === 'user' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted'
                    }`}>
                      <div className="flex items-start gap-2">
                        {msg.sender === 'ai' && (
                          <Bot className="w-4 h-4 mt-1 text-primary" />
                        )}
                        <div className="flex-1">
                          <p className="text-sm">{msg.text}</p>
                          <p className="text-xs opacity-70 mt-1">{msg.timestamp}</p>
                        </div>
                        {msg.sender === 'user' && (
                          <User className="w-4 h-4 mt-1 text-primary-foreground" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>

              {/* Input Area */}
              <div className="border-t p-4">
                {/* Quick Responses */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {quickResponses.map((response, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickResponse(response)}
                      className="text-xs"
                    >
                      {response}
                    </Button>
                  ))}
                </div>

                {/* Message Input */}
                <div className="flex gap-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    className="flex-1"
                  />
                  <Button onClick={handleSend} size="icon">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Crisis Alert */}
            <Card className="border-warning bg-warning/5">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-warning" />
                  Need Immediate Help?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" className="w-full text-xs border-warning text-warning hover:bg-warning/10">
                  Crisis Hotline
                </Button>
                <Button variant="outline" size="sm" className="w-full text-xs">
                  Emergency Services
                </Button>
              </CardContent>
            </Card>

            {/* Chat Guidelines */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Chat Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-muted-foreground space-y-2">
                <p>• This is a safe, confidential space</p>
                <p>• AI responses are supportive but not medical advice</p>
                <p>• For emergencies, contact crisis hotlines</p>
                <p>• Your privacy is protected</p>
              </CardContent>
            </Card>

            {/* Resources */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Helpful Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" size="sm" className="w-full justify-start text-xs">
                  Breathing Exercises
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-xs">
                  Anxiety Management
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-xs">
                  Sleep Hygiene
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-xs">
                  Study Tips
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;