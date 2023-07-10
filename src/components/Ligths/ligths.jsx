import { motion } from "framer-motion";
import ligths from "../../Assests/img/hp/sub/Camada 5.png"
import ligths2 from "../../Assests/img/hp/sub/Camada 52.png"


export const Lights = (width, height, duration) =>{
    return (
        <motion.div animate={{                             
           y: [10, 0, 10]    
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",  
                 
          }}
          style={{ position: "relative", width:` ${width}`, height: `${height}` }}>
        <motion.img
          src={ligths}
          alt="ligths"
          style={{ width: "100%" }}
         
        />
            <motion.img
        src={ligths2}
        alt="ligths2"
        style={{
          position: "absolute",                 
          width: "100%",         
          opacity: 0,
          top: 0,  
          left: 0, 
          
        }}
       
        animate={{
          opacity: [0, 1, 0],                   
       
        }}
        
             
        transition={{
          duration:  1.5,
          repeat: Infinity,
          repeatType: "loop",  
                 
        }}
      />
         

      </motion.div> 
    )
}