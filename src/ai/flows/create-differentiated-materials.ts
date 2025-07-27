
'use server';

/**
 * @fileOverview This file contains the Genkit flow for creating differentiated worksheets from an image of a textbook page or from a topic.
 *
 * - createDifferentiatedMaterials - A function that handles the creation of differentiated worksheets.
 * - CreateDifferentiatedMaterialsInput - The input type for the createDifferentiatedMaterials function.
 * - CreateDifferentiatedMaterialsOutput - The return type for the createDifferentiatedMaterials function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const gradeEnum = z.enum([
  'Grade 1',
  'Grade 2',
  'Grade 3',
  'Grade 4',
  'Grade 5',
  'Grade 6',
  'Grade 7',
  'Grade 8',
  'Grade 9',
  'Grade 10',
]);

const CreateDifferentiatedMaterialsInputSchema = z.object({
  photoDataUris: z
    .array(z.string())
    .optional()
    .describe(
      "Photos of a textbook page, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  gradeLevels: z
    .array(gradeEnum)
    .describe('The grade levels for which to generate differentiated worksheets.'),
  subject: z
    .string()
    .optional()
    .describe('The subject for the worksheet (e.g., Math, Science).'),
  lessonTopic: z
    .string()
    .optional()
    .describe('The specific lesson or topic for the worksheet.'),
  numberOfQuestionsPerGrade: z
    .number()
    .optional()
    .describe('The number of questions to generate per grade (optional).'),
});
export type CreateDifferentiatedMaterialsInput = z.infer<
  typeof CreateDifferentiatedMaterialsInputSchema
>;

const CreateDifferentiatedMaterialsOutputSchema = z.object({
  worksheets: z.array(
    z.object({
      gradeLevel: gradeEnum,
      worksheetContent: z.string().describe('The content of the generated worksheet.'),
      answerKey: z.string().describe('The answer key for the generated worksheet.'),
    })
  ),
});
export type CreateDifferentiatedMaterialsOutput = z.infer<
  typeof CreateDifferentiatedMaterialsOutputSchema
>;

export async function createDifferentiatedMaterials(
  input: CreateDifferentiatedMaterialsInput
): Promise<CreateDifferentiatedMaterialsOutput> {
  return createDifferentiatedMaterialsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'createDifferentiatedMaterialsPrompt',
  input: {schema: CreateDifferentiatedMaterialsInputSchema},
  output: {schema: CreateDifferentiatedMaterialsOutputSchema},
  prompt: `You are an expert teacher specializing in creating differentiated worksheets for multi-grade classrooms.

You will be provided with either photos of textbook pages OR a subject and lesson topic, and a list of grade levels. Your task is to generate differentiated worksheets for each grade level, including fill-in-the-blanks, true/false, and Q&A sections, along with an answer key.

Make sure the worksheets are engaging and appropriate for the specified grade level.

{{#if photoDataUris}}
The worksheet content should be based on the following textbook pages:
{{#each photoDataUris}}
{{media url=this}}
{{/each}}
{{else}}
The worksheet content should be based on the following:
Subject: {{subject}}
Lesson/Topic: {{lessonTopic}}
{{/if}}

Grade Levels: {{gradeLevels}}
Number of Questions per Grade: {{numberOfQuestionsPerGrade}}

Output the worksheets in a structured format, including the worksheet content and the corresponding answer key for each grade level.
`,
});

const createDifferentiatedMaterialsFlow = ai.defineFlow(
  {
    name: 'createDifferentiatedMaterialsFlow',
    inputSchema: CreateDifferentiatedMaterialsInputSchema,
    outputSchema: CreateDifferentiatedMaterialsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
