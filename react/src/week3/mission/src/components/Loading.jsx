import React from "react";
import styled from "styled-components";
// import Spinner from "/img/Spinner.gif";
import {RingLoader} from "react-spinners";

const LoadingContainer = styled.div`
.container {
  background-color: #20124D;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
p {
  font-size: 24px;
  margin: 25px;
}
`;
function Loading() {
  return (
    <LoadingContainer>
    <div className="container">
      <p>로딩중</p>
      {/* <img src={Spinner} alt="로딩중" width="5%" /> */}
      <RingLoader color="#FFDAE0" />
    </div>
    </LoadingContainer>
  );
}

export default Loading;