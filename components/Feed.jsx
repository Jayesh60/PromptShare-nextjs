"use client";
import { useState, useEffect, Suspense } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="px-0 w-[35vw]">
      {data.map((post) => (
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
  const [searchText, setSearchText] = useState("");
  const handleSearchChange = (e) => {
    e.preventDefault();
  };

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch("/api/create-prompt");
      const data = await response.json();
      setPosts(data);
    };
    fetchPost();
  }, []);

  return (
    <section className="px-4 md:px-10 py-5 bg-[#151030] w-full">
      <div className="flex flex-1">
        <div className="flex-0.25 w-full">profile</div>
        <div className=" w-full flex-0.5">
          <form className="relative w-full flex justify-center">
            <input
              type="text"
              placeholder="Coming soon..."
              className="bg-[#28244F] placeholder:text-white w-full max-w-[38rem] h-14 md:h-12 outline-none  text-base font-semibold p-2 rounded mb-10"
              value={searchText}
              onChange={handleSearchChange}
            />
          </form>
          <PromptCardList data={posts} handleTagclick={() => {}} />
        </div>
        <div className="w-full flex-0.25">add prompt shortcut</div>
      </div>
    </section>
  );
};

export default Feed;
