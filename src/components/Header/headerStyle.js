import { styled } from "styled-components";

export const ContainerHeader = styled.div`
  width: 100%;  
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  height: 5em;

  .navegador {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    align-content: center;
    align-items: center;
    position: relative;
    margin-top: 1em;
  }

  @media (max-width: 600px) {
    flex-direction: column;  
    
    .navegador{
      flex-direction: column;
      width: 90%;
    }
  }

  img {
    width: 10em;
  }

  .menuNav {
    display: flex;
    gap: 15px;
    align-content: center;
    align-items: center;
    margin-top: 1em;
    margin-bottom: 2em;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 15px;
    align-content: center;
    align-items: center;
  }

  li {
    display: flex;
    align-items: center;
  }

  button {
    background-color: transparent;
    border: none; 
    color: var(--gold);
    font-size: 18px;
    cursor: pointer;
    font-family: 'Times New Roman', Times, serif;
  }

  button:hover {
    transform: scale(1.03);
      filter: brightness(2);
  }

  .gitHub {
    font-size: 26px;
  }

  .menuLink{
    text-decoration: none;
    color: var(--gold);
    font-size: 18px;
  }
  .menuLink:hover {
    filter: brightness(2);
    transform: scale(1.03);
  }

  .dropdown {
  position: relative;
  
  
  
}

.dropdown button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.dropdown-options {
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  background-color: #ffff;
  border-left: 4px solid var(--gold-3);
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 250px;  
  height: 100px;
  padding: 8px 12px;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
}



.dropdown-options li { 
  cursor: pointer;
  margin: 0;
  width: 50%;
  border-left: 4px solid var(--gold-3);
  padding-left: 5px;
}


.dropdown-options-link{
  color: var(--gold); 
  font-size: 14px; 
  text-decoration: none;
}

.dropdown-options a:hover{
  transform: scale(1.03);
  color: var(--gold);  
}


.dropdown-open .dropdown-options {
  display: block;
}

.btn-logo{
  cursor: pointer;
}
`;
