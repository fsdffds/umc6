import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import axios from 'axios';

const BannerComponent = styled.div`
  .container {
    background-color: black;
    display: flex;
    height: 400px;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-size: 32px;
    font-weight: bold;
  }
`;

const MainComponent = styled.div`
  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // height: calc(100% - 50px);
    margin-bottom: 255px;
  }
  .movie {
    display: flex;
    align-items: center;
  }
  h1 {
    font-size: 40px;
    font-weight: bold;
    margin: 50px;
    margin-left: 10px;
  }
  .search {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
  input {
    width: 350px;
    height: 30px;
    border-radius: 20px;
    margin-right: 15px;
  }
  button {
    background-color:transparent;
    border: none;
  }
  .search_component {
    margin-top: 20px;
    width: 60%;
    height: 800px;
    background-color: #150c33;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
      &::-webkit-scrollbar {
        width: 7px;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background: #FF748C;
      }
  }
  .search_movie {
    background-color: rgb(43, 43, 87);
    border-radius: 10px;
    margin: 20px;
    width: 300px;
    height: 550px;
  }
  .search_info {
    display: flex;
    padding: 10px;
    flex-wrap: wrap;
  }
  .search_info p {
    width: 75%;
  }
  span {
    margin-left: auto;
  }
`;


function Banner() {
  return (
    <BannerComponent>
      <div className="container">
        <h1>환영합니다</h1>
      </div>
    </BannerComponent>
  );
}

function Main() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const movie_url = "https://image.tmdb.org/t/p/w300";

  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    params: {include_adult: 'false', language: 'ko-KR', page: '1', query: query},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmVhODk1ZWJhNDE2Yjc2YTk4MTZkOWQ1Nzc0ZDBjZSIsInN1YiI6IjY2MWU5YWI4NmQ5ZmU4MDE3ZDYwNmM5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TrsJisYxDoxOwAfg5jjHOj-3mvInGe-rqKtkM4xlQvA'
    }
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setMovies(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [query])

  const searchItems = (e) => {
    setQuery(e.target.value);
    const filteredData = movies.filter((movie) => {
      // return movie.title.includes(query);
      return movie.title.toLowerCase().includes(query.toLowerCase());
    })
    setFiltered(filteredData)
  }


  return (
    <MainComponent>
      <div className="main">
        <div className="movie">
          {/* <BiSolidCameraMovie size="50"color="#FF748C"/> */}
          <h1>📽️ Find your movies !</h1>
        </div>
        <div className="search">
          <input type="text"
            value={query} 
            onChange={searchItems}/>
          <button><FaSearch size="40" color="#FFC0CB"/></button>
        </div>

        <div className="search_component">
          {filtered.map((item) => {
            return (
              <div className="search_movie" key={item.id}>
                <img src={`${movie_url}${item.poster_path}`} alt="이미지" />
                <div className="search_info">
                  <p>{item.title}</p>
                  <span>⭐{item.vote_average}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </MainComponent>
  );
}

function MainPage() {
  return(
      <div className="wrapper">
        <Banner />
        <Main />
      </div>
  );
}

export default MainPage;