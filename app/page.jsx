// "use client"
import Feed from "@components/Feed"
import { Suspense } from "react"
import Loading from "./loading"
import Logo from '../public/assets/images/logo.png'
const Home = () => {
  return (
    <section className="w-full flex-col flex">
      <title>PromptShare</title>
      <Suspense fallback={<p>Loading...</p>}><Feed/></Suspense>
    </section>
  )
}

export default Home