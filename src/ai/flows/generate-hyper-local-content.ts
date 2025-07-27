'use server';
/**
 * @fileOverview Generates hyper-local content in a specified language.
 *
 * - generateHyperLocalContent - A function that generates content.
 * - GenerateHyperLocalContentInput - The input type for the generateHyperLocalContent function.
 * - GenerateHyperLocalContentOutput - The return type for the generateHyperLocalContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHyperLocalContentInputSchema = z.object({
  topic: z.string().describe('The topic of the content to generate.'),
  language: z.string().describe('The language to generate the content in.'),
  contentType: z.string().describe('The type of content to generate (e.g., story, poem, explanation).'),
  gradeLevel: z.string().optional().describe('The grade level the content is for.'),
});
export type GenerateHyperLocalContentInput = z.infer<typeof GenerateHyperLocalContentInputSchema>;

const GenerateHyperLocalContentOutputSchema = z.object({
  content: z.string().describe('The generated content.'),
});
export type GenerateHyperLocalContentOutput = z.infer<typeof GenerateHyperLocalContentOutputSchema>;

export async function generateHyperLocalContent(input: GenerateHyperLocalContentInput): Promise<GenerateHyperLocalContentOutput> {
  return generateHyperLocalContentFlow(input);
}

const generateHyperLocalContentFlow = ai.defineFlow(
  {
    name: 'generateHyperLocalContentFlow',
    inputSchema: GenerateHyperLocalContentInputSchema,
    outputSchema: GenerateHyperLocalContentOutputSchema,
  },
  async (input) => {
    const { output } = await ai.generate({
      prompt: `You are a content creator specializing in generating hyper-local content for teachers in India.

You will generate content based on the topic, language, content type, and grade level specified by the teacher.

Topic: ${input.topic}
Language: ${input.language}
Content Type: ${input.contentType}
Grade Level: ${input.gradeLevel}

Generate the content in a way that is culturally relevant and age-appropriate.

Make sure the content is factually accurate and grammatically correct.

Content:`,
      output: {
        schema: GenerateHyperLocalContentOutputSchema
      }
    });

    return output!;
  }
);
