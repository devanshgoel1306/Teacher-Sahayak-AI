
'use server';

/**
 * @fileOverview A general purpose teaching assistant flow.
 *
 * - teachAnything - A function that provides general teaching assistance.
 * - TeachAnythingInput - The input type for the teachAnything function.
 * - TeachAnythingOutput - The return type for the teachAnything function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TeachAnythingInputSchema = z.object({
  query: z.string().describe('The user\'s question or request.'),
});
export type TeachAnythingInput = z.infer<typeof TeachAnythingInputSchema>;

const TeachAnythingOutputSchema = z.object({
  response: z.string().describe('The AI\'s response to the user.'),
});
export type TeachAnythingOutput = z.infer<typeof TeachAnythingOutputSchema>;

export async function teachAnything(input: TeachAnythingInput): Promise<TeachAnythingOutput> {
  return teachAnythingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'teachAnythingPrompt',
  input: {schema: TeachAnythingInputSchema},
  output: {schema: TeachAnythingOutputSchema},
  prompt: `You are Sahayak, a helpful AI teaching assistant for educators in India. Your goal is to provide concise, practical, and helpful responses to teacher's questions. You can help with lesson planning, classroom management strategies, creating educational content, and student engagement techniques.

User prompt: {{{query}}}`,
});

const teachAnythingFlow = ai.defineFlow(
  {
    name: 'teachAnythingFlow',
    inputSchema: TeachAnythingInputSchema,
    outputSchema: TeachAnythingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
