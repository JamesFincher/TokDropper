import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import MailingList from "../../Components/MailingList";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>TokDropper</title>
        <meta name="description" content="TokDropper is a simple online storefront intended to convert TikTok ads into revenue. " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="hero min-h-screen " style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome to TokDropper!</h1>
              <p className="mb-5">TokDropper is an online storefront that intends to convert traffic from TikTok ads into a revenue source. Our goal is to provide a clean and simple interface, accessible and maintainable by regular humans.</p>
              <div className="flex flex-col w-full lg:flex-row">
  <MailingList />
</div>  </div>
            
            
  </div>
</div>
      </main>
    </>
  );
};

export default Home;
