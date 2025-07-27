'use server';

/**
 * @fileOverview A flow for providing instant explanations to complex questions in Telugu.
 *
 * - explainPlantFoodTelugu - A function that handles the plant food explanation process.
 * - ExplainPlantFoodTeluguInput - The input type for the explainPlantFoodTelugu function.
 * - ExplainPlantFoodTeluguOutput - The return type for the explainPlantFoodTelugu function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExplainPlantFoodTeluguInputSchema = z.object({
  query: z.string().describe('The question about how plants make their food.'),
});
export type ExplainPlantFoodTeluguInput = z.infer<typeof ExplainPlantFoodTeluguInputSchema>;

const ExplainPlantFoodTeluguOutputSchema = z.object({
  explanation: z.string().describe('The explanation of how plants make their food in Telugu.'),
});
export type ExplainPlantFoodTeluguOutput = z.infer<typeof ExplainPlantFoodTeluguOutputSchema>;

export async function explainPlantFoodTelugu(input: ExplainPlantFoodTeluguInput): Promise<ExplainPlantFoodTeluguOutput> {
  return explainPlantFoodTeluguFlow(input);
}

const prompt = ai.definePrompt({
  name: 'explainPlantFoodTeluguPrompt',
  input: {schema: ExplainPlantFoodTeluguInputSchema},
  output: {schema: ExplainPlantFoodTeluguOutputSchema},
  prompt: `You are an expert in explaining scientific concepts in simple terms.
  A student has asked how plants make their food. Explain it in Telugu using an analogy that a child can understand.
  \n  Question: {{{query}}}`,
});

const explainPlantFoodTeluguFlow = ai.defineFlow(
  {
    name: 'explainPlantFoodTeluguFlow',
    inputSchema: ExplainPlantFoodTeluguInputSchema,
    outputSchema: ExplainPlantFoodTeluguOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
