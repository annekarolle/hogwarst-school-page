import castle from "../../Assests/img/hp/hogwarts.png"
import star from "../../Assests/img/hp/hogwarts2.png"
import door from "../../Assests/img/hp/door.png"
import { motion } from "framer-motion";

export const CastleAnimation = ({castle, stars}) => {
    return (
      <div style={{ position: "relative", width: "150px", height: "150px" }}>
        <motion.img
          src={castle}
          alt="Castle"
          style={{ width: "100%", height: "100%" }}
        />
            <motion.img
        src={stars}
        alt="Star"
        style={{
          position: "absolute",                 
          width: "100%",
          height: "100%",
          opacity: 0,
          top: 0,  
          left: 0, 
          filter: "brightness(1.5)"   
        }}
        animate={{
          opacity: [0, 0.2, 0],
          scale: [1, 1.03, 1],          
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0.5,
        }}
      />
         

      </div>
    );
  };