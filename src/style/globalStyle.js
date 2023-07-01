import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
  --gold-1:#30241b;
  --gold-2:#4d3a28;
  --gold-3:#6a4f36;
  --gold-4:#87744a;
  --gold-5:#a5905f;
  --gold: #bda057; 
  --gold-6: #d5b56e;
  --gold-7: #e4ca89;
  --gold-8:#f2e0a4;
  --gold-9:#fff8c0;
  --green: #073413;
  --blue:#0e1c59;
  --yellow:#e7b31f;
  --red:#66151e;
  --bg: rgb(24, 24, 24);

}

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh; 
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    scrollbar-gutter: stable;  
    font-family: 'Times New Roman', Times, serif;   
    /* font-family:"Crimson Text"; */
  
  }

 /* .root{
    width: 100%;
    height: 100%; 
    background-color: red;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  } */

  h1{
    font-size: 2em;
    color: white;
  }


`;
