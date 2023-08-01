import Prompt from "@models/prompt";
import { connectToDb } from "@utils/database.js";


// export const runtime = "edge"
export const POST = async (req) =>{
    const {userId, prompt, tag } = await req.json();
    
    try {
        await connectToDb();
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag
        })

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), {status:201})
    } catch (error) {
        console.log(error)   
        return new Response(JSON.stringify("Failed to create new prompt", {status:500}))
    }
}  
