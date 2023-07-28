"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const AddPromptShortcut = () => {
  const { data: session } = useSession();
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });
  const router = useRouter();

  const createPrompt = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/create-prompt/new", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user.id,
          prompt: post.prompt,
          tag: post.tag,
        }),
      });
      if (response.ok) {
        router.push("/profile");
      } else {
        alert("Error");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setPost({
        prompt: "",
        tag: "",
      });
    }
  };
  const resetPrompt = () =>{
    setPost({...post, prompt:"", tag:""})
  }

  return (
    <section className="sm:mx-5 max-h-[60vh] z-100 top-20 sticky rounded bg-gray-200 bg-opacity-30 backdrop-blur-sm h-full w-full sm:py-5 py-1 px-1">
      {session && (
        <>
            <p className="text-gray-200 pb-1">Add Your AI Prompt</p>
          <form onSubmit={createPrompt} onReset={resetPrompt} className=" sm:pb-3 sm:border-b-[1px]">
            <textarea
              className="bg-[#28244F] text-white placeholder:text-white placeholder:flex rounded p-2 w-full resize-none text-xs"
              type="text"
              cols={2}
              name="prompt"
              placeholder="Write Your AI prompt"
              id="prompt"
              required
              onChange={(e) => setPost({ ...post, prompt: e.target.value })}
              value={post.prompt}
            ></textarea>
            <input
              className="bg-[#28244F] mb-2 text-white placeholder:text-white placeholder:flex rounded p-2 w-full text-xs"
              type="text"
              name="tag"
              id="tag"
              placeholder="Tag"
              required
              value={post.tag}
              onChange={(e) => {
                setPost({ ...post, tag: e.target.value });
              }}
            />
            <div className="flex justify-center gap-2 sm:justify-evenly items-center text-center ">
              <button type="submit" className="px-3 py-1 bg-[#28244F] rounded text-gray-300 hover:bg-[#D9E8F7] hover:text-black ease-in-out duration-500 font-light text-sm">Create</button>
              <button type="reset" className=" px-3 py-1 bg-[#28244F] rounded text-gray-300 hover:bg-[#D9E8F7] hover:text-black ease-in-out duration-500 font-light text-sm">Reset</button>
            </div>
          </form>
        </>
      )}
    </section>
  );
};

export default AddPromptShortcut;
