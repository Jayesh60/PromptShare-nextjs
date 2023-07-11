"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSession, signIn, signOut, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [toggle, setToggle] = useState(false);
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    setUpProviders();
  }, []);

  return (
    <nav className="flex sm:p-5 p-4 z-50 top-0 sticky bg-[#050816]  w-full gap-1 justify-between items-center">
      <Link href={"/"} className="flex justify-center items-center">
        <Image
          src="/assets/images/main-logo-white-transparent.png"
          height={50}
          width={60}
          alt="Logo"
          className="rounded-full object-contain mr-2"
        />
        <h1 className="text-xl md:text-3xl font-extrabold bg-gradient-to-r from-yellow-300 to-orange-400 text-transparent bg-clip-text sm:text-white">
          PromptShare
        </h1>
      </Link>
      <h1 className="text-center sm:flex hidden text-xl md:text-3xl font-extrabold  bg-gradient-to-r from-yellow-300 to-orange-400 text-transparent leading-none bg-clip-text ">
        Discover and Share AI Prompt's
      </h1>

      {/* desktop */}

      <div className="sm:flex  hidden">
        {session?.user ? (
          <div className="flex justify-center items-center gap-3">
            <Link
              href="/create-prompt"
              className="font-bold py-1 px-3 bg-[#28244F] text-center text-white text-lg hover:bg-[#D9E8F7] hover:text-black ease-in-out duration-500 rounded"
            >
              Add Prompt
            </Link>
            <button
              type="button"
              onClick={()=>(signOut())}
              className="font-bold  bg-[#28244F]  rounded py-1 px-3 text-lg hover:text-black ease-in-out duration-500 hover:bg-[#D9E8F7] text-white"
            >
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src={session?.user.image}
                height={40}
                width={40}
                alt="profile"
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="font-bold  py-1 px-3 bg-[#28244F] text-white text-center text-lg hover:bg-[#D9E8F7] ease-in-out duration-500 hover:text-black rounded"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* mobile view */}
      <div className="sm:hidden  flex">
        {session?.user ? (
          <div className="flex relative justify-center items-center gap-5 md:gap-8">
            <Image
              src={session?.user.image}
              height={40}
              width={40}
              alt="profile"
              className="rounded-full"
              onClick={() => setToggle((prev) => !prev)}
            />
            {toggle && (
              <div className="absolute h-[20vh] right-0 top-full mt-3 w-full p-3 rounded-md bg-gradient-to-r from-yellow-200 to-orange-200 min-w-[140px] flex flex-col gap-2 justify-end items-end ">
                <Link
                  href="/profile"
                  className="text-sm font-inter text-gray-900 hover:text-gray-500 font-medium "
                  onClick={() => setToggle(false)}
                >
                  Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="text-sm font-inter text-gray-900 hover:text-gray-500 font-medium "
                  onClick={() => setToggle(false)}
                >
                  Create Post
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggle(false);
                    signOut();
                  }}
                  className=" font-inter  font-medium rounded-full border border-black bg-black py-1 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center "
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                  className="font-semibold border p-1 sm:p-2 text-center text-sm hover:bg-[orange] border-[orange] rounded"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
