import React from "react";
import Todo from "./Todo"; // Todoコンポーネントのインポート

const TodoList = ({ todos }) => {
  return todos.map((todo) => <Todo todo={todo} />);
};

export default TodoList;
