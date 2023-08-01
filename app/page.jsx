import dynamic from 'next/dynamic';

const Feed = dynamic(
  () => import('@components/Feed'),
  {ssr: false},
)

const Home = () => {
  return (
    <section className="w-full flex-col flex">
      <title>PromptShare</title>
        <Feed />
    </section>
  );
};

export default Home;
