import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const Thumbnail = forwardRef(({ movie }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div
      ref={ref}
      className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        layout="responsive"
        alt="movie_information"
        src={
          `${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
          `${BASE_URL}${movie.poster_path}`
        }
        height={1080}
        width={1920}
      />

      <div className="p-2">
        <h2
          className="mt-1 text-2xl text-white transition-all
        duration-50 ease-in-out group-hover:font-bold"
        >
          {movie.title || movie.original_name}
        </h2>
        <p className="truncate max-w-md">{movie.overview}</p>

        <p className="flex items-center opacity-0 group-hover:opacity-100">
          
          Release Date: {movie.release_date || movie.first_air_date}{" "}
          <ThumbUpIcon className="h-5 mx-2" /> {movie.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
