import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoWrap from "./component/TodoWrap";

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoWrap />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;
export default App;
