import { styled } from "styled-components";

export const ContainerTeste = styled.div`
width: 1100px;
height: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
gap: 1em;
align-items: center;

.fade-in {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}




.fade-in.visible {
  opacity: 1;
}

ul{
    list-style: none;
    height: 300px;
    display: flex;
    flex-direction: column;

}

li{
    margin-top: 1em;    
}

label{
  font-size: 1em;
}

input[type='radio'] {  
  appearance: none;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
 
  /* border-radius: 50%; */
  border: 2px solid #000;
  background-color: #fff;
  outline: none;
  cursor: pointer; 
  margin-right: 1em;
  filter: brightness()
}

input[type='radio']:checked { 
  border: 2px solid pink;
  background-color: green;  
}


.btn-next-question, .btn-finish{
  border: none;
  background-color:transparent;
  cursor: pointer;
  font-size: 2em;
}


.modal-answer{
  width: 100vw;
  height: 100vh;
  padding: 4rem 1.2rem 0 1.2rem;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  background-color: #00000050;
  z-index: 1;
}
 
`