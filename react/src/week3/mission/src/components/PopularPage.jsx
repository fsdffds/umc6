import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Movie from "./Movie";
import Loading from "./Loading";
import { useNavigate, useParams, useLocation, Link } from "react-router-dom";
import Pagination from "./Pagination";

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
    margin: 100px;
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

  const [totalPages, setTotalPages] = useState(1);  // 전체 데이터 받아오기

  const [limit, setLimit] = useState(20);  // 페이지 당 데이터 수
  const [page, setPage] = useState(1);     // 현재 페이지 번호
  const offset = (page - 1) * limit;       // 첫 게시물의 위치

  const movie_url = "https://image.tmdb.org/t/p/w400/";

  // const options = {
  //   method: 'GET',
  //   url: 'https://api.themoviedb.org/3/movie/popular',
  //   params: {language: 'ko-KR', page: totalPages},
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmVhODk1ZWJhNDE2Yjc2YTk4MTZkOWQ1Nzc0ZDBjZSIsInN1YiI6IjY2MWU5YWI4NmQ5ZmU4MDE3ZDYwNmM5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TrsJisYxDoxOwAfg5jjHOj-3mvInGe-rqKtkM4xlQvA'
  //   }
  // };
  
  // const showMovies = () => {
  //   setLoading(true);
  //   axios
  //   .request(options)
  //   .then(function (response) {
  //     setLoading(false);
  //     setMovies(response.data.results);
  //     console.log(response.data.total_pages);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });
  // }
  
  // useEffect(() => {
  //   showMovies();
  // }, [])

  const options = axios.create(
    {
      method: 'GET',
      params: {language: 'ko-KR'},
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmVhODk1ZWJhNDE2Yjc2YTk4MTZkOWQ1Nzc0ZDBjZSIsInN1YiI6IjY2MWU5YWI4NmQ5ZmU4MDE3ZDYwNmM5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TrsJisYxDoxOwAfg5jjHOj-3mvInGe-rqKtkM4xlQvA'
      }
    }
  )

  useEffect(() => {
    setLoading(true);
    const movieData = async () => {
      setLoading(false);
      // const response = await options.get(`https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=${totalPages}`)
      const response = await options.get('https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1')
      // const totalPages = response.data.total_pages;
      // setTotalPages(totalPages);
      // for (let i = 1; i <= totalPages; i++) {

      // }
      setMovies(response.data.results);
      // console.log(response.data.total_pages);
    }
    movieData();
  }, []);

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await options.get(`https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=${page}`);
  //       setMovies(response.data.results);
  //       setTotalPages(response.data.total_pages);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('영화 데이터를 가져오는 중 오류 발생:', error);
  //       setLoading(false);
  //     }
  //     return setTimeout(page, 0);
  //   };
  //   fetchMovies();
  // }, [page]);

  return (
    <PopularContainer>
      {loading ? <Loading /> : null}
      <div className="container">
        <div className="movie-item">
          {movies &&
            movies.slice(offset, offset + limit).map(movie => {
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
      <Pagination 
          total={totalPages * limit}
          limit={limit}
          page={page}
          setPage={setPage}
        />
    </PopularContainer>
  );
}

export default PopularPage;