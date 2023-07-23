"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";


const MyProfile = () => {
  const {data: session} = useSession();
  
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    const fetchData = async ()=>{
      const res = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await res.json();
      if(data) setPosts(data);

    }
    if(!session?.user.id) return
    fetchData();
  },[])

  const handleDelete = () =>{
    const fetchData = async ()=>{
      const res = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await res.json();
      if(data) setPosts(data);

    }

  }
  const handleEdit = () =>{}

  return (
    <div className="h-full w-full max-w-[30rem]">
      <title>Profile | PromptShare</title>
      <Profile
        name="My"
        desc=""
        data={posts}
        handleDelete = {handleDelete}
        handleEdit = {handleEdit}
      />
    </div>
  );
};

export default MyProfile;
