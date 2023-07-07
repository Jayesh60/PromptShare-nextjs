"use client"
import { useState, useEffect, Suspense } from "react"
import PromptCard from "./PromptCard"


const PromptCardList = ({ data, handleTagClick}) =>{
  return(
    <div className= "px-0 bg-gray-200  grid md:grid-cols-3 ">
      {data.map((post)=>(
        <Suspense fallback={<p>Loading...</p>}>
        <PromptCard
          key={post._id}
          post = {post}
          handleTagClick={handleTagClick}
          />
          </Suspense>
        ))}
    </div>
  )
}


const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const handleSearchChange= (e)=>{
    e.preventDefault();
  }
  
  const [posts, setPosts] = useState([]);
  useEffect(() =>{
    const fetchPost = async ()=>{
      const response = await fetch('/api/create-prompt')
      const data = await response.json()
      setPosts(data);
    }
    fetchPost();
  }
  ,[])

  return (
    <section className="px-4 md:px-10 py-5 bg-gray-200 w-full">
      <form className="relative w-full flex justify-center">
        <input
         type="text" 
         placeholder="Coming soon..."
         className="bg-gray-100 placeholder:text-gray-900 w-full max-w-[44rem] h-14 md:h-16 outline-none border border-[orange] text-lg p-2 rounded mb-10"
         value={searchText}
         onChange={handleSearchChange}
        />
      </form>
      <Suspense fallback={<p>Loading....</p>}>
        <PromptCardList
          data={posts}
          handleTagclick={()=>{}}
        />
      </Suspense>
    </section>
  )
}

export default Feed