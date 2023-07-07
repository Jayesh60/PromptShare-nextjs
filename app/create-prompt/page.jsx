"use client";
import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import Form from "@components/Form";

const page = () => {
    const router = useRouter();
    const {data:session } = useSession();
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt:"",
        tag:" "
      })
    const createPrompt = async (e) =>{
      e.preventDefault();
      setSubmitting(true);
      try {
        const response = await fetch('/api/create-prompt/new',{
          method:"POST",
          body: JSON.stringify({
            prompt:post.prompt,
            tag:post.tag,
            userId : session?.user.id,
          }),
        }
        )
        if(response.ok){
          router.push('/')
        }
      } catch (error) {
        console.log(error)
      }finally{
        setSubmitting(false)
      }
    }
    console.log( "session id is " + session?.user.email) 


  return (
    <>
    <title>Create Post | PromptShare</title>
    <Form
        type="Create"
        post = {post}
        submitting={submitting}
        setPost={setPost}
        handleSubmit = {createPrompt}
    />
    </>
  )
}

export default page