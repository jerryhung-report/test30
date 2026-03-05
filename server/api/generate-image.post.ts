import { GoogleGenAI } from "@google/genai";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { breed, personaTitle } = body;
  const config = useRuntimeConfig();

  // Try to get API key from runtime config or process.env
  // Note: process.env.API_KEY is available in the runtime environment
  const apiKey = config.geminiApiKey || process.env.API_KEY;

  if (!apiKey) {
    console.error("API Key is missing in runtime config and process.env");
    // Return a structured error response instead of throwing 500 to avoid crashing the server logs
    // The client should handle this gracefully
    return { error: "API Key missing", imageUrl: null };
  }

  // Log key prefix for debugging (do not log full key)
  console.log("Using API Key starting with:", apiKey.substring(0, 4) + "...");

  const ai = new GoogleGenAI({ apiKey });
  const prompt = `A comic-style character mascot art based on the prototype "Pocket Dog".
  CHARACTER DESIGN: 
  1. Body must be a distinct rounded square/pocket shape (tan color top, red color bottom).
  2. Visible thick white stitching edges along the bottom and side seams of the red "pocket" portion.
  3. BREED ADAPTATION: Modify ONLY the facial expression, eyes, and ear shapes to resemble a ${breed}. 
  4. EXPRESSION: The dog should look ${personaTitle.includes("獒") ? "protective and vigilant" : "smart and cheerful"} matching the "${personaTitle}" personality.
  VISUAL STYLE:
  - High-contrast comic art, clean bold lines.
  - NO TEXT, NO WORDS, NO LABELS, NO LETTERS.
  - BACKGROUND: Pure, solid flat white background (#FFFFFF) only.
  - ADAPTATION: Change the expression and ears of the original mascot to reflect the ${breed} breed.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-image",
      contents: { parts: [{ text: prompt }] },
      config: { imageConfig: { aspectRatio: "1:1" } }
    });
    
    const candidates = response.candidates;
    if (candidates && candidates.length > 0) {
      const firstCandidate = candidates[0];
      if (firstCandidate && firstCandidate.content && firstCandidate.content.parts) {
        for (const part of firstCandidate.content.parts) {
          if (part.inlineData) {
            return { imageUrl: `data:image/png;base64,${part.inlineData.data}` };
          }
        }
      }
    }
    return { imageUrl: null };
  } catch (error: any) {
    console.error("AI Image Generation failed:", error);
    // Return error details instead of throwing 500
    return { error: error.message || "AI Image Generation failed", imageUrl: null };
  }
});
