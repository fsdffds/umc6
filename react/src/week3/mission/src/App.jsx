import React, { useState } from "react";
import { BrowserRouter, Route, Routes, NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./components/MainPage";
import PopularPage from "./components/PopularPage";
import NowPlayingPage from "./components/NowPlayingPage";
import TopRatedPage from "./components/TopRatedPage";
import UpComingPage from "./components/UpComing";
import MovieDetailPage from "./components/MovieDetailPage";
import Signup from "./components/Signup";
import './App.css';

const NavContainer = styled.div`
  .nav {
    // position: fixed;
    background-color: #000033;
    font-size: 24px;
    display: flex;
    padding: 0;
    margin: 0;
  }
  .home {
    margin: 15px;
    flex-grow: 1;
  }
  .menu {
    float: right;
  }
  .menu li {
    display: inline-block;
    margin: 15px;
    justify-content: space-between;
  }
  .nav li a {
    color: white;
    text-decoration: none;
    flex-wrap: wrap;
    &:hover {
      font-weight: bold;
      font-size: 26px;
      cursor: pointer;
    }
  }
  .nav li a.active {
    color: yellow;
  }
  .nav button {
    border: 0;
    background-color: transparent;
    color: white;
    font-size: 24px;
  }
`;

const FooterContainer = styled.div`
  .container {
    background-color: #000033;
    position: relative;
    // transform : translateY(0%);
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
  }
  p {
    font-size: 20px;
    margin-left: auto;
    align-items: center;
    line-height: 250%;
  }
`;

const NotFoundContainer = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 300px;
    line-height: 2;
  }
  h1 {
    font-size: 50px;
  }
  p {
    font-size: 30px;
  }
  .error {
    font-style: italic;
  }
  .link {
    text-decoration-line: none;
    color: white;
  }
`;

function Nav({ isLogin, setIsLogin }) {

  // function handleClick() {
  //   setIsLogin(!isLogin);
  // }

  return (
    <NavContainer>
      <ul className="nav">
        <div className="home">
          <li>
            <NavLink to="/">UMC Movie</NavLink>
          </li>
        </div>
        <div className="menu">
          <li>
            <NavLink to="/signup"
              // onClick={handleClick}
              className={({ isActive }) => {
                return isActive ? "active" : "";
              // }}>{isLogin ? "로그아웃" : "로그인"}</NavLink>
              }}>회원가입</NavLink>
          </li>
          <li>
            <NavLink to="/popular"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}>Popular</NavLink>
          </li>
          <li>
            <NavLink to="/nowplaying"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}>Now Playing</NavLink>
          </li>
          <li>
            <NavLink to="/toprated"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}>Top Rated</NavLink>
          </li>
          <li>
            <NavLink
              to="/upcoming"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}>UpComing</NavLink>
          </li>
        </div>
      </ul>
    </NavContainer>
  );
}

function Home() {
  // const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      {/* <Nav isLogin={isLogin} setIsLogin={setIsLogin}/> */}
      <Nav />
      <Outlet />
      <Footer/>
    </>
  );
}

function Footer() {
  return (
    <FooterContainer>
      <div className="container">
        <p>blue-movie-footer</p>
      </div>
    </FooterContainer>
  );
}

function NotFound() {
  return (
    <NotFoundContainer>
      <div className="container">
        <h1>Oops!</h1>
        <p>예상치 못한 에러가 발생했습니다.</p>
        <p className="error">Not Found</p>
        <p><NavLink
        to="/"
        className="link">메인으로 돌아가기</NavLink></p>
      </div>
    </NotFoundContainer>
  );
}

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Home />}>
            <Route exact path="/" element={<MainPage/>}></Route>
            <Route exact path="/signup" element={<Signup/>}></Route>
            <Route exact path="/popular" element={<PopularPage/>}></Route>
            <Route exact path="/nowplaying" element={<NowPlayingPage/>}></Route>
            <Route exact path="/toprated" element={<TopRatedPage/>}></Route>
            <Route exact path="/upcoming" element={<UpComingPage/>}></Route>
            <Route exact path="/movie/:title" element={<MovieDetailPage/>}></Route>
          </Route>
          <Route exact path="/*" element={<NotFound/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;