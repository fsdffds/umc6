import React from "react";
import CartList from "./components/CartList";
import styled from "styled-components";
import './App.css'
import { CartIcon } from "./constants/icons";
import { useDispatch, useSelector } from "react-redux";

const NavContainer = styled.div`
  .nav {
    display: flex;
    background-color: #3366FF;
    font-size: 36px;
    color: white;
  }
  .title p {
    margin: 24px 200px;
    font-weight: bold;
  }
  .cart {
    position: absolute;
    right: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 24px 0;
    span {
      background-color: #809FFF;
      border: 0;
      border-radius: 30px;
      font-size: 20px;
      posotion: absolute;
    }
  }
`;

function Nav() {

  const items = useSelector((state) => state.cart.totalAmount);   // state에 접근한다.
  const dispatch = useDispatch();

  return (
    <NavContainer>
      <div className="nav">
        <div className="title">
          <p>UMC PlayList</p>
        </div>
        <div className="cart">
          <CartIcon width="40" height="40"></CartIcon>
          <span>{items}</span>
        </div>
      </div>
    </NavContainer>
  );
}

function App() {
  return(
    <>
      <Nav />
      <CartList />
    </>
  );
}

export default App;