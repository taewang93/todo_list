import React from "react";
import styled from "styled-components";
import { useTodoState } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useTodoState();

  return (
    <StyledTodoListBox>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </StyledTodoListBox>
  );
};

const StyledTodoListBox = styled.div`
  flex: 1;
  padding: 15px 20px 35px;
  overflow-y: auto;
`;

export default TodoList;
