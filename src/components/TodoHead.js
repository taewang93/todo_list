import React from "react";
import styled from "styled-components";
import { useTodoState } from "../context/TodoContext";

const TodoHead = () => {
  const todos = useTodoState();
  const undoneTask = todos.filter((todo) => !todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <StyledTodoHead>
      <StyledDate>{dateString}</StyledDate>
      <StyledDay>{dayName}</StyledDay>
      <StyledLeftTask>할 일 {undoneTask.length}개 남음</StyledLeftTask>
    </StyledTodoHead>
  );
};

const StyledTodoHead = styled.div`
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
`;
const StyledDate = styled.h2`
  font-size: 30px;
  color: #333;
  margin: 0 0 5px 0;
`;
const StyledDay = styled.p`
  font-size: 20px;
  color: #888;
  margin: 0 0 30px 0;
`;
const StyledLeftTask = styled.p`
  color: #2979ff;
  font-size: 16px;
  margin: 0;
  font-weight: 600;
`;

export default TodoHead;
