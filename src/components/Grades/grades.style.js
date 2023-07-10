import { styled } from "styled-components";

export const ContainerGrades = styled.div`

width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

h2{
    margin: 0 auto;
    filter: brightness(2);
    text-align: center;
}

.about-subjects{
    width: 80%;
    margin-top: 1em;
}

.about-subjects.subjects{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2em;

    @media (max-width: 600px) {       
        flex-direction: column;
        gap: 0;
    }
}


.about-subjects h3{
    margin-bottom: 0.5em;
}
.about-subjects p {
    margin-bottom: 1em;
    text-align: left;
}

.container-imagem{
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    position: relative;
    overflow: hidden;

    @media (max-width: 600px) {       
        width: 100%;
    }
}

.container-imagem img{
    width: 80%;
    object-fit: contain;
    position: absolute;
    top: 0;
    left: 0;

    @media (max-width: 600px) {       
        width: 60%;
        left: 20%; 
    }
}
 
 


`