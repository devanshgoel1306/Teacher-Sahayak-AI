
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { teachAnything } from "@/ai/flows/teach-anything";
import { SahayakLogo } from "@/components/icons";

const suggestionPrompts = [
  {
    title: "Create a worksheet",
    prompt: "Create a math worksheet for grade 5 on multiplication",
    feature: "worksheets"
  },
  {
    title: "Generate a quiz",
    prompt: "Generate a science quiz about photosynthesis for grade 7",
    feature: "games"
  },
  {
    title: "Make a visual aid",
    prompt: "Make a visual aid showing the water cycle",
    feature: "visual-aids"
  },
  {
    title: "Design a game",
    prompt: "Design a word scramble game for vocabulary about animals",
    feature: "games"
  },
];

const featureKeywords: Record<string, string[]> = {
  worksheets: ['worksheet', 'exercise', 'practice sheet'],
  games: ['game', 'quiz', 'bingo', 'riddle', 'scramble', 'true/false', 'fill-in-the-blanks'],
  'visual-aids': ['visual', 'chart', 'diagram', 'image', 'drawing', 'table'],
  'knowledge-base': ['explain', 'what is', 'how do', 'why is'],
  'generate-content': ['story', 'poem', 'dialogue', 'write a'],
};

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

export function DashboardClient() {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([]);
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const detectFeature = (text: string) => {
    const lowerText = text.toLowerCase();
    for (const feature in featureKeywords) {
      for (const keyword of featureKeywords[feature]) {
        if (lowerText.includes(keyword)) {
          return feature;
        }
      }
    }
    return null;
  };
  
  const redirectToFeature = (feature: string, promptText: string) => {
    const params = new URLSearchParams();
    
    switch (feature) {
      case 'worksheets':
        // Simple parsing, can be improved
        const gradeMatch = promptText.match(/grade (\d+)/i);
        const topicMatch = promptText.match(/(on|about) (.*)/i);
        if (gradeMatch) params.set('grade', `Grade ${gradeMatch[1]}`);
        if (topicMatch) params.set('lessonTopic', topicMatch[2]);
        params.set('mode', 'manual');
        router.push(`/worksheets?${params.toString()}`);
        break;
      case 'games':
        const gameGradeMatch = promptText.match(/grade (\d+)/i);
        const gameTopicMatch = promptText.match(/(on|about) ([\w\s]+)/i);
        const gameTypeMatch = promptText.match(/(quiz|bingo|riddle|scramble|true\/false|fill-in-the-blanks)/i);

        if (gameGradeMatch) params.set('grade', gameGradeMatch[1]);
        if (gameTopicMatch) params.set('topic', gameTopicMatch[2].split(" for")[0].trim());
        if(gameTypeMatch) params.set('gameType', gameTypeMatch[1]);
        router.push(`/games?${params.toString()}`);
        break;
      case 'visual-aids':
        params.set('description', promptText);
        router.push(`/visual-aids?${params.toString()}`);
        break;
      default:
         router.push(`/${feature}`);
    }
  };

  const processPrompt = async (promptText: string) => {
    if (!promptText.trim()) return;

    setIsLoading(true);
    setMessages(prev => [...prev, { id: Date.now(), text: promptText, isUser: true }]);
    setPrompt("");
    
    const matchedFeature = detectFeature(promptText);

    if (matchedFeature) {
        redirectToFeature(matchedFeature, promptText);
        // No need to set loading to false here as we are navigating away
        return;
    }

    // If no specific feature, use the general AI assistant
    try {
      const result = await teachAnything({ query: promptText });
      setMessages(prev => [...prev, { id: Date.now() + 1, text: result.response, isUser: false }]);
    } catch (error) {
      console.error("AI chat error:", error);
      setMessages(prev => [...prev, { id: Date.now() + 1, text: "Sorry, I ran into a problem. Please try again.", isUser: false }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full w-full max-w-4xl mx-auto">
      <div className="flex-1 pb-24">
        {messages.length === 0 ? (
          <div className="text-center py-12">
            <h1 className="text-4xl font-bold font-headline mb-4">Salute, Super Teacher! 👋</h1>
            <p className="text-muted-foreground text-lg">How can I assist you with your teaching today?</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
              {suggestionPrompts.map((p) => (
                <Card 
                    key={p.title} 
                    className="p-4 text-left hover:bg-muted cursor-pointer transition-colors"
                    onClick={() => redirectToFeature(p.feature, p.prompt)}
                >
                    <CardContent className="p-0">
                      <h3 className="font-semibold">{p.title}</h3>
                      <p className="text-sm text-muted-foreground">{p.prompt}</p>
                    </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6 pt-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                {!msg.isUser && <SahayakLogo className="w-8 h-8 mr-2 shrink-0" />}
                <div className={`px-4 py-3 rounded-2xl max-w-xl ${msg.isUser ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-muted rounded-bl-none'}`}>
                  <pre className="whitespace-pre-wrap font-body text-base">{msg.text}</pre>
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                 <SahayakLogo className="w-8 h-8 mr-2 shrink-0" />
                 <div className="px-4 py-3 rounded-2xl max-w-xl bg-muted rounded-bl-none flex items-center">
                    <Loader2 className="h-5 w-5 animate-spin"/>
                 </div>
               </div>
            )}
          </div>
        )}
      </div>
      
      <div className="fixed bottom-0 right-0 left-0 md:left-[14rem] bg-background/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Ask me anything about teaching..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') processPrompt(prompt); }}
              className="w-full p-6 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary pr-16"
              disabled={isLoading}
              suppressHydrationWarning
            />
            <Button
              size="icon"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full"
              onClick={() => processPrompt(prompt)}
              disabled={isLoading || !prompt.trim()}
            >
              {isLoading ? <Loader2 className="animate-spin" /> : <Send />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
