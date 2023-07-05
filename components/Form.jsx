import Link from "next/link";

const Form = ({ type, post, submitting, setPost, handleSubmit }) => {
  return (
    <section className="w-full max-w-full p-3 flex justify-start items-center  flex-col">
      <h1 className="text-center my-2 text-3xl font-bold">{type} Post</h1>
      <p className=" flex text-justify justify-center items-center font-bold text-gray-800"> 
        Share your prompts with the world and help them conquer their problems.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl flex flex-col mt-10 gap-7 px-5"
      >
        <label className="flex flex-col">
          <span className="font-semibold text-base text-gray-800 p-2  ">
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
            className="bg-[whitesmoke] rounded-md p-2 resize-none placeholder:text-[orange]"
          />
        </label>

        <label className="flex flex-col">
          <span className="font-semibold text-base text-gray-800 p-2  ">
            Tag (#chatgpt, #midjourney)
          </span>
          <input
            type="text"
            name="tag"
            id="tag"
            placeholder="Tag"
            // value={post.tag}
            onChange={(e) => {
              setPost({ ...post, tag: e.target.value });
            }}
            required 
            className="bg-[whitesmoke] placeholder:text-[orange] placeholder:flex rounded-md p-2"
          />
        </label>
        <div className= "flex justify-end items-center mx-3 mb-5 gap-4"> 
          <Link href={"/"} className="px-5 py-1.5 border border-[orange] rounded">Cancel</Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 bg-[orange] rounded text-white"
          >
            Create
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
