import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
    apiKey: process.env.OPEN_AI_KEY
});

const openai = new OpenAIApi(config);

export async function POST(
    req: NextRequest
) {
    try {
        const { userId } = auth();
        const body = await req.json()
        const { messages } = body;    
         
        if (!userId) {
           return new NextResponse("Sem autorização", {status: 401})
        }

        if (!config.apiKey) {
            return new NextResponse("Key nao configurada", {status: 500})
        }

        if (!messages) {
            return new  NextResponse("", {status: 400})
        }
        
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages
        });

       return NextResponse.json(response.data.choices[0].message)

    } catch (error) {
        console.log("[CONVERSATION_ERROR", error);
        return new NextResponse("Internal Error: " + error, {status: 500})
    }
}