import { styled } from "styled-components";

export const ContainerWelcomePage = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 700px;
align-items: center;
align-content: center;
justify-content: flex-end;
animation: backgroundAnimation 4s;
position: relative;
overflow: hidden;

@keyframes backgroundAnimation {
      0% {
        background-color: #000;
      }
      50% {
        background-color: #070707;
      }
      100% {
        background-color: var(--bg);
      }
    }

.container-imagem-castelo{
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    
}




.container-imagem-castelo .castelo {
  position: absolute;
  top: 0;
  left: 0; 
  width: 100%; 
  height: 100%;
  object-fit: cover;
 
  
}


@keyframes opacityanimation {
      0% {
       
        filter:brightness(1);
      }
      50% {
        
        filter:brightness(2);
      }
      100% {
         
        filter:brightness(3);
      }
    }

 button{
    border: 2px solid var(--gold-5);
    border-radius: 50%;
    width: 5em;
    height: 5em;
    background-color: transparent;
    color: var(--gold-5);
    cursor: pointer;
    display: flex;
    flex-direction: column;   
    align-content: center;
    align-items: center;
    margin-bottom: 2em;
    justify-content: flex-end;
    animation: opacityanimation 6s infinite;
    
 }

 button:hover{
    transform: scale(1.1);
 }

 .button-container{
    display: flex;
    flex-direction: column;
    font-size: 2em;
 }

 .button-container span{
    margin: 0;   
    animation: opacityanimation 4s infinite;
 }

`