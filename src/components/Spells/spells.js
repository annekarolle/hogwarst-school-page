import { styled } from "styled-components";
 


export const ContainerSpells = styled.div`
display: flex;
flex-direction:column; 
margin-top: 5em;
width: 100%;
height: 100%;
align-items: center;
justify-content: flex-start;

.filter-container{
  width: 60%;
  height: 50px;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: #36281e;
  border: 2px solid var(--gold-4);
  align-content: center;
  border-radius: 5px;
}

.filter-button{
  color: var(--gold); 
  font-size: 12px;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  padding-right: 2em;
  
}

input{
  background-color: #36281e;
  width: 90%;
  border: none;
  outline: none;

  padding-left: 2em;
  color: var(--gold); 
  height: 80%;
}

/* .filter-button{
  border-radius: 50%;
  background-color: var(--gold-3);
} */

.spell-tittle{
  font-size: 14px;
 
}

.container-interno{
    display: flex;
    width: 100%; 
    height: 100%;
    flex-direction: column; 
    justify-content: center;
    align-items: center;    
    margin-top: 2em;

    
}

.container-midles{
    display: flex;
    width: 100%; 
    height: 100%;  
    justify-content: center;
    align-items: center;    
}


ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;  
  justify-content: center;
  gap: 1em;
  width: 100%; 
  max-width: 1000px;


  ul::-webkit-scrollbar {
    height: 0.6em;
  }

  ul::-webkit-scrollbar-track {
    background-color: var(--gold-9);
  }

  ul::-webkit-scrollbar-thumb {
    background-color: var(--gold-5);
    border-radius: 20px;
  }
      @media (min-width: 100px) and (max-width: 600px){
        /* overflow-x: scroll; */
        margin-bottom: 2em;
      }


}

 

/* li{
    width: 250px;
    height: 150px;
    
    display: flex;
    flex-direction: column;
    align-items: center  ;
    align-content: center;
    justify-content: center;

    @media (min-width: 100px) and (max-width: 600px){
        width: 250px;
        height: 200px;
        
      }
  
} */

li:hover{
    transform: scale(1.01);
    cursor: pointer;
}


.container-buttons{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center  ;
    align-content: center;
    justify-content: center;
    gap: 5em;
}

.spell-container{
    width: 100%;
}



button{
    border: none;
    background-color: transparent;
    width: 150px;
    cursor: pointer;
    margin-top: 1em;
}

button:hover{
    filter: brightness(5);
}


`

export const ContainerImagemSpells = styled.div`
width: 30%;

display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;


img{
    object-fit: contain;
    width: 20%;
    
}


`