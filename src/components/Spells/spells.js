import { styled } from "styled-components";

export const ContainerSpells = styled.div`
width: 100%;
height: 100%;
display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: flex-start;

ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start  ;
    flex-wrap: wrap;
    width: 90%;  
    height : 700px ;
    justify-content: flex-start;

}

li{
  
}

.container-interno{
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center; 
    justify-content: center;
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
    width: 70%;
    
}
`