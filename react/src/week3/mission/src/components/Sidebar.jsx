import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { LuMenu } from "react-icons/lu";

const SidebarComponent = styled.div`
  .sidebar {
    display: flex;
    display: none;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => (props.isOpen ? '300px' : '0')};
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 0;
    margin-top: 0;
    color: white;
    background-color: rgb(43, 43, 87);
  }
  .link {
    display: ${props => (props.$isOpen ? 'block' : 'none')};
    flex-direction: column;
    top: 0;
  }
  .link li {
    list-style: none;
    margin: 30px;
  }
  .link li a {
    color: white;
    text-decoration: none;
    font-size: 24px;
    &:hover {
      color: yellow;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 1023px) {
    .sidebar {
      display: block;
      width: ${props => (props.$isOpen ? '100%' : '0')};
      height: 100%;
    }
    .link {
      background-color: rgb(43, 43, 87);
      height: 100vh;
    }
  }
`;

function Sidebar({isOpen, setIsOpen}) {

  const handleClick = () => {
    setIsOpen(false);
  }

  return (
    <SidebarComponent $isOpen={isOpen}>
      <div className="sidebar" >
        <div className="link">
          <li>
            <NavLink to="/signup"
              onClick={handleClick}
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}>회원가입</NavLink>
          </li>
          <li>
            <NavLink to="/popular"
              onClick={handleClick}
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}>Popular</NavLink>
          </li>
          <li>
            <NavLink to="/nowplaying"
              onClick={handleClick}
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}>NowPlaying</NavLink>
          </li>
          <li>
            <NavLink to="/toprated"
              onClick={handleClick}
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}>TopRated</NavLink>
          </li>
          <li>
            <NavLink to="/upcoming"
              onClick={handleClick}
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}>UpComing</NavLink>
          </li>
        </div>
      </div>
    </SidebarComponent>
  );
}

export default Sidebar;