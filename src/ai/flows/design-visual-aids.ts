'use server';
/**
 * @fileOverview A visual aid design AI agent.
 *
 * - drawLineDrawingWaterCycle - A function that handles the visual aid design process.
 * - DrawLineDrawingWaterCycleInput - The input type for the drawLineDrawingWaterCycle function.
 * - DrawLineDrawingWaterCycleOutput - The return type for the drawLineDrawingWaterCycle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DrawLineDrawingWaterCycleInputSchema = z.object({
  description: z.string().describe('The description of the visual aid.'),
});
export type DrawLineDrawingWaterCycleInput = z.infer<typeof DrawLineDrawingWaterCycleInputSchema>;

const DrawLineDrawingWaterCycleOutputSchema = z.object({
  imageUrl: z
    .string()
    .describe(
      'A url of the image generated.  It will be a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.'      
    ),
});
export type DrawLineDrawingWaterCycleOutput = z.infer<typeof DrawLineDrawingWaterCycleOutputSchema>;

export async function drawLineDrawingWaterCycle(input: DrawLineDrawingWaterCycleInput): Promise<DrawLineDrawingWaterCycleOutput> {
  return drawLineDrawingWaterCycleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'drawLineDrawingWaterCyclePrompt',
  input: {schema: DrawLineDrawingWaterCycleInputSchema},
  output: {schema: DrawLineDrawingWaterCycleOutputSchema},
  prompt: `You are an expert in generating simple, black-and-white line drawings that are easy to replicate on a blackboard.

  Generate a simple, black-and-white line drawing of the following:

  Description: {{{description}}}
  `,
});

const drawLineDrawingWaterCycleFlow = ai.defineFlow(
  {
    name: 'drawLineDrawingWaterCycleFlow',
    inputSchema: DrawLineDrawingWaterCycleInputSchema,
    outputSchema: DrawLineDrawingWaterCycleOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: input.description,
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    return {imageUrl: media!.url!};
  }
);
