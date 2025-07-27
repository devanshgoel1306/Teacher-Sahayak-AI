'use server';
/**
 * @fileOverview A visual aid generation AI agent.
 *
 * - designVisualAid - A function that handles the visual aid generation process.
 * - DesignVisualAidInput - The input type for the designVisualAid function.
 * - DesignVisualAidOutput - The return type for the designVisualAid function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DesignVisualAidInputSchema = z.object({
  description: z.string().describe('The description of the visual aid.'),
  gradeLevel: z.string().optional().describe('The target grade level.'),
});
export type DesignVisualAidInput = z.infer<typeof DesignVisualAidInputSchema>;

const TableContentSchema = z.object({
  headers: z.array(z.string()).describe('The headers for the table columns.'),
  rows: z.array(z.array(z.string())).describe('The rows of the table, where each inner array represents a row.'),
  caption: z.string().optional().describe('A brief description of the table.'),
});

const DesignVisualAidOutputSchema = z.object({
  visualAid: z.union([
    z.object({
      type: z.literal('image'),
      data: z.string().describe("A url of the image generated. It will be a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
    }),
    z.object({
      type: z.literal('table'),
      data: TableContentSchema,
    }),
    z.object({
      type: z.literal('text'),
      data: z.string().describe('A simple text explanation or list.'),
    }),
  ]),
});
export type DesignVisualAidOutput = z.infer<typeof DesignVisualAidOutputSchema>;

export async function designVisualAid(input: DesignVisualAidInput): Promise<DesignVisualAidOutput> {
  return designVisualAidFlow(input);
}

const chooseFormatPrompt = ai.definePrompt({
    name: 'chooseVisualAidFormatPrompt',
    input: { schema: DesignVisualAidInputSchema },
    output: { schema: z.object({
        format: z.enum(['image', 'table', 'text']),
        reasoning: z.string(),
        imagePrompt: z.string().optional().describe("If format is 'image', a concise prompt for an image generation model to create a simple, black-and-white line drawing that is easy to replicate on a blackboard."),
    })},
    prompt: `You are an AI assistant that determines the best visual aid format for a teacher's request.

Analyze the user's description to determine the best format for the visual aid.
- If the request is for a drawing, a visual representation of a concept (like 'water cycle'), or something that is inherently visual, choose 'image'. Then, create a new, concise prompt in the 'imagePrompt' field to generate a simple, black-and-white line drawing that is easy to replicate on a blackboard.
- If the request is for a comparison, a list of properties, or data that fits a structured format (like 'compare solids, liquids, and gases'), choose 'table'.
- For anything else, provide a simple text explanation and choose 'text'.

User Request:
Description: {{{description}}}
Grade Level: {{{gradeLevel}}}

Respond with the chosen format and reasoning.
`,
});

const generateTablePrompt = ai.definePrompt({
    name: 'generateTablePrompt',
    input: { schema: DesignVisualAidInputSchema },
    output: { schema: TableContentSchema },
    prompt: `You are an AI assistant that generates simple tables for teachers. Create a table for the following request:
Description: {{{description}}}
Grade Level: {{{gradeLevel}}}
`,
});

const generateTextPrompt = ai.definePrompt({
    name: 'generateTextPrompt',
    input: { schema: DesignVisualAidInputSchema },
    output: { schema: z.string() },
    prompt: `You are an AI assistant that generates simple text explanations for teachers. Create a simple text explanation for the following request:
Description: {{{description}}}
Grade Level: {{{gradeLevel}}}
`,
});


const designVisualAidFlow = ai.defineFlow(
  {
    name: 'designVisualAidFlow',
    inputSchema: DesignVisualAidInputSchema,
    outputSchema: DesignVisualAidOutputSchema,
  },
  async input => {
    // Step 1: Decide the format
    const { output: formatChoice } = await chooseFormatPrompt(input);
    if (!formatChoice) {
        throw new Error("Could not decide on a visual aid format.");
    }

    // Step 2: Generate content based on the chosen format
    switch (formatChoice.format) {
        case 'image':
            if (!formatChoice.imagePrompt) {
                throw new Error("Image format was chosen, but no image prompt was generated.");
            }
            const { media } = await ai.generate({
                model: 'googleai/gemini-2.0-flash-preview-image-generation',
                prompt: formatChoice.imagePrompt,
                config: {
                    responseModalities: ['TEXT', 'IMAGE'],
                },
            });

            if (!media?.url) {
                // Fallback if image generation fails
                return { visualAid: { type: 'text', data: "Sorry, I couldn't generate the image. Please try again." }};
            }
            return { visualAid: { type: 'image', data: media.url } };

        case 'table':
            const { output: tableData } = await generateTablePrompt(input);
             if (!tableData) {
                throw new Error("Failed to generate table data.");
            }
            return { visualAid: { type: 'table', data: tableData } };

        case 'text':
            const { output: textData } = await generateTextPrompt(input);
            if (!textData) {
                throw new Error("Failed to generate text data.");
            }
            return { visualAid: { type: 'text', data: textData } };

        default:
             return { visualAid: { type: 'text', data: "Sorry, I could not generate the visual aid. Please try a different description." }};
    }
  }
);
