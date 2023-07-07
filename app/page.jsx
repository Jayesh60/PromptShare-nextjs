// "use client"
import Feed from "@components/Feed"
import { Suspense } from "react"
import Loading from "./loading"

const Home = () => {
  return (
    <section className="w-full flex-col flex">
      <Suspense fallback={<Loading/>}><Feed/></Suspense>
    </section>
  )
}

export default Home