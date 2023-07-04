"use client";
// import { useState } from "react";
import Image from "next/image";



const PromptCard = ({post, handleTagClick}) => {
  return (
    <div>
        <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            
            <Image alt="user profile photo" src={post.creator?.image} width={40} height={40} className="mr-3 items-center inline-flex justify-center rounded-full p-1"/>
            <h2 className="text-gray-900 text-lg title-font font-medium">{post.creator.username}</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">{post.prompt}</p>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromptCard