import React from "react";
import { StyledFooter } from "./style";

import {} from "react-icons";
const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <StyledFooter className="StyledFooter">
      <h5>Magic World</h5>
      <p>
        ©2023 Copyright Anne karolle
       
      </p>
      <div className="scrool" onClick={handleScrollToTop}>
        <p>^</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
