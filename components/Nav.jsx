"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut } from "next-auth/react";

const Nav = () => {
  const isUserLogged = true;

  return (
    <nav className="flex px-10 p-5 w-full  justify-between items-center">
      <Link href={"/"} className="flex justify-center items-center">
        <Image
          src="/assets/images/logo.png"
          height={55}
          width={55}
          alt="Logo"
          className="rounded-full object-contain"
        />
        <h1 className="text-2xl font-extrabold">PromptShare</h1>
      </Link>
      <h1 className=" sm:flex hidden text-3xl font-extrabold  bg-gradient-to-r from-yellow-300 to-orange-400 text-transparent leading-none bg-clip-text ">
        Discover and Share AI Prompt's
      </h1>
      <div className="sm:flex  hidden">
        {isUserLogged ? (
          <div className="flex justify-center items-center gap-5 md:gap-8">
            <Link href="/create-prompt" className="font-bold text-lg">
              Create Post
            </Link>
            <button
              type="button"
              onClick={signOut}
              className="font-bold text-lg"
            >
              Log Out
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
            <Link href="">SignUp</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
