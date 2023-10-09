import Link from "next/link";

const page = () => {
  return (
    <>
      <section class="text-gray-400 body-font">
        <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
          <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-200">
              Pitchfork Kickstarter Taxidermy
            </h1>
            <p class="leading-relaxed text-base">
              Locavore cardigan small batch roof party blue bottle blog meggings
              sartorial jean shorts kickstarter migas sriracha church-key synth
              succulents. Actually taiyaki neutra, distillery gastropub pok pok
              ugh.
            </p>
            {/* <a class="text-purple-500 cursor-pointer inline-flex items-center mt-4">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a> */}
          </div>
          <div class="flex flex-col md:w-1/2 md:pl-12">
            <h2 class="title-font font-semibold text-gray-200 tracking-wider text-sm mb-3">
              CATEGORIES
            </h2>
            <nav class="flex flex-wrap list-none -mb-1">
              <li class="lg:w-1/3 mb-1 w-1/2">
                <Link href={"#"} class="text-gray-400 hover:text-gray-500">First Link</Link>
              </li>
              <li class="lg:w-1/3 mb-1 w-1/2">
                <Link href={"#"} class="text-gray-400 hover:text-gray-500">First Link</Link>
              </li>
              <li class="lg:w-1/3 mb-1 w-1/2">
                <Link href={"#"} class="text-gray-400 hover:text-gray-500">First Link</Link>
              </li>
              <li class="lg:w-1/3 mb-1 w-1/2">
                <Link href={"#"} class="text-gray-400 hover:text-gray-500">First Link</Link>
              </li>
              <li class="lg:w-1/3 mb-1 w-1/2">
                <Link href={"#"} class="text-gray-400 hover:text-gray-500">First Link</Link>
              </li>
              <li class="lg:w-1/3 mb-1 w-1/2">
                <Link href={"#"} class="text-gray-400 hover:text-gray-500">First Link</Link>
              </li>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
