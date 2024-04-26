import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams, useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Container = styled.div`
  .container {
    display: flex;
    // background-image : url(movie_url + movieInfo.poster_path);
    margin: 120px;
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
  }
  .right-container div {
    font-size: 20px;
    display: flex;
  }
  .right-container .vote {
    
  }
`;
const StarContainer = styled.div`
  color: yellow;
  display: flex;
  align-items: center;
  margin-left: 5px;
`;

function MovieDetailPage() {
  const location = useLocation();
  const movieInfo = {...location.state};
  const movie_url = "https://image.tmdb.org/t/p/w400/";
  const floorAvg = Math.floor(movieInfo.vote_average);

  return (
    <Container>
      <div className="container">
        <div className="left-container">
          <img src={movie_url + movieInfo.poster_path} alt="이미지" />
        </div>
        <div className="right-container">
          <h3>{movieInfo.title}</h3>
          <div className="vote">평점
          <StarContainer>
            {[...Array(floorAvg)].map((_, index) => (
              <FaStar key={index} className="star" />
            ))}
          </StarContainer>
          </div>
          <div>개봉일 {movieInfo.release_date}</div>
          <div>줄거리</div>
          <div>{movieInfo.overview ? movieInfo.overview : "TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다."}</div>
        </div>
      </div>
    </Container>
  );
}

export default MovieDetailPage;