import "../styles/global.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "PromptShare",
  description: "Discover and share ai prompts with global",
};
const Layout = ({ children }) => {
  return (
    <html lang="en">
      <Provider>
        <body>
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
