
"use client";

import { useState, useMemo, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, ChevronDown, ChevronUp } from "lucide-react";
import type { GenerateEducationalGameOutput } from "@/ai/flows/educational-game-generation";
import { Input } from "@/components/ui/input";

interface GameClientProps {
  initialGameData: GenerateEducationalGameOutput | null;
  initialGrade?: number;
  initialTopic?: string;
  initialGameType?: string;
}

const gameTypes = [
  { id: 'Quiz', name: 'Quiz', description: 'Multiple choice questions' },
  { id: 'Bingo', name: 'Bingo Cards', description: 'Educational bingo with terms' },
  { id: 'True/False', name: 'True/False Quiz', description: 'True or false statements' },
  { id: 'Fill-in-the-blanks', name: 'Fill in the Blanks', description: 'Complete sentences with missing words' },
  { id: 'Quick Draw', name: 'Quick Draw', description: 'Draw and guess concepts' },
  { id: 'Word Association', name: 'Word Association', description: 'Related words to topic' },
  { id: 'Sorting', name: 'Sorting Game', description: 'Categorize items into groups' },
  { id: 'Riddles', name: 'Riddles', description: 'Educational riddles with answers' },
  { id: 'Scrambled Words', name: 'Scrambled Words', description: 'Unscramble key terms' },
  { id: 'Odd One Out', name: 'Odd One Out', description: 'Find which item doesn\'t belong' },
  { id: 'Quick Questions', name: 'Quick Questions', description: 'Rapid-fire yes/no questions' }
];

const CollapsibleSection = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-2 font-semibold text-left bg-muted rounded-t-md hover:bg-muted/80"
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </button>
      {isOpen && <div className="p-4 border border-t-0 rounded-b-md">{children}</div>}
    </div>
  );
};


const RenderValue = ({ data, isAnswerKey }: { data: any; isAnswerKey?: boolean }) => {
  if (data === null || data === undefined) return null;
  if (typeof data === 'string' || typeof data === 'number' || typeof data === 'boolean') {
    return <p className="text-muted-foreground">{String(data)}</p>;
  }

  if (Array.isArray(data)) {
    return (
      <div className="flex flex-col gap-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-start gap-2 p-2 border rounded-md bg-background">
            <span className="font-semibold">{index + 1}.</span>
            <div className="flex-1">
              <RenderValue data={item} isAnswerKey={isAnswerKey} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (typeof data === 'object') {
    const answerKeys = ['answer', 'solution', 'correctAnswer', 'options'];
    const mainContentEntries = Object.entries(data).filter(([key]) => !answerKeys.includes(key.toLowerCase()));
    const answerContentEntries = Object.entries(data).filter(([key]) => answerKeys.includes(key.toLowerCase()));
    
    return (
      <div className="flex flex-col gap-3">
        {mainContentEntries.map(([key, value]) => (
          <div key={key}>
            <p className="font-semibold capitalize text-foreground">{key.replace(/_/g, ' ')}:</p>
            <div className="pl-2 mt-1">
              <RenderValue data={value} isAnswerKey={isAnswerKey} />
            </div>
          </div>
        ))}
        {isAnswerKey && answerContentEntries.map(([key, value]) => (
           <div key={key}>
            <p className="font-semibold capitalize text-foreground">{key.replace(/_/g, ' ')}:</p>
            <div className="pl-2 mt-1">
              <RenderValue data={value} isAnswerKey={isAnswerKey} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
};


const GenericGameDisplay = ({ gameData }: { gameData: any }) => {
  const content = gameData.content;
  
  if (!content) {
    return <p>No game content available.</p>;
  }

  const answerKeys = ['answer', 'answers', 'solution', 'solutions', 'answerkey'];
  const answerData = Object.entries(content).find(([key]) => answerKeys.includes(key.toLowerCase()));

  const mainContent: Record<string, any> = {};
  if (answerData) {
      for (const key in content) {
          if (key.toLowerCase() !== answerData[0].toLowerCase()) {
              mainContent[key] = content[key];
          }
      }
  } else {
      Object.assign(mainContent, content);
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Game Content</CardTitle>
        </CardHeader>
        <CardContent>
          <RenderValue data={mainContent} />
        </CardContent>
      </Card>

      {answerData && (
        <CollapsibleSection title="Answer Key">
          <RenderValue data={answerData[1]} isAnswerKey={true} />
        </CollapsibleSection>
      )}
    </div>
  );
}


export function GameClient({ initialGameData, initialGrade, initialTopic, initialGameType }: GameClientProps) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [grade, setGrade] = useState<string>(initialGrade?.toString() ?? "");
  const [topic, setTopic] = useState<string>(initialTopic ?? "");
  const [gameType, setGameType] = useState<string>(initialGameType ?? "");
  
  const [gameData, setGameData] = useState(initialGameData);

  useEffect(() => {
    if (initialGameData) {
      setPending(false);
    }
    setGameData(initialGameData);
  }, [initialGameData]);

  const handleGenerate = () => {
    if (grade && topic && gameType) {
      setPending(true);
      const params = new URLSearchParams();
      params.set('grade', grade);
      params.set('topic', topic);
      params.set('gameType', gameType);
      router.push(`/games?${params.toString()}`);
    }
  };
  
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Game Setup</CardTitle>
          <CardDescription>Select a grade, topic, and game type to generate a new educational game.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row items-end gap-2">
             <div className="grid w-full max-w-xs gap-1.5">
              <label htmlFor="grade-select">Target Grade Level</label>
              <Select value={grade} onValueChange={setGrade}>
                <SelectTrigger id="grade-select">
                  <SelectValue placeholder="Select Grade" />
                </SelectTrigger>
                <SelectContent>
                  {[...Array(10)].map((_, i) => (
                    <SelectItem key={i + 1} value={(i + 1).toString()}>Grade {i + 1}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
             <div className="grid w-full max-w-xs gap-1.5">
               <label htmlFor="topic-input">Topic</label>
               <Input id="topic-input" placeholder="e.g., Animals, Space" value={topic} onChange={(e) => setTopic(e.target.value)} />
            </div>
             <div className="grid w-full max-w-xs gap-1.5">
                <label htmlFor="game-type-select">Game Type</label>
                <Select value={gameType} onValueChange={setGameType}>
                    <SelectTrigger id="game-type-select">
                        <SelectValue placeholder="Select Game Type" />
                    </SelectTrigger>
                    <SelectContent>
                        {gameTypes.map((type) => (
                            <SelectItem key={type.id} value={type.id}>{type.name}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
             </div>
            <Button onClick={handleGenerate} disabled={!grade || !topic || !gameType || pending}>
              {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Generate Game
            </Button>
          </div>
        </CardContent>
      </Card>

      {pending && !gameData && (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2">
              <Loader2 className="h-5 w-5 animate-spin text-primary" />
              <span>Creating your game...</span>
            </CardTitle>
          </CardHeader>
           <CardContent>
            <div className="space-y-2">
               <div className="h-8 bg-muted rounded animate-pulse w-full"></div>
               <div className="h-8 bg-muted rounded animate-pulse w-5/6"></div>
            </div>
          </CardContent>
        </Card>
      )}

      {gameData && (
        <Card>
            <CardHeader className="mb-4">
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle className="font-headline">{gameData.game.title}</CardTitle>
                        <CardDescription>{gameData.game.instructions}</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
               <GenericGameDisplay gameData={gameData.game} />
            </CardContent>
        </Card>
      )}
    </>
  );
}
