import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, decrease, increase, removeItem,  } from "../redux/cartSlice";
import { ChevronUp, ChevronDown } from "../constants/icons"
import styled from "styled-components";

const HomeContainer = styled.div`
  .home {
    text-align: center;
    font-size: 18px;
    color: navy;
  }
  .title {
    font-size: 45px;
    color: navy;
    font-weight: bold;
  }
  .item {
    display: flex;
    margin-bottom: 20px;
    align-items: center;
  }
  .item img {
    margin-left: 300px;
  }
  .item_title {
    margin: 0 80px;
    display: flex;
    flex-direction: column;
  }
  .item_title > div {
    display: flex;
    align-items: center;
    p {
      margin-top: 0;
    }
  }
  .item_detail {
    font-weight: bold;
  }
  .v-line {
    border-left : thin solid navy;
    height : 18px;
    margin: 10px;
  }
  .amount_btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 300px;
  }
  .amount_btn > p {
    margin: 5px 0;
  }
  .amount_btn > button {
    border: 0;
    background-color: transparent;
    color: #3366FF;
    height: 30px;
    width: 30px; 
    display: inline-flex; 
    align-items: center;
    justify-content: center;
  }
  hr {
    border : 0;
    border-top: 1px solid navy;
    width: 70%;
  }
  .bottom {
    font-weight: bold;
    button {
      border: 1px solid red;
      background-color:transparent;
      color: red;
      font-size: 18px;
      padding: 10px;
      border-radius: 8px;
    }
    margin-bottom: 50px;
  }
  .cost {
    display: flex;
  }
  .cost_left {
    margin-left: 300px;
  }
  .cost_right {
    position: absolute;
    right: 300px;
  }
`;

function CartList() {

  const items = useSelector((state) => state.cart.items);   // state에 접근한다.
  const dispatch = useDispatch();
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <HomeContainer>
      <div className="home">
        <div className="title">
          <p>당신이 선택한 음반</p>
        </div>
        <div className="album">
          <>{items.map((item) => (
            <div key={item.id} className="item">
              <img src={item.img} alt={item.title} width="85" height="85" />
              <div className="item_title">
                <div className="item_detail">
                  <p>{item.title}</p> <p className="v-line"/>
                  <p>{item.singer}</p>
                </div>
                <div className="price">₩ {item.price}</div>
              </div>
              <div className="amount_btn">
                <button onClick={() => dispatch(increase(item.id))}><ChevronUp /></button>
                <p>{item.amount}</p>
                {item.amount > 1 ? (
                  <button onClick={() => dispatch(decrease(item.id))}><ChevronDown /></button>
                ) : (<button onClick={() => dispatch(removeItem(item.id))}><ChevronDown /></button>)}
              </div>
            </div>
          ))}</>
        </div>
        <hr />
        <div className="bottom">
          <div className="cost">
            <p className="cost_left">총 가격</p>
            <p className="cost_right">₩ {totalPrice.toLocaleString()}</p>
          </div>
          <div>
            <button onClick={() => dispatch(clearCart())}>장바구니 초기화</button>
          </div>
        </div>
      </div>
    </HomeContainer>
  );
}

export default CartList;