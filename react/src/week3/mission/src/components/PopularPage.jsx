import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Movie from "./Movie";
import Loading from "./Loading";
import { useNavigate, useParams, useLocation, Link } from "react-router-dom";

const PopularContainer = styled.div`
  .container {
    display: flex;
    jusify-content: center;
    align-items: center;
  }
  .movie-item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

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
`;

function PopularPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const movie_url = "https://image.tmdb.org/t/p/w400/";

  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/popular',
    params: {language: 'ko-KR', page: '1'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmVhODk1ZWJhNDE2Yjc2YTk4MTZkOWQ1Nzc0ZDBjZSIsInN1YiI6IjY2MWU5YWI4NmQ5ZmU4MDE3ZDYwNmM5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TrsJisYxDoxOwAfg5jjHOj-3mvInGe-rqKtkM4xlQvA'
    }
  };
  
  const showMovies = () => {
    setLoading(true);
    axios
    .request(options)
    .then(function (response) {
      setLoading(false);
      setMovies(response.data.results);
    })
    .catch(function (error) {
      console.error(error);
    });
  }
  
  useEffect(() => {
    showMovies();
  }, [])

  return (
    <PopularContainer>
      {loading ? <Loading /> : null}
      <div className="container">
        <div className="movie-item">
          {movies &&
            movies.map(movie => {
              return (
                <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
                overview = {movie.overview}
                release_date = {movie.release_date}
                />
              );
          })}
        </div>
      </div>
    </PopularContainer>
  );
}

export default PopularPage;