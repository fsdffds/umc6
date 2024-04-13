import React, { useCallback } from "react";
import styled from "styled-components";
import { useState } from "react";

const InputBlock = styled.div`

.container {
  margin: 0 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

input {
  border: 1px solid;
  margin: 0 auto;
  width: 80%;
  height: 40px;
  background-color: white;
}

`;

function TodoInput(props) {
  const [text, setText] = useState('');
  const onChange = useCallback(e => {
    setText(e.target.value);
  }, [])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (text.trim() !== '') {
        props.addTodo(text);
        setText('');  // 비우기
      }
    }
  }
  
  return (
    <InputBlock>
      <div className="container">
        <input
        onKeyDown={handleKeyDown}
        type="text" 
        id="input"
        value={text}
        placeholder="UMC스터디 계획을 작성해보세요!"
        onChange={onChange}>
        </input>
      </div>
    </InputBlock>
  );
}

export default TodoInput;