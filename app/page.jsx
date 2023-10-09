import dynamic from 'next/dynamic';
import Feed from '@components/Feed';


const Home = () => {
  return (
    <section className="w-full flex-col flex">
      <title>PromptShare</title>
        <Feed />
    </section>
  );
};

export default Home;
