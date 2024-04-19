import React from "react";
import styled from "styled-components";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";

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
  return (
    <MainComponent>
      <div className="main">
        <div className="movie">
          <BiSolidCameraMovie size="50"color="#FF748C"/>
          <h1>Find your movies !</h1>
        </div>
        <div className="search">
          <input type="text" />
          <FaSearch size="40" color="#FFC0CB"/>
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