import React from "react";
import styled from "styled-components";

const TodoHead = () => {
  return (
    <StyledTodoHead>
      <StyledDate>2022년 12월 30일</StyledDate>
      <StyledDay>금요일</StyledDay>
      <StyledLeftTask>할 일 2개 남음</StyledLeftTask>
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
