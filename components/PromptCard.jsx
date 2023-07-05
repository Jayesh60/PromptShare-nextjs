"use client";
import { useState } from "react";
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
      <div className="flex rounded-lg h-full bg-gray-100 md:p-5 p-4 flex-col">
        <div className="flex items-center mb-3">
          <Image
            alt="user profile photo"
            src={post.creator?.image}
            width={40}
            height={40}
            className="mr-3 items-center inline-flex justify-center rounded-full p-1"
          />
          <h2 className="text-gray-900 text-lg title-font font-medium">
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
              className="cursor-pointer mx-3 p-1 rounded bg-gray-200 justify-end"
              onClick={handleCopy}
            />
          </div>
          
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-base my-4">{post.prompt}</p>
          <p className="cursor-pointer bg-gradient-to-r from-yellow-500 to-orange-800 text-transparent bg-clip-text">
            {post.tag}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromptCard;
