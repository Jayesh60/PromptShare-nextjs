// "use client"
import Feed from "@components/Feed";
import { Suspense } from "react";
import Loading from "./loading";
import Logo from "../public/assets/images/logo.png";
const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <section className="w-full flex-col flex">
        <title>PromptShare</title>
        <Feed />
      </section>
    </Suspense>
  );
};

export default Home;
