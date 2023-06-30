"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSession, signIn, signOut, getProviders } from "next-auth/react";

const Nav = () => {
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
    <nav className="flex sm:p-10 p-4  w-full gap-1 justify-between items-center">
      <Link href={"/"} className="flex justify-center items-center">
        <Image
          src="/assets/images/logo.png"
          height={55}
          width={55}
          alt="Logo"
          className="rounded-full object-contain"
        />
        <h1 className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-yellow-300 to-orange-400 text-transparent bg-clip-text sm:text-black">
          PromptShare
        </h1>
      </Link>
      <h1 className="text-center sm:flex hidden text-xl md:text-3xl font-extrabold  bg-gradient-to-r from-yellow-300 to-orange-400 text-transparent leading-none bg-clip-text ">
        Discover and Share AI Prompt's
      </h1>
      <div className="sm:flex  hidden">
        {session?.user ? (
          <div className="flex justify-center items-center gap-3">
            <Link
              href="/create-prompt"
              className="font-bold text-center text-lg"
            >
              Create Post
            </Link>
            <button
              type="button"
              onClick={() => signOut()}
              className="font-bold text-lg"
            >
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src="/assets/images/logo.png"
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
              src="/assets/images/logo.png"
              height={40}
              width={40}
              alt="profile"
              className="rounded-full"
              onClick={() => setToggle((prev) => !prev)}
            />
            {toggle && (
              <div className="absolute right-0 top-full mt-3 w-full p-5 rounded-sm bg-gradient-to-r from-yellow-200 to-orange-100 min-w-[140px] flex flex-col gap-2 justify-end items-end">
                <Link
                  href="/profile"
                  className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium "
                  onClick={()=>setToggle(false)}
                >
                  Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium "
                  onClick={()=>setToggle(false)}
                >
                  Create Post
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggle(false);
                    signOut();
                  }}
                  className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium "
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
                  onClick={() => signIn(provider.id)}
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
