import PromptCard from "./PromptCard";



const Profile = ({ name, data, handleEdit, handleDelete }) => {

  return (
    <section>
      <div className="text-white flex justify-center text-xl h-[20vh] py-3">{name} Profile</div>

      <div className="sm:px-0 w-full px-1">
        {name === "My" ?<p className="flex justify-center font-bold text-white"> Prompts </p>:<></>}
        {data?.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
