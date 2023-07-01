import { ContainerWelcomePage } from "./style";
import castelo from "../../Assests/img/hp/casteloo.png";
import { motion } from "framer-motion";
import luzes from "../../Assests/img/hp/castelo2o.png";
import hogwarst from "../../Assests/img/hp/2.png";
import { SlArrowDown } from "react-icons/sl"; 
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
 

export const WelcomePage = () => {
  const { enter, setEnter } = useContext(AuthContext);
  const [open, setOpen] = useState(false);


  const handleClick = () => {
    setEnter(true);    
    console.log(enter)
  };

  return (
    <ContainerWelcomePage >
     <div className={`container-imagem-castelo`}>
        <img src={castelo} alt="" className="castelo" />

        <motion.img
          src={luzes}
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1] }}
          transition={{ duration: 4, delay: 3 }}
          className="castelo"
        />

        <motion.img
          src={hogwarst}
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1] }}
          transition={{ duration: 4, delay: 4 }}
          style={{ position: "absolute", top: 0, left: 0, width: "100%" }}
        />

        <button style={{ position: "absolute" }} onClick={handleClick}>
          <span>Enter</span>
          <div className="button-container">
            <motion.span
              initial={{ y: 0 }}
              animate={{ y: [4, 0, 4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <SlArrowDown />
            </motion.span>
          </div>
        </button>
      </div>
    </ContainerWelcomePage>
  );
};
