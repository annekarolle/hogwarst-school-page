 
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
    flex-wrap: wrap;
    gap: 2em;
    margin-top: 1em;    
    width: 80%;
    /* border-top: 2px solid var(--gold);   */
}
 
li{
  display: flex;
  flex-direction: column; 
  height: 200px;  
    
}

button:hover{
    transform: scale(1.05);   
  
}

button{
    border: none;
    background-color: var(--gold-9);
    color: var(--gold);
    cursor: pointer;   
    position: relative;
    padding-left: 5px;
    font-weight: 600;
    width: 10em;
    height: 10em;
    border: 5px solid var(--gold);
    border-radius: 50%;
    
    
}

button.selected{
    display: none;
}

h2{
    margin-top: 1em;
}
.school-year-description{    
    border: 2px solid var(--gold-9);
    background-color: var(--gold);
    width: 10em;
    height: 10em;
    font-size: 14px;
    color: var(--gold-9);
    display: flex;
    justify-content: center;
    align-items: center;  
}


p{
    padding: 10px;
}
 
`