import { Schema, model, models } from "mongoose";
import User from "./user";

const PromptSchema = new Schema({
    creator:{
        type: Schema.Types.ObjectId,
        ref: User
    },
    prompt:{
        type:String,
        required:[true, 'Prompt is required']
    },
    tag:{
        type:String,
        required:[true, 'tags are required']
    }
    
})

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
