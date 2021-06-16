import Head from "next/head";
import Header from "../../components/Header";
import ResultItem from "../../components/ResultItem";
import requests from "../../utils/requests";

import { GetStaticProps, GetStaticPaths } from "next";

type ResultsArrayType = {
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
};

const Movie = ({ result }: { result: ResultsArrayType }) => {
  return (
    <div>
      <Head>
        <title>TV Shows & Movies</title>
        <meta
          property="og:title"
          content={result.original_name || "Tv shows and Movie"}
          key="title"
        />
        <meta
          name="description"
          property="og:description"
          content={result.overview}
          key="description"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ResultItem key={result.id} result={result} />
    </div>
  );
};

export default Movie;

export const getStaticPaths: GetStaticPaths = async() => {
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests.fetchTrending.url
    }`).then((res) => res.json());
    console.log({request: request.results})
  const paths = request.results.map((movie: ResultsArrayType) => {
    return {
      params: {
        id: movie.id.toString()
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async({params}) => {
  const result = await fetch(
    `https://api.themoviedb.org/3/movie/${params?.id}?api_key=${process.env.API_KEY}`
  ).then((res) => res.json());

  return {
    props: {
      result
    },
    revalidate: 1 * 24 * 60, // In seconds
  }
}
