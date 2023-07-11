"use client";
import { Suspense, useState } from "react";
import Image from "next/image";

const PromptCard = ({ post, handleTagClick }) => {
  const [copied, setCopied] = useState('');

  const handleCopy =()=>{
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt)
    setTimeout(() => setCopied(""), 3000)

  }
  return (
    
    <div className="p-1 md:p-3 w-full ">
      <div className="flex rounded-lg h-full md:p-3 p-2 flex-col bg-gray-200 bg-opacity-30 backdrop-blur-sm">
        <div className="flex items-center mb-3">
          <Image
            alt="user profile photo"
            src={post.creator?.image}
            width={40}
            height={40}
            className="mr-3 items-center inline-flex justify-center rounded-full p-1"
          />
          <h2 className="text-gray-50 text-base font-medium">
            {post.creator.username}
          </h2>
          <div className="flex justify-end w-full ">
          <Image
            src={copied === post.prompt 
              ? 'assets/icons/tick.svg'
              : 'assets/icons/copy.svg'
                }
              width={28}
              height={28}
              alt="copy icon"
              className="cursor-pointer mx-3 p-1 rounded opacity-70 backdrop-blur-xl bg-[#D9E8F7] justify-end"
              onClick={handleCopy}
            />
          </div>
          
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-gray-300 text-base my-4 cursor-pointer" onClick={handleCopy}>{post.prompt}</p>
          <p className="cursor-pointer bg-gradient-to-r from-yellow-500 to-orange-800 text-transparent bg-clip-text">
            {post.tag}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromptCard;
