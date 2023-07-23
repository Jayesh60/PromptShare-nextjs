import { connectToDb  } from "@utils/database";
import Prompt from "@models/prompt";


export const GET = async (request, {params}) =>{
    try {
        await connectToDb();
        const prompts = await Prompt.find({creator: params.id}).sort({_id : -1}).populate('creator')
        if(prompts) return new Response(JSON.stringify(prompts),{status:200});
        return new Response(JSON.stringify("failed"),{status:500});
    } catch (error) {
        console.log(error + "prompts failed to load feed")
        return new Response(JSON.stringify("failed"),{status:500});
    }
}