import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, 
});

export async function POST(request: NextResponse) {
  try {
    const { transport, electricity, waste, meals } = await request.json();

    const prompt = `
      I am calculating my carbon footprint. Here are my yearly emissions:
      - 🚗 Transport: ${transport} kg CO₂
      - ⚡ Electricity: ${electricity} kg CO₂
      - ♻️ Waste: ${waste} kg CO₂
      - 🍽️ Meals: ${meals} kg CO₂
      Give me **3 practical tips** to reduce my carbon footprint, sorted by **highest impact**.
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      store: true,
      messages: [{ role: "user", content: prompt }],
      // max_tokens: 150,
    });

    return NextResponse.json({ tips: response.choices[0].message.content });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to generate tips" }, { status: 500 });
  }
}
