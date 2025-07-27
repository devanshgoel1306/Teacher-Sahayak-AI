
"use server";

import { createDifferentiatedMaterials } from "@/ai/flows/create-differentiated-materials";
import type { CreateDifferentiatedMaterialsInput } from "@/ai/flows/create-differentiated-materials";
import { z } from "zod";

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

const worksheetsSchema = z.object({
  photoDataUris: z.array(z.string()).optional(),
  gradeLevels: z.array(gradeEnum),
  subject: z.string().optional(),
  lessonTopic: z.string().optional(),
  numberOfQuestionsPerGrade: z.number().optional(),
});


export async function createDifferentiatedMaterialsAction(input: CreateDifferentiatedMaterialsInput) {
    const validatedInput = worksheetsSchema.parse({
        ...input,
        gradeLevels: input.gradeLevels as any
    });

  try {
    const result = await createDifferentiatedMaterials(validatedInput);
    return result;
  } catch (error) {
    console.error("Error generating worksheets:", error);
    return { worksheets: [] };
  }
}
