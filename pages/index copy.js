import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>TV shows</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center bg-black">
        <h1 className="text-5xl text-white max-w-lg">
          Unlimited movies, TV shows and more
        </h1>
        <h2 className="text-3xl text-white mt-4">Watch anywhere</h2>
        <p className="text-white">
          Ready to watch the tv shows and waste your time
        </p>
        <div className="flex mt-4">
          <input placeholder="Name" className="bg-white p-4 min-w-[300px]" />
          <button className="flex items-center bg-[#e50914] text-white text-xl px-8">
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
}
