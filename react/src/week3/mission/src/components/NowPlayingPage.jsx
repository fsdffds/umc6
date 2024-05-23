import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import axios from "axios";
import Movie from "./Movie";
import Loading from "./Loading";
import Sidebar from "./Sidebar";

const NowPlayingContainer = styled.div`
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

function NowPlayingPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);

  const mOptions = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/now_playing',
    params: {language: 'ko-KR', page: '1'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmVhODk1ZWJhNDE2Yjc2YTk4MTZkOWQ1Nzc0ZDBjZSIsInN1YiI6IjY2MWU5YWI4NmQ5ZmU4MDE3ZDYwNmM5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TrsJisYxDoxOwAfg5jjHOj-3mvInGe-rqKtkM4xlQvA'
    }
  };
  
  const showMovies = () => {
    setLoading(true);
    axios
    .request(mOptions)
    .then(function (response) {
      setLoading(false);
      // console.log(response.data);
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
    <NowPlayingContainer>
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
        <Sidebar showSidebar={showSidebar} />
      </div>
    </NowPlayingContainer>
  );
}

export default NowPlayingPage;