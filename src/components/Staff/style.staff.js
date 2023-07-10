import { styled } from "styled-components";

export const StaffContainer = styled.div`
width: 100%;
display: flex;
flex-direction:column;
align-items: center;
align-content: center;

.teachers, .staff{
    width: 100%;
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    gap: 1em;
    margin-top: 1em;
   
    justify-content: center;
}

.teachers{ 
    padding: 1em;
    width: 80%;

}


.teachers::-webkit-scrollbar {
    height: 0.6em;
  }

  .teachers::-webkit-scrollbar-track {
    background-color: var(--bg);
  }

  .teachers::-webkit-scrollbar-thumb {
    background-color: var(--gold-5);
    border-radius: 20px;
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
    margin-bottom: 1em;
    background-color: var(--gold-7);
    border: 5px solid var(--gold-3);
}




 .subjects{
    background-color: #30241b80;
    padding: 1em;

}

.staff{
    background-color: var(--gold-6);
    padding: 1em;
    margin-bottom: 1em;
    color:var(--gold-1);
}
.staff li{
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;     
 
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

@media  (max-width: 200px)  {
    .teachers{
        flex-direction: column;   
        flex-wrap: wrap;
        width: 80%;    
        justify-content: flex-start;
   
        

    }

   
}

@media  (max-width: 349px)  {
    .teachers{
        flex-direction: row;
        overflow-x: scroll;     
        flex-wrap: nowrap;
        width: 100px;    
        justify-content: flex-start;
        height: 220px;  
        

    }

   
}

@media (max-width: 350px) {
    .teachers{
        flex-direction: row;
        overflow-x: scroll;     
        flex-wrap: nowrap;
        width: 200px;    
        justify-content: flex-start;
        height: 220px;        
    }
}

@media (max-width: 515px) {
    .teachers{
        flex-direction: row;
        overflow-x: scroll;     
        flex-wrap: nowrap;    
        width:  350px;
        justify-content: flex-start;
        height: 220px;
        

    }
}
`