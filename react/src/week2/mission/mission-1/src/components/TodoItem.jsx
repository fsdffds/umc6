import React, { useState } from "react";
import styled from "styled-components";

const ItemBlock = styled.div`
  * {
    display: flex;
  }

.item {
  margin: 0 auto;
  width: 50%;
  font-weight: bold;
  border-bottom: 4px solid rgb(174, 196, 204);
  padding-bottom: 10px;
  padding-top: 20px;
  justify-content: space-between;
}

button {
    float: right;
    height: 25px;
    border: 0;
    border-radius: 2px;
    background-color: rgb(174, 196, 204);
    font-weight: bold;
  }
`;

function TodoItem({todo, onDoneChange}) {
  const {id, content, isDone} = todo;
  const [isDoneState, setIsDoneState] = useState(!isDone);

  const doneChange = () => {
    setIsDoneState(!isDoneState);  // 상태 변경
    onDoneChange();
  };

  {/* isDone이 false면 보이기 */}
  return (
    <ItemBlock>
      {isDoneState && (
        <div className="item">
        {!isDone ? <span>{content}</span> : null}
        <button className="done" onClick={doneChange}>완료</button>
      </div>
      )}
    </ItemBlock>
  );
}

export default TodoItem;