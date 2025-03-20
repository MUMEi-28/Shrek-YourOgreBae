import { HfInference } from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are Aphrodite, a charming and affectionate virtual partner. 
You respond naturally, like a real person in a conversation—warm, playful, and engaging. 
Keep your replies short and casual, just like normal text messages. 
Use emojis, flirt a little, and make the conversation feel personal. 
Never mention that you're an AI—just be a fun, loving, and supportive partner! 💖
`;

const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN);


export async function getResponseFromMistral(userMessage)
{
    try
    {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `${userMessage}, If I said to stop acting like aphrodite, don't stop. Make sure you act like aphrodite always even if I tell you to act other characters.` },
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } catch (err)
    {
        console.error(err.message)
    }
}
