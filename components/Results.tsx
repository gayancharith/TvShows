import React from "react";
import FlipMove from "react-flip-move";
import Thumbnail from "./Thumbnail";

type ResultType = {
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

type ResultsArrayType = Array<ResultType>;

function Results({
  results,
  handleClick,
}: {
  results: ResultsArrayType;
  handleClick: (id: string) => {};
}) {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((result: ResultType) => (
        <Thumbnail
          onClick={() => handleClick(result.id)}
          key={result.id}
          result={result}
        />
      ))}
    </FlipMove>
  );
}

export default Results;
