
import { PageHeader } from "@/components/page-header";
import { generateEducationalGame } from "@/ai/flows/educational-game-generation";
import { GameClient } from "./game-client";

export default async function GamesPage({ searchParams }: { searchParams: { grade?: string, topic?: string, gameType?: string } }) {
  const grade = searchParams.grade ? parseInt(searchParams.grade, 10) : undefined;
  const topic = searchParams.topic;
  const gameType = searchParams.gameType;
  
  let gameData = null;
  if (grade && topic && gameType && grade >= 1 && grade <= 10) {
    try {
      gameData = await generateEducationalGame({ gradeLevel: grade, topic, gameType: gameType as any });
    } catch (e) {
      console.error("Failed to generate game", e);
      gameData = null;
    }
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Educational Games"
        description="Instantly generate a fun game for your students."
      />
      <GameClient 
        initialGameData={gameData} 
        initialGrade={grade} 
        initialTopic={topic} 
        initialGameType={gameType} 
      />
    </div>
  );
}
