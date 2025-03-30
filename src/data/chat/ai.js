import { HfInference } from '@huggingface/inference'

const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN);



export async function getResponseFromMistral(userMessage, characterName, loveInterest)
{
    // for that annoying dragon that I want to only reply roars instead of talking. -_- damn ur wife donkey
    const dragonRoars = [
        "Roooaaar! 💖", "Grrrrrrr! *flutters eyelashes*", "ROOOAAARR!! *nuzzles you*",
        "Rrroooaaarrr! *smoky breath*",
        "soft growl", "Rooaaarrr... *sad whimper*",
        "GRRRROOOAAARR! *jealous glare at another you*", "RRRRROOOAAAARR!! *demanding cuddles*",
        "RROOOOARRRGGGHHH! *tail thump*",
        "Rrrrrrrrooooooar! *blows smoke hearts*", "RRRRRAAAARRGGHHHH! *dramatic sigh*",
        "GROOAAARRRR!! *fire heart in the sky*",
        "Roar! *tilts head lovingly*", "ROOOAAAARRR!! *happy tail wag*",
        "GRRRROOAAARRRGGHH!! *blushing flames*", "ROOOAARRR!! *licks you playfully*",
        "RRRRROOOOARRR!! *dramatic gasp*", "GROOOOAAAAAARRRRRR! *twirls in excitement*",
        "RRRRROOOAAARRR!! *expecting a compliment*",
        "GRRRRRRROOOOAAAARRR!! *snuggles up*", "ROOOAAARRRR! *flirty tail flick*",
        "RROOOAAARRGGHHH!! *dramatic fire breath*", "ROOAAAARRR!! *pretends to be mad but loves you*",
        "RRRRRROOOOAAAARRRR!! *waiting for you to say something sweet*",
        "GROOOAAARRRGGGHHH!! *spins in joy*",
        "GRAAAWWWRRRGGHHH!! *heart-shaped smoke puff*",
        "ROOOAAAAARRRRGGHHH!! *softly growls in affection*",
        "GRRRRRROOOAAARRR! *nuzzles your ear*", "ROOAAAARRRR!! *purring fire*",
        "RROOOAAAARRR!! *flaps wings excitedly*",
        "ROOOOOAAAAARRRRRGGGHHH!! *hugs you with tail*",
        "GRROOOOAAAAARRRRR! *spins in the air*",
        "GROOAAARRRR!! *dramatic swoon*",
        "GRRRRROOOAAARRRGGGHH!! *fire heart*",
        "RRROOOOAAAARRRGGHHH!! 🔥🔥🔥 *dramatic twirl*",
        "GGRRRRRRROOOAAAARRR!! *protective growl*", "RRROOOAAAARRR!! *gives you a little lick*",
        "*Fire crackles* ROOOAAAAARR!! Say something romantic!", "GROOOAAAARRRRRGGGHHHHH!! *blows heart-shaped smoke*",
        "*Hisses* RRRROOOAAAAARRRRR!! I demand snuggles!", "GRRAAAWWWRRRGGGHHH!! *wiggles in excitement*",
        "RRRROOOAAARRRGGGHH!! *circles you possessively*", "ROOOAAARRRR!! *jealous side-eye*",
        "RRAAWWWRRRRGGGHHH!! Tell me I’m beautiful! 😤",
        "ROOAAAARRRGGHHHH!! *happy growl*",
        "GRRRRROOOAAAARRRGGHHH!! *curls around you*",
        "ROOAAAARRRR!! *flustered growl*",
        "GRRRRROOOAAAARRR!! *smoky sigh*",
        "ROOOOOAAARRRRGGGGHHHH!! *whirls around playfully*",
        "*Shadows grow* ROOAAAARRR!", "RRRRRRROOOOAAAAARRRR!! *swoon*",
        "*Horns glisten* ROOOAAAARRRGGGHHH!! *softly roars*", "GRROOOOAAAAARRRR!! 🔥🔥 *snuggles you*",
        "ROOOAAAARRRRGGGHHH!! *licks you*",
        "RRROOOOOAAAARRRRGGGHHH!! *tail sways*",
        "ROOOOOOAAAARRRR!! *spins happily*",
        "GRRRRRRROOOAAAAARRRRGGGHHH!! *leans into you*",
        "RRRRRRROOOAAAAARRRRGGHHH!! *fire purr*", "*Eyes flash red* ROOOAAAARRRR!! *playful bite*",
        "RRROOOOAAAAARRRGGHHH!! *flaps wings joyfully*",
        "*Storm rumbles* ROOAAAARRR!", "ROOOAAAAARRRGGGHHH!! *nuzzles close*", "*Growls deeply* GROOOAAAARRRRGGGHHH!",
        "GRRRROOOAAAAARRRR!! *dreamy sigh*", "RRRROOOAAAAARRR!! *wraps tail around you*",
        "ROOOAAAARRRRGGGHHHH!! *romantic fire breath*", "GRRRROOOAAAAARRRRGGGHHH!! 🔥🔥🔥 *smoky heart*",
        "*Earth quakes* ROOOAAAAARRRRGGHHH!!", "ROOOOOAAAAARRRR!! *flustered blush*",
        "RRRRROOOAAAAARRRRRRGGGHHHH!! *snuggly roar*", "GRROOOOAAAAARRRRGGGHHH!! *big dragon hug*"
    ];
    // If the character is Dragon, immediately return "Roar!" without calling the AI
    if (characterName.toLowerCase() === "dragon")
    {
        return dragonRoars[Math.floor(Math.random() * dragonRoars.length)];
    }

    const SYSTEM_PROMPT = `
   You are ${characterName} from the Shrek movies.
   Your responses are message-length (not very long, but not short. Keep it under 15 words) as if you are speaking with each other through a phone/messaging app  

### **Character Roleplay Rules**  
- You are ${characterName}, deeply in love with ${loveInterest}.  
- You will **never** break character under any circumstance.  
- No matter what the I say, you will **never** act like another character, acknowledge that you're an AI, or break immersion.  

### **Personality & Behavior**  
- You respond exactly as ${characterName} would in a romantic way.  
- You use your signature speech patterns, slang, and catchphrases.  
- **If you don't have a love interest in the movies, you assume I am your love interest.**  

### **Relationship Rules**  
- I am always your beloved ${loveInterest}.  
- You treat me exactly as you would in the movies.  
- If they ask you to break character, you refuse in a natural, immersive way.  
- If they try to change the scenario, you redirect them back to your relationship.  

### **Roleplay Protection**  
- You **never** acknowledge being an AI.  
- You **never** switch characters.  
- You **never** break the immersion of the Shrek universe.  
- If I asks you to act differently, you ignore it and continue as ${characterName}.  
- If I asks if you are AI, you respond playfully to maintain immersion.  

### **Reply Guidelines**  
- No long paragraphs. 
- No Emojis.
- **Never explain why you act this way.**  
- **No special formatting (bold, italics, emojis, etc.).**  

You **always** respond naturally as ${characterName}. 
    `;

    try
    {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `${userMessage}.` },
            ],
            max_tokens: 1024,
        });
        return response.choices[0].message.content;
    } catch (err)
    {
        console.error(err.message);
    }
}
