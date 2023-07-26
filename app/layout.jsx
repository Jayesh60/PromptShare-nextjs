import "../styles/global.css";

// import Provider from "@components/Provider";
import dynamic from "next/dynamic";
const Nav = dynamic(()=> import("@components/Nav"))
const Provider = dynamic(()=> import("@components/Provider"))


export const metadata = {
  title: "PromptShare",
  description: "Discover and share ai prompts with global",
};
const Layout = ({ children }) => {
  return (
    <html lang="en">
        <Provider>
          <body className="bg-[#050816] scroll-smooth">
            <Nav />
            <main className="flex bg-[#151030] flex-col justify-center items-center">
              {children}
            </main>
          </body>
        </Provider>
    </html>
  );
};

export default Layout;
