
"use server";

import { generateHyperLocalContent } from "@/ai/flows/generate-hyper-local-content";
import { z } from "zod";

const knowledgeBaseSchema = z.object({
  query: z.string(),
  language: z.string(),
});

// We can reuse the generateHyperLocalContent flow for this feature by setting a fixed content type.
export async function knowledgeBaseAction(input: z.infer<typeof knowledgeBaseSchema>) {
  const validatedInput = knowledgeBaseSchema.parse(input);
  try {
    const result = await generateHyperLocalContent({
      topic: validatedInput.query,
      language: validatedInput.language,
      contentType: "explanation with a simple analogy for a child",
    });
    return result;
  } catch (error) {
    console.error("Error getting explanation:", error);
    return { content: "An error occurred while getting an explanation." };
  }
}
