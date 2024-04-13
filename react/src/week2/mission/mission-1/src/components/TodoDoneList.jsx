import React from "react";
import styled from "styled-components";
import TodoDoneItem from "./TodoDoneItem";

const ListBlock = styled.div`

.container {
  display: flex;
  justify-content: center;
  float:right;
  flex-direction: column;
  text-align: center;
  width: 50%
}

.list {
  flex: 1;
  margin-right: 20px;
}

p {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  text-decoration: underline 2px solid rgb(174, 196, 204);
  text-underline-offset: 4px;
}

.list div {
  margin: 0 auto;
  width: 50%;
  font-weight: bold;
  border-bottom: 4px solid rgb(174, 196, 204);
  padding-bottom: 10px;
  padding-top: 20px;
}

`;

function TodoDoneList({todos, title}) {

  return(
    <ListBlock>
      <div className="container">
        <p className="list">{title}</p>
        <div>
          {todos.map(todo => (
            <TodoDoneItem
            todo={todo}
            key={todo.id}
            content={todo.content}
            done={todo.done}>
            </TodoDoneItem>
          ))}
        </div>
      </div>
    </ListBlock>
  );
}

export default TodoDoneList;