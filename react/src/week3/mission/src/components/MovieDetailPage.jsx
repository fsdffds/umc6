import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams, useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const MovieContainer = styled.div`
  .container {
    display: flex;
    margin: 120px 180px;
    align-items: center;
  }
  .left-container {
    margin: 0 20px;
  }
  .right-container {
    line-height: 2.5;    
    margin: 0 70px;
  }
  h3 {
    font-size: 35px;
    font-weight: bold;
  }
  .right-container div {
    font-size: 22px;
    display: flex;
    margin: 15px auto;
    font-weight: bold;
  }
  p {
    font-size: 18px;
  }
  .star {
    color: yellow;
    display: flex;
    align-items: center;
    margin-left: 5px;
  }
`;

const CreditContainer = styled.div`
  .credit {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
    margin: auto 80px;
  }
  h2 {
    display: flex;
    margin: 50px;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    margin: 30px;
  }
  .person_container {
    margin: 30px;
    width: 120px;
    height: 100px;
    text-align: center;
  }
  .container {
    margin: 0 auto;
  }
  p {
    margin: 5px;
  }
  img {
    width: 80px;
    height: 80px;
    border-radius: 70%;
  }
`;

function MovieDetailPage() {
  const location = useLocation();
  const movieInfo = {...location.state};
  const movie_url = "https://image.tmdb.org/t/p/w400/";
  const floorAvg = Math.floor(movieInfo.vote_average);

  const people_url = "https://image.tmdb.org/t/p/w200/";
  const img_null = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s";

  const [movies, setMovies] = useState();
  const [crews, setCrews] = useState();
  const [casts, setCasts] = useState();

  const {id} = useParams();

  const mOptions = axios.create(
    {
      method: 'GET',
      baseURL: 'https://api.themoviedb.org/3',
      params: {language: 'ko-KR', movie_id: id},
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmVhODk1ZWJhNDE2Yjc2YTk4MTZkOWQ1Nzc0ZDBjZSIsInN1YiI6IjY2MWU5YWI4NmQ5ZmU4MDE3ZDYwNmM5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TrsJisYxDoxOwAfg5jjHOj-3mvInGe-rqKtkM4xlQvA'
      }
    }
  );

  useEffect(() => {
    const movieData = async () => {
      const response = await mOptions.get(`/movie/${id}`)
      setMovies(response.data);
      // console.log(response.data);
    }
    movieData();
  }, [id]);

  const cOptions = axios.create(
    {
      method: 'GET',
      baseURL: 'https://api.themoviedb.org/3',
      params: {language: 'en-US'},
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmVhODk1ZWJhNDE2Yjc2YTk4MTZkOWQ1Nzc0ZDBjZSIsInN1YiI6IjY2MWU5YWI4NmQ5ZmU4MDE3ZDYwNmM5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TrsJisYxDoxOwAfg5jjHOj-3mvInGe-rqKtkM4xlQvA'
      }
    }
  );

  useEffect(() => {
    const creditData = async () => {
      const response = await cOptions.get(`/movie/${id}/credits`)
      setCrews(response.data);
      setCasts(response.data);
    }
    creditData();
  }, [id]);

  return(
    <>
      <div className="movie">
          {movies && 
            [movies].map(movie => {
            return(
              <MovieContainer key={movie.imdb_id}>
                <div className="container">
                  <div className="left-container">
                    <img src={movie_url + movie.poster_path} alt="이미지" />
                  </div>
                  <div className="right-container">
                    <h3>{movie.title}</h3>
                    <div className="vote">평점
                      <p className="star">
                        {[...Array(floorAvg)].map((_, index) => (
                          <FaStar key={index} className="star" />
                        ))}
                      </p>
                    </div>
                    <div>개봉일 {movie.release_date}</div>
                    <div>줄거리</div>
                    <p>{movie.overview ? movie.overview : "TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다."}</p>
                  </div>
                </div>
              </MovieContainer>
            );
          })}
      </div>
      <CreditContainer>
        <h2>출연진 및 제작진</h2>
        <div className="credit">
          {casts &&
            casts.cast.map(cast => {
              const imgPath = cast.profile_path ? `${people_url}${cast.profile_path}` : img_null;
              return(
                <div className="person_container"  key={cast.cast_id}>
                  <div className="container">
                    <img src={imgPath} />
                    <p>{cast.name}</p>
                  </div>
                </div>
              );
            })
          }
          {crews &&
            crews.crew.map(crew => {
              const imgPath = crew.profile_path ? `${people_url}${crew.profile_path}` : img_null;
              return(
                <div className="person_container"  key={crew.credit_id}>
                  <div className="container">
                    <img src={imgPath} />
                    <p>{crew.name}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </CreditContainer>
    </>
  );
}

export default MovieDetailPage;