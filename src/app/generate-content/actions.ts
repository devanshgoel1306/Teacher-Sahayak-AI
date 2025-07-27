
"use server";

import { generateHyperLocalContent } from "@/ai/flows/generate-hyper-local-content";
import { z } from "zod";

const generateContentSchema = z.object({
  topic: z.string(),
  language: z.string(),
  contentType: z.string(),
  gradeLevel: z.string().optional(),
});

export async function generateLocalContentAction(input: z.infer<typeof generateContentSchema>) {
  const validatedInput = generateContentSchema.parse(input);
  try {
    const result = await generateHyperLocalContent(validatedInput);
    return result;
  } catch (error) {
    console.error("Error generating content:", error);
    return { content: "An error occurred while generating content." };
  }
}
