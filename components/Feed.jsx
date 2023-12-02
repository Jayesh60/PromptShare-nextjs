"use client";
import { useSession } from "next-auth/react";
import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import axios from "axios";
const PromptCard = dynamic(() => import("./PromptCard"));

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="px-0 w-full ">
      {data?.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const filterPrompts = (search) => {
    const regex = new RegExp(search, "i");
    return posts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tag) => {
    setSearchText(tag);
    const result = filterPrompts(tag);
    setSearchedResults(result);
  };

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get("/api/create-prompt");
      setPosts(response.data);
    };
    fetchPost();
  }, []);

  return (
    <section className="px-4 md:px-2 py-2 bg-zinc-800 w-full">
      <div className="sm:flex sm:flex-row flex flex-col-reverse w-full justify-center">
        <div className="w-full sm:w-[50%]">
          <div className="w-full flex-col py-16 gap-5 flex justify-center items-center">
            <div className="text-center justify-center w-full items-center flex flex-col gap-3">
              <Link href={'/'} className=" text-5xl font-sans font-semibold py-2">
              𝙋𝙧𝙤𝙢𝙥𝙩𝙎𝙝𝙖𝙧𝙚
              </Link>
              <p className="mt-2 w-fit text-sm text-indigo-300 text-center font-medium shadow-sm hover:shadow-md bg-indigo-300 bg-opacity-5 hover:bg-opacity-10 border border-indigo-300 border-opacity-10 hover:border-opacity-20 transition-all rounded-md px-4 md:px-6 py-2 cursor-pointer"> 
                Discover AI Powered Prompts
              </p>
            </div>
            <div className="flex w-full justify-center items-center relative">
              <input
                type="text"
                placeholder="Prompting..."
                className="relative bg-zinc-700 flex-1 pl-12 pr-12 rounded-full text-sm px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-indigo-700  bg-opacity-30 backdrop-blur-sm placeholder:text-gray-400 w-full max-w-[30rem] h-12 outline-none text-gray-200 sm:font-semibold p-2 sm:mb-1 mb-0"
                value={searchText}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          <Suspense fallback="loafing...">
            {searchText ? (
              <PromptCardList
                data={searchedResults}
                handleTagClick={handleTagClick}
              />
            ) : (
              <PromptCardList data={posts} handleTagClick={handleTagClick} />
            )}
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Feed;
