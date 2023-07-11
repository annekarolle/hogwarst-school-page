import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import wand from "../../Assests/img/hp/wand.png";
import {motion} from "framer-motion"
import { ContainerSpells } from "./spells";
import openBook from "../../Assests/img/hp/sub/Camada 3.png";

import book from "../../Assests/img/hp/sub/Camada 7.png";
import Modal from "../Modal/Modal.jsx/Modal";
import { Lights } from "../Ligths/ligths";

export const Spells = () => {
  const { spells, getSpells, openModal, setOpenModal, setSpells } =
    useContext(AuthContext);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);
  const [selectedSpell, setSelectedSpell] = useState("");
  const [filter, setFilter] = useState("");

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
    setOpenModal(true);
    setSelectedSpell(spell);
  };

  const handleCloseModal = () => {
    setSelectedSpell("");
    setOpenModal(false);
  };

  const filteredSpells = (filter, clearFilter) => {
    if (clearFilter) {
      setFilter('');  
      getSpells();  
    } else if (filter === '') {
      getSpells();  
    } else {
      const filtrado = spells.filter((spell) =>
        spell.name.toLowerCase().includes(filter.toLowerCase())
      );
      setSpells(filtrado);
    }
  };

 

  return (
    <ContainerSpells>
      <div className="filter-container">        
        <input
          type="text"
          name="filter"
          id="filter"        
          value={filter}
          placeholder="Summons a spell..."
          onChange={(e) => setFilter(e.target.value)}
          onKeyUp={() => filteredSpells(filter)}
        />  
        <button className="filter-button" onClick={() => filteredSpells(filter, true)}>x</button>  
  
      </div>
      <div className="container-interno">
        {spells && spells.length > 0 ? (
          <>
            <div className="container-midles">
              <ul>
                <div className="ligths-container ">
                  <Lights />
                </div>
                {spells.slice(startIndex, endIndex).map((item, index) => (
                  <>
                    <motion.li
                      key={item.id}
                      className="spell-item"
                      style={{
                        width: "150px",
                        height: "200px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      initial={{ scale: 1, rotate: -1}}  
                      animate={{
                        scale: [1, 1.05, 1],  rotate: [1, -1.05, 1] ,
                        transition: { duration: 0.5, yoyo: Infinity, ease: "easeInOut" },
                      }}      
                      onClick={() => handleOpenModal(item.description)}
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
                            <p
                              style={{ color: "var(--gold-9)" }}
                              className="spell-tittle"
                            >
                              {" "}
                              {item.name}
                            </p>
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
                    </motion.li>
                    <Modal
                      openModal={openModal}
                      handleCloseModal={handleCloseModal}
                      description={selectedSpell}
                      imagem={openBook}
                    >
                      {selectedSpell}
                    </Modal>
                  </>
                ))}
                <div className="ligths-container ">
                  <Lights />
                </div>
              </ul>
            </div>

            <div className="container-buttons">
              <button onClick={previousPage} disabled={startIndex === 0}>
                <img
                  src={wand}
                  alt=""
                  style={{ width: "30%", transform: "rotate(-90deg)" }}
                />
              </button>
              <button onClick={nextPage} disabled={endIndex >= spells.length}>
                <img
                  src={wand}
                  alt=""
                  style={{ width: "30%", transform: "rotate(90deg)" }}
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
