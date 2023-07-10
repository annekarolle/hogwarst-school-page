import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  width: 100%;
  height: 10em;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  box-sizing: border-box; 
  padding-left: 5em;
  padding-right: 5em;


  img {
    height: 2em;
  }

  p {
    a {
      color: var(--gold);
    }
  }

  .scrool {
    align-items: center;
    justify-content: center;
    display: flex;
    width: 53px;
    height: 53px;   
    border-radius: 4px;
    cursor: pointer;
    :hover {
      transform: scale(1.03);
    }

    p {
      font-size: 16px;
      font-weight: 600;
      line-height: 18.4px;
    
    }
  }

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 310.34px;
    gap: 60px;
    padding: 45px 59px;
    img {
      height: 20px;
    }
  }

  .copyrigths{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin-bottom: 1em;

    p{
      margin-top: 1em;
      font-size: 10px;
      text-align: center;
    }
  }
`;
