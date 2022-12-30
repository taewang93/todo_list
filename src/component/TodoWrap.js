import React from "react";
import styled from "styled-components";

const TodoWrap = () => {
  return <StyledTodoWrap>aa</StyledTodoWrap>;
};

const StyledTodoWrap = styled.div`
  width: 500px;
  height: 700px;
  position: relative;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin: 60px auto 0;
  display: flex;
  flex-direction: column;
`;

export default TodoWrap;
