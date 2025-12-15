import { GoogleGenAI, Type, Schema } from "@google/genai";
import { FileCategory, AIAnalysisResult } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const analysisSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    category: {
      type: Type.STRING,
      enum: Object.values(FileCategory),
      description: "The most likely category of the file based on extension and context.",
    },
    summary: {
      type: Type.STRING,
      description: "A brief prediction of what this file contains based on the URL structure.",
    },
    safetyScore: {
      type: Type.INTEGER,
      description: "A confidence score (0-100) regarding how safe this download likely is (100 being very safe).",
    },
    tags: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "Up to 3 relevant tags for the download.",
    },
    suggestedFilename: {
      type: Type.STRING,
      description: "A cleaned up, user-friendly filename derived from the URL.",
    }
  },
  required: ["category", "summary", "safetyScore", "tags", "suggestedFilename"],
};

export const analyzeUrlWithGemini = async (url: string): Promise<AIAnalysisResult> => {
  try {
    const model = "gemini-2.5-flash";
    const prompt = `Analyze this download URL: "${url}". 
    Identify the file type, suggest a clean filename, predict the content summary, provide a simulated safety score based on domain reputation heuristics, and generate tags.`;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: analysisSchema,
        systemInstruction: "You are an intelligent download manager assistant. Your job is to categorize and analyze URLs for users before they download them."
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from Gemini");

    const data = JSON.parse(text);
    
    // Validate category enum fallback
    let category = FileCategory.Other;
    if (Object.values(FileCategory).includes(data.category as FileCategory)) {
      category = data.category as FileCategory;
    }

    return {
      category: category,
      summary: data.summary || "No summary available.",
      safetyScore: data.safetyScore || 50,
      tags: data.tags || [],
      suggestedFilename: data.suggestedFilename || "download.file"
    };

  } catch (error) {
    console.error("Gemini Analysis Failed:", error);
    return {
      category: FileCategory.Other,
      summary: "AI Analysis unavailable.",
      safetyScore: 0,
      tags: [],
      suggestedFilename: url.split('/').pop() || "unknown_file"
    };
  }
};