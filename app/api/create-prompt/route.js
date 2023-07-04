import { connectToDb  } from "@utils/database";
import Prompt from "@models/prompt";


export const GET = async (request) =>{
    try {
        await connectToDb();
        const prompts = await Prompt.find({}).populate('creator');
        return new Response(JSON.stringify(prompts),{status:200});
         
    } catch (error) {
        console.log(error + "prompts failed to load feed")
        return new Response(JSON.stringify("failed"),{status:500});
    }
}