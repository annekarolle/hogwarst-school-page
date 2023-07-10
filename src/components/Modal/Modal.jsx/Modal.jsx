import "./style.css";
import { motion } from "framer-motion";

const Modal = ({ openModal, handleCloseModal, description, imagem }) => {
  const letterVariants = {
    hidden: { opacity: 0, y: 20, filter: "brightness(1)" },
    visible: { opacity: 1, y: 0, filter: "brightness(2)" },
  };

  const handleModalClick = (event) => {
    if (event.target.classList.contains('modal')) {
      handleCloseModal();
    }
  };

  return (
    <>
      {openModal && (
        <div className="modal active" onClick={handleModalClick}>
          <div className="modal-content">
            <motion.p
              initial="hidden"
              animate="visible"
              variants={letterVariants}
              transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
            >
             <p className="spell-description"> {description}</p>
            </motion.p>
            <div className="container-imagem-modal">
              <motion.img
                src={imagem}
                alt=""
                initial={{ filter: "brightness(1)" }}
                animate={{ filter: "brightness(5)" }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
            </div>
          </div>
          <span className="modal-close" onClick={handleCloseModal}>
            Close
          </span>
        </div>
      )}
    </>
  );
};

export default Modal;
