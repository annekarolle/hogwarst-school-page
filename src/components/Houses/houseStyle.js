import { styled } from "styled-components";

export const ContainerInfo = styled.div`
width: 100%;
 
display: flex;
flex-direction: column;
margin-bottom: 2em;
margin-top: 2em;

p{
  color: var(--gold);
}

li{
  color: var(--gold);
}
.container-home-title{
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  color: white;

}

.container-home-title h3{
  margin-top: 1em;
  color: white;
}

.container-text-home{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 12px;
  margin-top: 2em;
  gap: 2em;
  justify-content: center;  
  padding: 2em;
}


.container-text-home h2{
    color: white;
  
}
.container-text-home p{
  margin-top: 5px;
  color: white;
}



.container-imagem{
 width: 150px;
 height: 150px;
 border-radius: 50%;


 display: flex;
 align-items: center;
 align-content: center;
 justify-content: center;
}

.container-news img{
  width: 30%;
}

.container-news h2{
  text-align: left;
  color: white;
}

.container-tecnologias{
  margin-top: 1em;
  margin-bottom: 1em;
  font-size: 14px;
  color: white;
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
}

.container-tecnologias span:hover{
  transform: scale(1.1);
  color: white;
}

/* .container-news.flipped .container-imagem {
  transform: rotateY(180deg);
}

.container-news .container-imagem {
  transition: transform 0.5s ease;
} */

.container-imagem.flipped {
  transform: rotateY(180deg);
}

.visible {
  opacity: 1;
  transition: opacity 0.5s ease;  
  flex-direction: column;
  border-radius: 50%;
  width: 150px;
 height: 150px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transform: rotateY(180deg); 
  overflow: hidden;
 
}

 
p{
    font-size: 10px;
}

h2{
    margin-top: 1em;
}

.container-imagem,
h2,
p {
  transition: transform 0.5s ease;
  border-radius: 50%;

}

.container-imagem {
  cursor: pointer;
}

.container-imagem img {
  width: 50%;
  height: auto;
}



.container-imagem img:hover{
    transform: scale(1.02);
}


a{   
     color: white;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    width: 100%;  
    font-size: 20px;
    justify-content: center;
    
}

span{
    font-size: 12px;
    margin-right: 10px;
}

a:hover{
    transform: scale(1.1); 
    filter: brightness(1.1); 
}

.container-Info-Houses{
    color: white;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.container-infos{
    width: 80%;
    display: flex;
    flex-direction: row;
    gap: 1em;
    align-items: flex-start;
    justify-content: center;  

    @media (max-width: 729px) {
      flex-wrap: wrap;
}

}

h3{
    margin-top: 1em;  
}

.container-infos p{
    font-size: 1em;
    margin-top: 1em;  
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;

    
}
.container-infos ul{
    list-style: none;
    margin-top: 1em;
}

.container-infos li{
margin-top: 1em;
}


.text{
  padding: 1em;
  width: 60%; 
  @media (max-width: 729px) {
    width: 90%; 
}
 
}





.infos p{
  color: white;
}

.infos{
  @media (max-width: 729px) {
    width: 90%; 
}
}

.patterns{
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 2em;
  margin-top: 1em;
  margin-bottom: 1em;
  justify-content: space-evenly
}

.patterns div{
  width: 100%;
  height: 2em;
}

@media (max-width: 400px){
  .text{
    width: 90%;
  }
}
.infos{
  display: flex;
  flex-direction: column;  
  padding: 1em;
 
  align-items: center;
  align-content: center;   
  
}

`