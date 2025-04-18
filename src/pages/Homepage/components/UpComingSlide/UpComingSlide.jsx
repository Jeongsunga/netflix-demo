import React from "react";
import { useUpComingMoviesQuery } from "../../../../hooks/useUpComingMovies";
import { Alert, Spinner } from "react-bootstrap";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import {responsive} from "../../../../constants/responsive"

const UpComingSlide = () => {
  const { data, isLoading, isError, error } = useUpComingMoviesQuery();

  if (isLoading) {
    return <Spinner animation="border" variant="danger" />;
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <MovieSlider title='Upcoming Movies' movies={data.results} responsive={responsive}/>
    </div>
  );
};

export default UpComingSlide;
