
'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating various educational games.
 *
 * - generateEducationalGame - A function that generates an educational game based on a specified type, grade level, and topic.
 * - GenerateEducationalGameInput - The input type for the generateEducationalGame function.
 * - GenerateEducationalGameOutput - The return type for the generateEducationalGame function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GameTypeSchema = z.enum([
    'Quiz',
    'Bingo',
    'True/False',
    'Fill-in-the-blanks',
    'Quick Draw',
    'Word Association',
    'Sorting',
    'Riddles',
    'Scrambled Words',
    'Odd One Out',
    'Quick Questions'
]);

const GenerateEducationalGameInputSchema = z.object({
  gradeLevel: z
    .number()
    .describe('The grade level for which to generate the game.'),
  topic: z.string().describe('The topic for the game (e.g., "Animals", "Space").'),
  gameType: GameTypeSchema.describe('The type of educational game to generate.'),
});
export type GenerateEducationalGameInput = z.infer<
  typeof GenerateEducationalGameInputSchema
>;

const GenerateEducationalGameOutputSchema = z.object({
  game: z.object({
    type: z.string().describe("The type of game generated."),
    title: z.string().describe("The title of the game."),
    description: z.string().describe("A brief description of the game."),
    instructions: z.string().describe("Instructions for how to play the game."),
    content: z.any().describe("The structured content of the game, which will vary based on the game type.")
  }),
});
export type GenerateEducationalGameOutput = z.infer<
  typeof GenerateEducationalGameOutputSchema
>;

export async function generateEducationalGame(
  input: GenerateEducationalGameInput
): Promise<GenerateEducationalGameOutput> {
  return generateEducationalGameFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateEducationalGamePrompt',
  input: {schema: GenerateEducationalGameInputSchema},
  output: {schema: GenerateEducationalGameOutputSchema},
  prompt: `You are a creative and expert educational game designer for primary school children.

You are to generate an engaging "{{gameType}}" game for Grade {{gradeLevel}} students.
The content should be related to the topic: "{{topic}}".

Generate the game content in a structured format suitable for the chosen game type. The 'content' field in the output must be a JSON object containing the game data (e.g., questions and answers for a quiz, terms for bingo, etc.).

Ensure the title, description, and instructions are clear, concise, and appropriate for the grade level.
The game should contain a reasonable amount of content (e.g., 5-10 items).

Output the entire game as a single JSON object that strictly follows the output schema.
`,
});

const generateEducationalGameFlow = ai.defineFlow(
  {
    name: 'generateEducationalGameFlow',
    inputSchema: GenerateEducationalGameInputSchema,
    outputSchema: GenerateEducationalGameOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
