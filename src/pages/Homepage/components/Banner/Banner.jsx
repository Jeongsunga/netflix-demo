import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import { Alert, Spinner } from "react-bootstrap";
import "./Banner.style.css";

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log("ddd", data);

  if (isLoading) {
    return <Spinner animation="border" variant="danger"/>;
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://image.tmdb.org/t/p/w533_and_h300_bestv2${data?.results[0].poster_path}` +
          ")",
      }}
      className="banner"
    >
      <div className="text-white banner-text-area">
        <h1 className="banner-title">{data?.results[0].title}</h1>
        <p className="multi-line">{data?.results[0].overview}</p>
      </div>
    </div>
  );
};

export default Banner;
