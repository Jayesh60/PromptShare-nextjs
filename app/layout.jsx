import "../styles/global.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "PromptShare",
  description: "Discover and share ai prompts with global",
};
const Layout = ({ children }) => {
  return (
    <html lang="en">
      <Provider>
        <body className="bg-[#050816] scroll-smooth">
          <Suspense fallback={<Loading />}>
            <Nav />
          </Suspense>

          <main className="flex flex-col justify-center items-center">
            {children}
          </main>
        </body>
      </Provider>
    </html>
  );
};

export default Layout;
