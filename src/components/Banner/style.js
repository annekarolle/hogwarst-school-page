import styled from "styled-components";



export const ContainerBanner = styled.div`
    position: relative;
    width: 100%;
    height: 537.41px;
    overflow: hidden;
    z-index: 0;
    margin-top: 2em;
    
    /* @media screen and (max-width: 400px) { 
      height: 625px;
    
    } */
`;

export const ContainerText = styled.div`
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
      color: var(--gold);
      z-index: 3;
    
      /* background: linear-gradient(180deg, rgba(24,24,24,1) 18%, rgba(24,24,24,0.7287289915966386) 39%, rgba(24,24,24,0.0032387955182072714) 82%);
     */
    
     /* border-top:10px solid var(--bg) ; */
    
      h1{
        font-size: 2em;
      }

      h2{
        font-size: 1em;
      } 

`;



export const CarouselContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    
  

    .carousel-image {      
      width: 100%;    
      object-fit: cover;
    }

    .active {
      z-index: 2;
    }
`

export const Containerimagem = styled.div`
    width: 100%;
    height: 450px;
    overflow: hidden;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    margin-top: 2em;

    img{
      width: 100%;
      object-fit: cover;
    }

    @media (max-width: 750px) { 
      height: 525px;

      img{
        height: 100%;
        width: 100%;
      }
    
    }
`









