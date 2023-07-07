"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";
import Link from "next/link";

const page = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: " ",
  });
  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("/api/create-prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
          userId: session?.user.id,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };
  // console.log( "session id is " + session?.user.email)

  return (
    <>
      <title>Create Post | PromptShare</title>
      {session?.user ? (
        <Form
          type="Create"
          post={post}
          submitting={submitting}
          setPost={setPost}
          handleSubmit={createPrompt}
        />
      ) : (
        <div className="flex justify-center items-center text-gray-600">
          <div class="mt-5 flex border-2 rounded-lg border-gray-100 bg-gray-100 border-opacity-50 p-8 sm:flex-row flex-col">
          <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">SIGN IN FIRST</h2>
            <p class="leading-relaxed text-base">To post something, you should sign-in first and enjoy the PromptShare's potential.</p>
            <Link href={'/'} class="mt-3 text-yellow-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
        
      )}
    </>
  );
};

export default page;
