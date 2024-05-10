import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const MovieContainer = styled.div`
.movie-container {
  display: flex;
  width: 400px;
  margin: 16px;
  background-color: rgb(43, 43, 87);
  border-radius: 10px;
  position: relative;
  flex-wrap: wrap;
}

img {
  border-radius: 10px;
  justify-content: center;
}

.movie-info {
  display: flex;
  width: 400px;
  color: white;
  padding: 20px;
  padding-bottom: 40px;
  // justify-content: center;
  // align-items: center;
}
span {
  margin-left: auto;
}

// .movie-overview {
//   position: absolute;
//   top: 0;
//   height: 685px;
//   width: 400px;
//   border-radius: 10px;
//   background-color: rgba(0, 0, 0, 0.808);
//   opacity: 0;
//   color: white;
// }

// .movie-overview p {
//   margin: 20px;
//   margin-top: 40px;
//   line-height: 1.5;
// }

// .movie-overview:hover {
//   opacity: 1;
// }
`;

function Movie({id, poster_path, title, vote_average, overview, release_date}) {

  const movie_url = "https://image.tmdb.org/t/p/w400/";
  
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/movie/${id}`, {state: {id, poster_path, title, vote_average, overview, release_date}});
  }

  return (
    <MovieContainer>
      <div className="movie-container"
        onClick={handleClick}
        key={id}
        >
        <img src={movie_url + poster_path} alt="이미지" />
        <div className="movie-info">
          <h4>{title}</h4>
          <span>⭐{vote_average}</span>
        </div>
      </div>
    </MovieContainer>
  );
}

export default Movie;