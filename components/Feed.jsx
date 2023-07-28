"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const PromptCard = dynamic(() => import("./PromptCard"), { ssr: false });
const ProfileShortcut = dynamic(() => import("./ProfileShortcut"));
const AddPromptShortcut = dynamic(() => import("./AddPromptShortcut"));

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="px-0 w-full ">
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
  const [posts, setPosts] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const filterPrompts = (search) => {
    const regex = new RegExp(search, "i");
    return posts.filter((item) => (

      regex.test(item.creator.username) ||
      regex.test(item.tag) ||
      regex.test(item.prompt)
    ));
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
      const response = await fetch("/api/create-prompt");
      const data = await response.json();
      setPosts(data);
    };
    fetchPost();
  }, []);

  return (
    <section className="px-4 md:px-2  py-5 bg-[#151030] w-full">
      <div className="flex w-full justify-center">
        <div className="sm:flex hidden w-[20%]">
         <ProfileShortcut/>
        </div>
        <div className="w-full sm:w-[50%]">
          <div className="relative w-full flex justify-center">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-200 bg-opacity-30 backdrop-blur-sm placeholder:text-white w-full max-w-[38rem] h-14 md:h-12 outline-none text-gray-200  text-base font-semibold p-2 rounded mb-10"
              value={searchText}
              onChange={handleSearchChange}
            />
          </div>
          {searchText ? (
            <PromptCardList
              data={searchedResults}
              handleTagClick={handleTagClick}
            />
          ) : (
            <PromptCardList data={posts} handleTagClick={handleTagClick} />
          )}
        </div>
        <div className="sm:flex hidden w-[20%]">
          <AddPromptShortcut/>
        </div>
      </div>
    </section>
  );
};

export default Feed;
