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
      <Suspense fallback={<Loading />}>
        <Provider>
          <body className="bg-[#050816] scroll-smooth">
            <Nav />
            <main className="flex bg-[#151030] flex-col justify-center items-center">
              {children}
            </main>
          </body>
        </Provider>
      </Suspense>
    </html>
  );
};

export default Layout;
