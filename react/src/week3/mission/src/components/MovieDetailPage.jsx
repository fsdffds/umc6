import React, {useState} from "react";
import styled from "styled-components";

const MovieContainer = styled.div`
.movie-container {
  display: flex;
  width: 400px;
  margin: 16px;
  background-color: rgb(43, 43, 87);
  border-radius: 10px;
  position: relative;
  justify-content: center;
  flex-wrap: wrap;
}

img {
  border-radius: 10px;
}

.movie-info {
  display: flex;
  color:white;
  padding: 20px;
  padding-bottom: 40px;
  justify-content: space-between;
  align-items: center;
}

.movie-info h4 {
  margin: 0;
}

.movie-overview {
  position: absolute;
  top: 0;
  height: 685px;
  width: 400px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.808);
  opacity: 0;
  color: white;
}

.movie-overview p {
  margin: 20px;
  margin-top: 40px;
  line-height: 1.5;
}

.movie-overview:hover {
  opacity: 1;
}
`;

function Movie({poster_path, title, vote_average, overview}) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const movie_url = "https://image.tmdb.org/t/p/w400/";

  return (
    <MovieContainer>
      <div className="movie-container"
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}>
        <img src={movie_url + poster_path} alt="이미지" />
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
    </MovieContainer>
  );
}

export default Movie;