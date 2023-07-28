import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const ProfileShortcut = () => {
  const { data: session } = useSession();
  return (
    <section className="mx-5 max-h-[60vh] z-100 top-20 sticky rounded bg-gray-200 bg-opacity-30 backdrop-blur-sm h-full w-full">
      {session ? (
        <>
          <div className="pt-5 py-1  border-b-[1px] border-gray-400  w-full flex justify-center items-center">
            <Link href={"/profile"} className="hover:underline text-white">
              <div className="pb-2 w-full flex justify-center items-center">
                <Image
                  className="rounded-full"
                  src={session?.user.image}
                  width={60}
                  height={60}
                  alt="user profile"
                />
              </div>
              <div className="flex  justify-center items-center text-gray-200 font-semibold text-[1rem]">
                {session?.user.name}
              </div>
            </Link>
          </div>
          {/* <div className="flex justify-center items-center ">Post count</div> */}
        </>
      ) : (
        <></>
      )}
    </section>
  );
};

export default ProfileShortcut;
