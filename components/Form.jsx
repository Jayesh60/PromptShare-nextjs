import Link from "next/link";

const Form = ({ type, post, submitting, setPost, handleSubmit }) => {
  return (
    <section className="w-full bg-[#151030]  max-w-full p-3 flex justify-start items-center  flex-col">
      <h1 className="text-center my-2 text-3xl text-gray-50 font-bold">{type} Post</h1>
      <p className=" flex text-justify justify-center items-center font-bold text-gray-300"> 
        {type} your prompt and help the world conquer their problems
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl flex flex-col mt-10 gap-7 px-5"
      >
        <label className="flex flex-col">
          <span className="font-semibold text-base text-gray-300 p-2  ">
            Your AI Prompt
          </span>
          <textarea
            name="prompt"
            id="prompt"
            cols="30"
            rows="4"
            value={post.prompt}
            onChange={(e) => {
              setPost({ ...post, prompt: e.target.value });
            }}
            required
            placeholder="Write Your AI prompt"
            className="bg-[#28244F] placeholder:text-white placeholder:flex rounded-md p-2 resize-none "
          />
        </label>

        <label className="flex flex-col">
          <span className="font-semibold text-base text-gray-300 p-2  ">
            Tag (#chatgpt, #midjourney)
          </span>
          <input
            type="text"
            name="tag"
            id="tag"
            placeholder="Tag"
            value={post.tag}
            onChange={(e) => {
              setPost({ ...post, tag: e.target.value });
            }}
            required 
            className="bg-[#28244F] text-gray-300 placeholder:text-gray-300 placeholder:flex rounded-md p-2"
          />
        </label>
        <div className= "flex justify-end items-center mx-3 mb-5 gap-4"> 
          <Link href={"/"} className="px-5 py-1.5 text-gray-300 border border-gray-100 rounded">Cancel</Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 bg-[#28244F] rounded text-gray-300 hover:bg-[#D9E8F7] hover:text-black ease-in-out duration-500"
          >
            {type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
