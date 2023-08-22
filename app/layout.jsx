import "../styles/global.css";

import Provider from "@components/Provider";
import dynamic from "next/dynamic";
const Nav = dynamic(() => import("@components/Nav"));

export const metadata = {
  title: "PromptShare",
  description:
    "Discover and share ai prompts with everyone, get ai powered prompts and share",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Home Page",
    description: "Home page of Promptshare ",
    locale: 'en_US',
    type: 'website',
    url: 'https://promptshare-next.vercel.app',
    siteName: 'PromptShare',
  },
  generator: "Jayesh Wadhe",
  applicationName: "Promptshare",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript", "Prompts", "AI", "AI Prompts", "Jayesh", "Wadhe", "Improve", "Discover", "prompts", "prompt"],
  authors: [{ name: "Jayesh" }, { name: "Jayesh", url: "https://promptshare-next.vercel.app" }],
  colorScheme: "dark",
  creator: "jayesh wadhe",
  publisher: "jayesh wadhe",
  formatDetection: {
    email: "workwithwadhe@gmail.com",
  },
  metadataBase: new URL('https://promptshare-next.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    images: '/public/assets/images/logo.png',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
