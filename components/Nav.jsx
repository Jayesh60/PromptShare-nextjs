"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSession, signIn, signOut, getProviders } from "next-auth/react";
import { usePathname } from "next/navigation";
import LoginLogo from "@public/assets/icons/login.svg";

const Nav = () => {
  const path = usePathname();
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
    <nav className="flex px-2 p-0 z-[100] h-[56px] top-0 sticky bg-opacity-80 border-t-zinc-700  bg-zinc-900  w-full backdrop-blur gap-1 justify-between items-center ">
      <Link href={"/"} className="flex justify-center items-center">
        <h1 className="text-2xl md:text-2xl font-extrabold bg-gradient-to-r from-yellow-300 to-orange-400 text-transparent bg-clip-text sm:text-white">
          PromptShare
        </h1>
      </Link>
      {/* desktop */}
        <div className="sm:flex h-full hidden justify-center items-center">
          <Link href={'/'} className={`${path === '/' ? 'text-white border-b border-b-[#6366F1]' : 'text-gray-400'} h-full flex justify-center items-center py-1.5 px-2 hover:text-white duration-300`}>Home</Link>
          <Link href={'/create-prompt'} className={`${path === '/create-prompt' ? 'text-white border-b border-b-[#6366F1]' : 'text-gray-400'} h-full flex justify-center items-center py-1.5 px-2  hover:text-white duration-300`}>Publish</Link>
          <Link href={'/profile'} className={`${path === '/profile' ? 'text-white border-b border-b-[#6366F1]' : 'text-gray-400'} h-full flex justify-center items-center  py-1.5 px-2  hover:text-white duration-300`}>Account</Link>
        </div>

        <div className="sm:flex  hidden">
          {session?.user ? (
            <button
            type="button"
            onClick={() => signOut()}
            className="font-medium opacity-90  py-1 px-4 to-indigo-600 via-indigo-800 from-indigo-800 text-white text-center  rounded-md bg-gradient-to-t hover:brightness-110 drop-shadow-get-started"

          >
            Log Out
          </button>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                    className="font-medium opacity-90  py-1 px-4 to-indigo-600 via-indigo-800 from-indigo-800 text-white text-center  rounded-md bg-gradient-to-t hover:brightness-110 drop-shadow-get-started"
                  >
                    Get Started
                  </button>
                ))}
            </>
          )}
        </div>

        {/* mobile view */}
        <div className="sm:hidden flex">
          {session?.user ? (
            <div className="flex relative justify-center items-center gap-5 md:gap-8">
              <Image
                src={session?.user.image}
                height={40}
                width={40}
                alt="profile"
                className="rounded-full cursor-pointer"
                onClick={() => setToggle((prev) => !prev)}
              />
              {toggle && (
                <div className="absolute h-[20vh] right-4 top-full mt-3 w-full p-3 rounded-md bg-slate-800 min-w-[140px] opacity-90 flex flex-col gap-2 justify-end items-end ">
                  <Link
                    href="/profile"
                    className="text-sm font-inter text-white hover:text-gray-500 font-medium "
                    onClick={() => setToggle(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    href="/create-prompt"
                    className="text-sm font-inter text-white hover:text-gray-500 font-medium "
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
                    Log Out
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
                    className=" text-white flex flex-row gap-2 items-center justify-center font-semibold p-1 sm:p-2  rounded"
                  >
                    <p className="font-medium opacity-90  py-1 px-4 to-indigo-600 via-indigo-800 from-indigo-800 text-white text-center text-sm  rounded-md bg-gradient-to-t hover:brightness-110 drop-shadow-get-started">Get Started</p>
                  </button>
                ))}
            </>
          )}
        </div>
    </nav>
  );
};

export default Nav;
