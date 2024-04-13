import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const ListBlock = styled.div`

.container {
  display: flex;
  justify-content: center;
  float: left;
  flex-direction: column;
  text-align: center;
  width: 50%
}

.list{
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

`;

function TodoList({title, todos}) {
  
  return (
    <ListBlock>
      <div className="container">
        <p className="list">{title}</p>
          {todos.map(todo => (
            <TodoItem
            todo={todo}
            key={todo.id}
            content={todo.content}
            done={todo.done}>
            </TodoItem>))}
      </div>
    </ListBlock>
  );
}
export default TodoList;