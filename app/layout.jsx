import "../styles/global.css";

// import Provider from "@components/Provider";
import dynamic from "next/dynamic";
const Nav = dynamic(()=> import("@components/Nav"))
const Provider = dynamic(()=> import("@components/Provider"))


export const metadata = {
  title: "PromptShare",
  description: "Discover and share ai prompts with global",
  viewport : "width=device-width, initial-scale=1.0"
};
const Layout = ({ children }) => {
  return (
    <html lang="en">
        <Provider>
          <body className="bg-[#151030] scroll-smooth">
            <Nav />
            <main className="flex flex-col justify-center items-center">
              {children}
            </main>
          </body>
        </Provider>
    </html>
  );
};

export default Layout;
