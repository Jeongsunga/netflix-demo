import React from "react";
import './MovieCard.style.css';
import { Badge } from "react-bootstrap";
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const getStars = (rating) => {
    const fullStars = Math.floor(rating / 2);
    const hasHalfStar = rating % 2 >= 1;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
    return (
      <>
        {[...Array(fullStars)].map((_, i) => <FaStar key={`full-${i}`} color="gold" />)}
        {hasHalfStar && <FaStarHalfAlt color="gold" />}
        {[...Array(emptyStars)].map((_, i) => <FaRegStar key={`empty-${i}`} color="gold" />)}
      </>
    );
  };

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` +
          ")",
      }}
      className="movie-card"
    >
      <div className="overlay"> 
        <div className="movie-title">{movie.title}</div>
        {movie.genre_ids.map((id) => (
          <Badge bg="danger" className="m-1">{id}</Badge>
        ))}
        <div>
            <div>{getStars(movie.vote_average)} ({movie.vote_average.toFixed(1)})</div>
            <div>👥 {Math.round(movie.popularity)}</div>
            <div style={{ color: movie.adult ? '#FA8072' : '#6495ED' }}>{movie.adult?'🧑🏻 over18':'👶🏻 under18'}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
