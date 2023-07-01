import { DiVim } from "react-icons/di";
import { styled } from "styled-components";

export const SchoolYearContainer = styled.div`

    margin-top: 2em;
    margin-bottom: 2em;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
   

h1{
    text-align: center;
}

ul{
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;   
    gap: 2em;
    margin-top: 1em;    
    width: 80%;
    border-top: 2px solid var(--gold);  
}
 
li{
  display: flex;
  flex-direction: column; 
  height: 200px;
  
  
  
    /* border: 6px solid var(--gold-2);
    background-color: var(--gold-9); */
    
}

button:hover{
    transform: scale(1.05);
    filter: brightness(2);
  
}

button{
    border: none;
    background-color: transparent;
    color: var(--gold);
    cursor: pointer;   
    position: relative;
    padding-left: 5px;
    font-weight: 600;
    
    
}

button.selected{
    border-left: 2px solid var(--gold);
}

h2{
    margin-top: 1em;
}
.school-year-description{
    
    display: flex;
    flex-direction: column;
     width: 200px;  
     height: 150px;
     position: absolute;
     margin-top: 1em;
     border: 2px solid var(--gold);
     background-color: var(--gold-9);
    justify-content: center;
    align-items: center;    
    border-bottom-right-radius: 4%;
    border-top-right-radius: 4%;
}
p{
    padding: 10px;
}
 
`