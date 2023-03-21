import React, { useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./Todo.css";
import { useSelector } from "react-redux";



const Todo = () => {
  const todoList = useSelector((state) => state.todo.todoList);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="app">
      <h2>Todo With Redux</h2>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default Todo;
