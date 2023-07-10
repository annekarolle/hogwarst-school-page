import { useState } from "react";
import { HeaderComp } from "../../components/Header/HeaderComp";
import { House } from "../../components/Houses/Houses";
import { MagicWorld } from "../../components/MagicWorld/MagicWorld";
import { Quidditch } from "../../components/Quidditch/Quidditch";
import {SchoolYear} from "../../components/SchoolYear/SchoolYear"
import { Staff } from "../../components/Staff/Staff";
import Footer from "../../components/Footer/Footer";
import { Grades } from "../../components/Grades/Grades";
 

export const Home = () => {
  const [content, setContent] = useState("home");

  const handleContentChange = (newContent) => {
    setContent(newContent);
    console.log(content)
  };

  return (
    <>
      <HeaderComp onChangeContent={handleContentChange} /> 
    
        <MagicWorld />
        <House />
          {/* <SchoolYear/>   */}
        <Grades />
        <Staff />
        <Quidditch />
      <Footer />
    </>
  );
};
