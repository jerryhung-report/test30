
import { GoogleGenAI } from "@google/genai";
import { Persona, UserFormData } from "../types";

// Fix: Use process.env.API_KEY directly in the named parameter object
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generatePersonalizedAdvice = async (
  persona: Persona,
  user: UserFormData,
  score: number
) => {
  if (!process.env.API_KEY) {
    return "您的投資屬性分析報告已準備就緒。根據您的測驗結果，您屬於" + persona.title + "。這意味著您在追求資產增長的同時，應特別注意風險與回報的平衡。";
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `
        請以專業理財顧問的身份，為以下用戶提供一份簡短的投資心理與策略分析。
        用戶姓名: ${user.name}
        投資經驗: ${user.experience}
        測驗得分: ${score}
        投資人格類型: ${persona.title}
        性格描述: ${persona.desc}
        
        請用繁體中文撰寫，字數約 200 字。分析包含：
        1. 您的投資心理優勢與盲點。
        2. 針對您的風險等級 (${persona.riskLevel}/3) 提供的核心配置建議。
        3. 給用戶的一句鼓勵性理財格言。
      `,
      config: {
        temperature: 0.7,
      },
    });

    // Fix: text is a property, not a method
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "AI 分析暫時不可用，但根據您的分數，建議您穩步佈局核心與衛星資產組合。";
  }
};
