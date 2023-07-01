import ho from "../../Assests/img/hp/ho.png"
import g from "../../Assests/img/hp/g.png"
import w from "../../Assests/img/hp/w.png"
import a from "../../Assests/img/hp/a.png"
import r from "../../Assests/img/hp/r.png"
import t from "../../Assests/img/hp/t.png"
import s from "../../Assests/img/hp/s.png"

import castel from "../../Assests/img/hp/casteloo.png"
import luzes from "../../Assests/img/hp/castelo2o.png"
import { motion } from "framer-motion";


export const Hogwarst = () => {
    const images = [ho, g, w, a, r, t, s];  

     
    return (
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
    
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            style={{ position: 'absolute', top: 0}}
            alt=""
            initial={{ x: 1, y: 1}}
            animate={{x: [1,0,1], y: [-index + 1 , 0 , -index + 1]}}
            transition={{ duration: 1, repeat: Infinity, repeatType: 'loop'}}
          />
        ))}
      </div>
    );
  };