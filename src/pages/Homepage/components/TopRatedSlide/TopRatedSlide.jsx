import React from "react";
import { useTopRatedMoviesQuery } from "../../../../hooks/useTopRatedMovies";
import { Alert, Spinner } from "react-bootstrap";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import {responsive} from "../../../../constants/responsive"

const TopRatedSlide = () => {
    const { data, isLoading, isError, error } = useTopRatedMoviesQuery();

    if (isLoading) {
        return <Spinner animation="border" variant="danger"/>;
      }
    
      if (isError) {
        return <Alert variant="danger">{error.message}</Alert>;
      }

  return (
    <div>
      <MovieSlider title='Top Rated Movies' movies={data.results} responsive={responsive}/>
    </div>
  );
};

export default TopRatedSlide;
