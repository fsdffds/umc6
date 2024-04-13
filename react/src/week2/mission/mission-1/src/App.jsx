import React from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoDoneList from "./components/TodoDoneList";
import TodoItem from "./components/TodoItem";
import TodoDoneItem from "./components/TodoDoneItem";
import { useEffect, useState } from "react";
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "Send E-mail", isDone: false },
    { id: 2, content: "Make Work-Books", isDone: false },
    { id: 3, content: "Sleeping", isDone: true },
    { id: 4, content: "Watching You-Tube", isDone: true },
  ]);

  const [doneTodos, setDoneTodos] = useState([]);  // 완료 상태

  // 새로운 할 일 추가
  const addTodo = (content) => {
      const newTodo = {
        id: todos.length + 1,
        content: content,
        isDone: false
      };
      setTodos(prevTodos => [...prevTodos, newTodo]);
    };

  // 화면에 안 떠서 추가
  useEffect(() => {
    // This will execute every time 'todos' state changes
  }, [todos], [doneTodos]);

  const onDoneChange = (id) => {
    setTodos(prevTodos => prevTodos.map(todo => {
      if (todo.id === id) {
        return {...todo, isDone: true};
      }
      return todo;
    }))
  }

  return (
    <div>
      <TodoHeader></TodoHeader>
      <TodoInput addTodo={addTodo}></TodoInput>
      <TodoList title={"해야 할 일"} todos={todos} onDoneChange={() => onDoneChange(todos.id)}>
        <TodoItem></TodoItem>
      </TodoList>
      <TodoDoneList title={"해낸 일"} todos={doneTodos}>
      <TodoDoneItem></TodoDoneItem>
      </TodoDoneList>
    </div>
  );
}

export default App;
