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
    background-color: var(--bg);
    
    /* font-family:"Crimson Text"; */
  
  }

 /* #root{
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



  .dropdown {
  position: absolute;
  
  
  
}

body::-webkit-scrollbar {
    width: 0.6em;
  }

  body::-webkit-scrollbar-track {
    background-color: #262525;
    border-left: 1px solid  #5e5b5b;
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--gold-5);
    border-radius: 20px;
  }

.dropdown button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.dropdown-options {
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  background-color: #ffff;
  border-left: 4px solid var(--gold-3);
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 250px;  
  height: 100px;
  padding: 8px 12px;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
}
`;
