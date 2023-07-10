import React from "react";
import { StyledFooter } from "./style";

import {} from "react-icons";
const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <StyledFooter className="StyledFooter">
      <h5>Magic School</h5>
    <div className="copyrigths">
    <h6>
        ©2023 Copyright Anne karolle
       
      </h6>
      <p>This website is a non-profit study project dedicated to fans and enthusiasts of Harry Potter, providing a space for the appreciation of the magical universe. All information and content on this website have been carefully compiled from the Harry Potter book series. It is important to emphasize that all information and copyrights related to the Harry Potter series belong exclusively to J.K. Rowling.</p>
    </div>
      <div className="scrool" onClick={handleScrollToTop}>
        <p>^</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
