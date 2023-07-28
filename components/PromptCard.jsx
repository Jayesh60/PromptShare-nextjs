"use client";
import {  useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [copied, setCopied] = useState("");

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(""), 3000);
  };
  return (
    <div className="md:p-0 w-full mt-2">
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
              src={
                copied === post.prompt
                  ? "assets/icons/tick.svg"
                  : "assets/icons/copy.svg"
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
          <p
            className="leading-relaxed text-white font-semibold my-0 sm:my-4 cursor-pointer"
            onClick={handleCopy}
          >
            {post.prompt}
          </p>
          <p onClick={()=> handleTagClick && handleTagClick(post.tag)} className="cursor-pointer bg-gradient-to-r from-yellow-300 to-orange-300 text-transparent bg-clip-text mb-2 sm:mb-0">
            {post.tag}
          </p>
        </div>
        {session?.user.id === post.creator._id && pathname === "/profile" ? (
          <div className="flex justify-center gap-2">
            <p
              className="font-thin text-gray-100 cursor-pointer rounded opacity-7 px-4"
              onClick={handleEdit}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M21.455 5.416a.75.75 0 0 1-.096.943l-9.193 9.192a.75.75 0 0 1-.34.195l-3.829 1a.75.75 0 0 1-.915-.915l1-3.828a.778.778 0 0 1 .161-.312L17.47 2.47a.75.75 0 0 1 1.06 0l2.829 2.828a.756.756 0 0 1 .096.118Zm-1.687.412L18 4.061l-8.518 8.518l-.625 2.393l2.393-.625l8.518-8.519Z"
                  clipRule="evenodd"
                />
                <path
                  fill="currentColor"
                  d="M19.641 17.16a44.4 44.4 0 0 0 .261-7.04a.403.403 0 0 1 .117-.3l.984-.984a.198.198 0 0 1 .338.127a45.91 45.91 0 0 1-.21 8.372c-.236 2.022-1.86 3.607-3.873 3.832a47.77 47.77 0 0 1-10.516 0c-2.012-.225-3.637-1.81-3.873-3.832a45.922 45.922 0 0 1 0-10.67c.236-2.022 1.86-3.607 3.873-3.832a47.75 47.75 0 0 1 7.989-.213a.2.2 0 0 1 .128.34l-.993.992a.402.402 0 0 1-.297.117a46.164 46.164 0 0 0-6.66.255a2.89 2.89 0 0 0-2.55 2.516a44.421 44.421 0 0 0 0 10.32a2.89 2.89 0 0 0 2.55 2.516c3.355.375 6.827.375 10.183 0a2.89 2.89 0 0 0 2.55-2.516Z"
                />
              </svg>
            </p>
            <p
              className="text-gray-100 font-thin  cursor-pointer  px-4 rounded"
              onClick={handleDelete}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7Zm2-4h2V8H9v9Zm4 0h2V8h-2v9Z"
                />
              </svg>
            </p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default PromptCard;
