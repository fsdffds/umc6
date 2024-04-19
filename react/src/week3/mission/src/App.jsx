import React from "react";
import { BrowserRouter, Route, Routes, NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./components/MainPage";
import PopularPage from "./components/PopularPage";
import NowPlayingPage from "./components/NowPlayingPage";
import TopRatedPage from "./components/TopRatedPage";
import UpComingPage from "./components/UpComing";
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

function Nav() {
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
            <NavLink to="/admin"
              className={({ isActive }) => {
                return isActive ? "active" : "";
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
  return (
    <>
      <Nav/>
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

function App() {
  return (
    <BrowserRouter>
      {/* <Container className="wrapper"> */}
        <Routes>
          <Route element={<Home/>}>
            <Route exact path="/" element={<MainPage/>}></Route>
            <Route exact path="/popular" element={<PopularPage/>}></Route>
            <Route exact path="/nowplaying" element={<NowPlayingPage/>}></Route>
            <Route exact path="/toprated" element={<TopRatedPage/>}></Route>
            <Route exact path="/upcoming" element={<UpComingPage/>}></Route>
          </Route>
          </Routes>
      {/* </Container> */}
    </BrowserRouter>
  );
}

export default App;