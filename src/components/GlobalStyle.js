import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {

  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap');
  font-family: 'Raleway', sans-serif;

  font-style: normal;
  font-weight: 400;
}

body {
  
  
  
  margin-top: 32px;
}

`