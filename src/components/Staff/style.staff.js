import { styled } from "styled-components";

export const StaffContainer = styled.div`
width: 100%;
display: flex;
flex-direction:column;
align-items: center;
align-content: center;

.teachers, .staff{
    width: 80%;
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    gap: 1em;
    margin-top: 1em;
   
    justify-content: center;
}

.teachers li{
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    width: 150px;  
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    padding:1em;
    background-color: var(--gold-7);
    border: 5px solid var(--gold-3);
}

.staff, .subjects{
    background-color: #30241b80;
    padding: 1em;
    
}
.staff li{
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;     
   
    /* background-color: var(--gold-8);
    border: 5px solid var(--gold-3); */
}
h2{
    filter: brightness(2);
    margin-top: 1em;
}
h3{
    font-size: 14px;
    font-weight: 600;
}

span{
    font-size: 12px; 
}

.container-imagem-subjet{
    width: 100px;
    height: 100px;
    overflow: hidden;
}

.container-imagem-subjet img{
    width: 100%;
    object-fit: contain;
}

.subjects{
    list-style: none;
    display: flex;
    flex-direction: row;
    width: 80%;
    margin-top: 1em;
    flex-wrap: wrap;
    gap: 1em;
    justify-content: center;
}
.subjects li{
    margin-top: 5px;
    margin: 0;
}

.subject-extra{
    margin-top: 1em;
    filter: brightness(2);
}
`