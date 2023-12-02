import { connectToDb  } from "@utils/database";
import Prompt from "@models/prompt";
import User from "@models/user";

// export const runtime = "edge"

export const GET = async () =>{
    try {
        await connectToDb();
        const prompts = await Prompt.find().sort({"_id":-1}).populate('creator');
        return new Response(JSON.stringify(prompts),{status:200});

    } catch (error) {
        console.log(error + "prompts failed to load feed")
        return new Response(JSON.stringify("failed"),{status:500});
    }
}