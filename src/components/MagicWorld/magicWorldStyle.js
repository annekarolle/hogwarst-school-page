import { styled } from "styled-components";

export const ContainerMagicWorld = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
align-content: center;
margin-top: 2em;


.container-MagicWorld{
display: flex;
flex-direction: column;
margin: 0 auto;
width: 80%;
align-items: center;
align-content: center;

}

.about-school{
    display: flex;
    flex-direction: row;   
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;  
    width: 100%;
    margin-top: 2em;
}

.text-history{
    display: flex;
    flex-direction: column;
    width: 80%;   
    margin: 0 auto;
}

@media (max-width: 937px) {

    .about-school.reverse{
      flex-direction  : column-reverse;
    }
}

h2{
    margin-top: 1em;
    filter: brightness(3);
    
}

h3{
    margin-top: 1em;
    filter: brightness(2);
    
}
p{
    font-size: 1em;
    margin-top: 1em;  
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left; 
}


`