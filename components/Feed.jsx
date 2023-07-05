"use client"
import { useState, useEffect } from "react"
import PromptCard from "./PromptCard"




const PromptCardList = ({ data, handleTagClick}) =>{
  return(
    <div>
      {data.map((post)=>(
        <PromptCard
          key={post._id}
          post = {post}
          handleTagClick={handleTagClick}
        />
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
    <section className="p-3">
      <form className="relative w-full flex justify-center">
        <input
         type="text" 
         placeholder="coming soon..."
         className="bg-[whitesmoke] w-full max-w-[44rem] h-11 md:h-16  border-[orange] outline-none border text-lg p-2 rounded"
         value={searchText}
         onChange={handleSearchChange}
        />
      </form>

      <PromptCardList
        data={posts}
        handleTagclick={()=>{}}

      />
      
    </section>
  )
}

export default Feed