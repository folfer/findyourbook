import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Montserrat', sans-serif;
    /* font-style: italic !important; */
  }
  body {
    -webkit-font-smoothing: antialiased;
    background: #F2F5F8;

  background-color: #e6f2e3;

  }
  button, select {
    outline: none;
    border: none;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: #072e3e;
  }
`;