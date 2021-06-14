import { forwardRef } from "react";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

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

interface ResultsProps {
  result: ResultType; // my custom prop
}

const ResultItem = forwardRef<HTMLInputElement, ResultsProps>((props, ref) => {
  const { result } = props;
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div ref={ref} className="group p-2">
      <h2 className="text-center mb-2 text-2xl sm:text-3xl md:text-5xl text-white font-bold ">
        {result.title || result.original_name}
      </h2>
      <Image
        layout="responsive"
        src={`${BASE_URL}/${result.backdrop_path || result.poster_path}`}
        height={1080}
        width={1920}
      />
      <div className="p-2">
        <p className="flex-wrap">{result.overview}</p>
        <p className="flex items-center">
          {result.media_type && `${result.media_type} .`}{" "}
          {result.release_date || result.first_air_date}.{" "}
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default ResultItem;
