import React, { useState } from "react";

function Movie({title, poster_path, vote_average, overview}) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const movie_url = "https://image.tmdb.org/t/p/w400/";

  return (
    <div className="movie-container"
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}>
      <img src={movie_url + poster_path} alt="포스터" />
      <div className="movie-info">
        <h4>{title}</h4>
        <span>{vote_average}</span>
      </div>

      {isMouseOver && (
        <div className="movie-overview">
          <p>{title}</p>
          <p>{overview}</p>
        </div>
      )}
    </div>
  );
}

export default Movie;