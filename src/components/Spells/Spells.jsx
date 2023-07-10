import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import wand from "../../Assests/img/hp/wand.png";
 
import { ContainerSpells  } from "./spells";
import openBook from "../../Assests/img/hp/sub/Camada 3.png";

 

import book from "../../Assests/img/hp/sub/Camada 7.png";
import Modal from "../Modal/Modal.jsx/Modal";
import { Lights } from "../Ligths/ligths";

export const Spells = () => {
  const { spells, getSpells, openModal, setOpenModal } =
    useContext(AuthContext);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);
  const [selectedSpell, setSelectedSpell] = useState("");

  useEffect(() => {
    getSpells();
  }, []);

  const nextPage = () => {
    const newStartIndex = startIndex + 10;
    const newEndIndex = endIndex + 10;

    if (newEndIndex <= spells.length) {
      setStartIndex(newStartIndex);
      setEndIndex(newEndIndex);
    }
  };

  const previousPage = () => {
    const newStartIndex = startIndex - 10;
    const newEndIndex = endIndex - 10;

    if (newStartIndex >= 0) {
      setStartIndex(newStartIndex);
      setEndIndex(newEndIndex);
    }
  };


  const handleOpenModal = (spell) => {
    setOpenModal(true)
    setSelectedSpell(spell);
  }

  const handleCloseModal = () => {
    setSelectedSpell("");
    setOpenModal(false)
  };

  return (
    <ContainerSpells>    
      <div className="container-interno">
        {spells && spells.length > 0 ? (
          <>
            <div className="container-midles">
              <ul>
              <div className="ligths-container " >
            <Lights/> 
            </div>
                {spells.slice(startIndex, endIndex).map((item, index) => (
                <>
                  <li
                    key={item.id}
                    className="spell-item"
                    style={{
                      width: "150px",
                      height: "200px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }} onClick={() => handleOpenModal(item.description)}
                  >
                    <div
                      className="spell-container"
                      style={{ width: "100%", height: "100%" }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          backgroundColor: "var(--gold-1)",
                          width: "150px",
                          height: "200px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <p style={{ color: "var(--gold-9)" }} className="spell-tittle"> {item.name}</p>
                        
                        </div>
                      </div>
                      <img
                        src={book}
                        alt=""
                        style={{
                          position: "relative",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                  </li>
                  <Modal openModal={openModal} handleCloseModal={handleCloseModal} description={selectedSpell} imagem={openBook} >
                  {selectedSpell}
                  </Modal>
                </>
                ))}
                 <div className="ligths-container " >
            <Lights/> 
            </div>
              </ul>
            </div>

            <div className="container-buttons">
              <button onClick={previousPage} disabled={startIndex === 0}>
                <img
                  src={wand}
                  alt=""
                  style={{ width: "100%", transform: "rotate(-90deg)" }}
                />
              </button>
              <button onClick={nextPage} disabled={endIndex >= spells.length}>
                <img
                  src={wand}
                  alt=""
                  style={{ width: "100%", transform: "rotate(90deg)" }}
                />
              </button>
            </div>
            
          </>
        ) : (
          <>
            <span>Carregando...</span>
          </>
        )}
      </div>
     
    </ContainerSpells>
  );
};
