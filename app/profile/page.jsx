"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";

const MyProfile = () => {
  const [posts, setPosts] = useState([]);
  const { data: session } = useSession();
  const router = useRouter();


  const fetchData = async () => {
    const res = await fetch(`/api/users/${session?.user.id}/posts`);
    const data = await res.json();
    
    setPosts(data);
  };
  
  useEffect(() => {  
    
    fetchData();
  }, []);

  const handleDelete = async (post) => {
    const data = await fetch(`/api/create-prompt/${post}`, {
      method: 'DELETE',
    })
    if(!data.ok) return new Response("Error deleting prompt")
    fetchData()
  };

  const handleEdit = (post) => {
      router.push(`/update-prompt?id=${post}`)
  };

  return (
    <div className="h-full w-full max-w-[30rem]">
      {session ? (
        <>
          <title>Profile | PromptShare</title>
          <Profile
            name="My"
            desc=""
            data={posts}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </>
      ) : (
        <>
          <div className="flex justify-center items-center text-gray-600">
            <div className="mt-5 flex border-2 rounded-lg border-gray-100 bg-gray-100 border-opacity-50 p-8 sm:flex-row flex-col">
              <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  SIGN IN FIRST
                </h2>
                
                <Link
                  href={"/"}
                  className="mt-3 text-yellow-500 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MyProfile;
