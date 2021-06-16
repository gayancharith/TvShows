import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

import { GetStaticProps  } from "next";

type ResultsArrayType = Array<{
  id: string;
  backdrop_path: string | null;
  poster_path: string | null;
  overview: string;
  title: string | null;
  original_name: string | null;
  media_type: string | null;
  release_date: string | null;
  first_air_date: string | null;
  vote_count: string;
}>;

export default function Home({ results }: { results: ResultsArrayType }) {
  const router = useRouter();
  const handleClick = (id: string) => router.push(`/movie/${id}`);
  return (
    <div>
      <Head>
        <title>TV Shows & Movies</title>
        <meta property="og:title" content="TV Shows & Movies" key="title" />
        <meta
          name="description"
          property="og:description"
          content="TV Shows & Movies"
          key="description"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Results
        handleClick={(id: string) => handleClick(id)}
        results={results}
      />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async() => {
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests.fetchTrending.url
    }`).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
    revalidate: 1 * 24 * 60, // In seconds
  }
}
