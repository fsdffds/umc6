import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Movie from "./MovieDetailPage";
import Loading from "./Loading";

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

  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/now_playing',
    params: {language: 'en-US', page: '1'},
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
      // console.log(response.data);
      const info = response.data.results.map(datas => {
        return {
          id: datas.id,
          title: datas.title,
          poster_path: datas.poster_path,
          vote_average: datas.vote_average,
          overview: datas.overview,
        };
      });
      setMovies(info);
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
                title={movie.title}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
                overview = {movie.overview}
              />
              );
          })}
        </div>
      </div>
    </NowPlayingContainer>
  );
}

export default NowPlayingPage;