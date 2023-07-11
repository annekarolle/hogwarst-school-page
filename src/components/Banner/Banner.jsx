import { CarouselContainer, ContainerBanner, ContainerText } from "./style";
import imagem1 from "../../Assests/img/wallpaper/imagem (1).png"
import imagem2 from "../../Assests/img/wallpaper/imagem (2).png"
import imagem3 from "../../Assests/img/wallpaper/imagem (3).png"
import imagem4 from "../../Assests/img/wallpaper/imagem (4).png"
import imagem5 from "../../Assests/img/wallpaper/imagem (5).png"
import imagem6 from "../../Assests/img/wallpaper/imagem (6).png"
import imagem7 from "../../Assests/img/wallpaper/imagem (7).png"
import { motion, AnimatePresence  } from "framer-motion";
import { useEffect, useState } from "react";

export const Banner = () => {
  const imagens = [imagem1, imagem2, imagem3, imagem4, imagem5 ,imagem6, imagem6, imagem7];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagens.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ContainerBanner>
    

      <CarouselContainer>
        {/* {imagens.map((imagem, index) => (
          <motion.img
          key={index}
          src={imagem}
          alt=""
          className={`carousel-image ${
            index === currentIndex ? "active" : ""
          }`}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1, transition: { delay: (index - currentIndex) * 0.4 }}}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        ))} */}

        <img src={imagem1} alt="" class="carousel-image"/>
      </CarouselContainer>
    </ContainerBanner>
  );
};

 
