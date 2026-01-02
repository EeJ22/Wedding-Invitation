import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateWeddingWish = async (userInput: string, senderName: string): Promise<string> => {
  try {
    const prompt = `
      You are a poetic and elegant wedding assistant. 
      The guest, ${senderName || "a friend"}, wants to write a wish for the couple, Lee Jia Xuan (Bride) and Teoh Yi Qi (Groom).
      
      The user's rough input is: "${userInput}".
      
      Please rewrite this input into a warm, sophisticated, and heartfelt wedding message suitable for a formal guestbook. 
      Keep it under 50 words. Maintain a tone of high standard and elegance.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text?.trim() || "Wishing you both a lifetime of love and happiness.";
  } catch (error) {
    console.error("Error generating wish:", error);
    return "Wishing you endless joy and love on this beautiful journey together.";
  }
};