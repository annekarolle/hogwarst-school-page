import { styled } from "styled-components";

export const ContainerQuidditch = styled.div`

width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;

h1{
    color: var(--gold);
    filter: brightness(3);
    text-align: center;
}
.container-interno{
    width: 70%;
    position: relative;
  z-index: 1;
  margin-bottom: 2em;
}

.container-interno p {
    margin-top: 1em;
}

ul{
    list-style: none;
    margin-top: 1em;
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 1em;
    align-items: flex-start;
    background-color: #30241b80;
    padding: 1em;
    flex-wrap: wrap;
}

li{
    margin-top: 1em;
    display: flex;
    width: 150px;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center;
    justify-content: center;
    margin-bottom: 1em;
}



li p{
color: var(--gold-8);
font-size: 12px;
font-weight: 100;
}



.container-imagem-field {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;  
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: flex-end;
  height: 100%;
  padding-top: 1em;
 
}


.container-imagem-field img {
width: 100%;
height: 100%;
object-fit: cover;
}


.container-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  text-align: center; 
  z-index: 3; 

  background: rgb(24,24,24);
background: linear-gradient(180deg, rgba(24,24,24,1) 35%, rgba(24,24,24,0.700717787114846) 61%, rgba(24,24,24,0) 100%);
}




.container-imagem-game-position{
    width:100%;   
    display: flex;
    justify-content: center;
    align-items: center;
  
}

.container-imagem-game-position img{
    width: 60%;
    align-items :center ;
}

.container-imagem-quidditch{
    overflow: hidden;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: var(--gold-6);
    border: 5px solid var(--gold-3);
}

.container-imagem-quidditch img{
    width: 100%;
    object-fit: contain;
    filter: brightness(4);
}

@media (max-width:500px) {

    .container-interno{
        width: 90%;
    }
    .game-position ul{
        width: 100%;
    }
    li{
        width: 100%;
        flex-direction: row;}

        .container-imagem-quidditch{
            width: 100px;
            height: 100px;
        }

        .container-text-quidditch{
            width: 60%;
        }
}


`