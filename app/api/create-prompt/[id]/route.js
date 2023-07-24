import { connectToDb } from "@utils/database"
import Prompt from "@models/prompt";

// GET 
export const GET = async (request, {params})=>{
    try {
        await connectToDb();

        const prompt = await Prompt.findById(params.id)
        if(!prompt) return new Response("Not found", {status: 400})
        const res = JSON.stringify(prompt)

        return new Response(res, {status: 200})
    } catch (error) {
        return new Response("Error", {status:500})
    }
}

// PATCH 

export const PATCH = async (request, {params})=>{
    try {

        const {prompt, tag} = await request.json()
        await connectToDb();

        const existingPrompt = await Prompt.findById(params.id)
        if(!existingPrompt) return new Response("Not found", {status: 400})

        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;
        await existingPrompt.save();

        return new Response(JSON.stringify(existingPrompt), {status: 200})
    } catch (error) {
        return new Response("Error", {status:500})
    }
}


//DELETE


export const DELETE = async (request, {params}) =>{
    try {
        await connectToDb();
        await Prompt.findByIdAndRemove(params.id)
        return new Response("Prompt deleted successfully", {status: 200})
    } catch (error) {
        return new Response("Prompt deleted Failed", {status: 500})
    }
}