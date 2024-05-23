import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

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
    justify-content: center;
  }
  h1 {
    font-size: 40px;
    font-weight: bold;
    margin: 50px;
    margin-left: 10px;
    margin-bottom: 40px;
  }
  .search {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
  input {
    width: 380px;
    height: 35px;
    border-radius: 20px;
    margin-right: 5px;
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
    position: relative;
  }
  .results {
    display: flex;
    flex-wrap: wrap;
  }
  .hover_movie {
    position: absolute;
    opacity: 0;
    width: 300px;
    height: 550px;
    top: 0;
  }
  .hover_movie: hover {
    background-color: black;
    color: white;
    opacity: 1;
  }
  .hover_movie p {
    margin: 20px;
    line-height: 1.2;
    font-size: 16px;
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
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [loading, setLoading] = useState(true);

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
    const delayDebounceTimer = setTimeout(() => {
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
    }, 1000);
    return () => clearTimeout(delayDebounceTimer);
  }, [query])

  const searchItems = (e) => {
    setQuery(e.target.value);
    const filteredData = movies.filter((movie) => {
      // return movie.title.includes(query);
      return movie.title.toLowerCase().includes(query.toLowerCase());
    })
    setFiltered(filteredData)
  }

  const navigate = useNavigate();

  return (
    <MainComponent>
      <div className="main">
        <div className="movie">
          {/* <BiSolidCameraMovie size="50"color="#FF748C"/> */}
          <h1>📽️Find your movies !</h1>
        </div>
        <div className="search">
          <input type="text"
            value={query} 
            onChange={searchItems}/>
          <button><FaSearch size="40" color="#FFC0CB"/></button>
        </div>
        <div className="search_component">
        {loading ? (<div>데이터를 받아오는 중 입니다</div>) : (
          <div className="results">
            {filtered.map((item) => {
            return (
              <div className="search_movie" 
                key={item.id}
                onMouseEnter={() => setIsMouseOver(true)}
                onMouseLeave={() => setIsMouseOver(false)}
                onClick={() => navigate(`/movie/${item.id}`, {state: {...item}})}
              >
                <img src={`${movie_url}${item.poster_path}`} alt="이미지" />
                <div className="search_info">
                  <p>{item.title}</p>
                  <span>⭐{item.vote_average}</span>
                </div>
                {isMouseOver && (
                  <div className="hover_movie">
                  <p>{item.title}</p>
                  <p>{item.overview}</p>
                </div>
                )}
              </div>
            )
          })}
          </div>
        )}
        </div>
      </div>
    </MainComponent>
  );
}

function MainPage() {
  return(
    <>
      <div className="wrapper">
        <Banner />
        <Main />
      </div>
    </>
  );
}

export default MainPage;