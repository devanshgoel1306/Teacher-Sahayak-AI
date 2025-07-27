
"use server";

import { designVisualAid } from "@/ai/flows/design-visual-aids-flow";
import type { DesignVisualAidOutput } from "@/ai/flows/design-visual-aids-flow";
import { z } from "zod";

const visualAidSchema = z.object({
  description: z.string(),
  gradeLevel: z.string().optional(),
});

export async function generateVisualAidAction(input: z.infer<typeof visualAidSchema>): Promise<DesignVisualAidOutput | { visualAid: null }> {
  const validatedInput = visualAidSchema.parse(input);
  try {
    const result = await designVisualAid(validatedInput);
    return result;
  } catch (error) {
    console.error("Error generating visual aid:", error);
    return { visualAid: null };
  }
}
