import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

import { GetServerSideProps } from "next";

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
  return (
    <div>
      <Head>
        <title>TV Shows & Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Results results={results} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const genre = context.query.genre;
  const keyTyped = genre as keyof typeof requests;
  const genreValue = requests[keyTyped];

  const request = await fetch(
    `https://api.themoviedb.org/3${
      genreValue?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
};
