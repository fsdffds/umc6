import React from "react";
import styled from "styled-components";

const HeaderBlock = styled.div`
  .container {
    margin: 0 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  h1 {
    margin-top: 80px;
    text-align: center;
    padding-bottom: 120px;
    border-bottom: 2px solid rgb(174, 196, 204);
  }
`;

function TodoHeader() {
  return (
    <HeaderBlock>
    <div className="container">
      <h1>UMC Study Plan</h1>
    </div>
    </HeaderBlock>
  );
}

export default TodoHeader;