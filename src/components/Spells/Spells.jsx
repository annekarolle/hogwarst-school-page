import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import wand from "../../Assests/img/hp/wand.png";
import wand2 from "../../Assests/img/hp/wand2.png";
import { ContainerSpells, ContainerImagemSpells } from "./spells";

export const Spells = () => {
    const { spells, setSpells, getSpells } = useContext(AuthContext);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(10);
    const [selectedSpells, setSelectedSpells] = useState([]);
  
    useEffect(() => {
      getSpells();
    }, []);
  
    const nextPage = () => {
      setStartIndex(endIndex);
      setEndIndex(endIndex + 10);
    };
  
    const previousPage = () => {
      setStartIndex(startIndex - 10);
      setEndIndex(endIndex - 10);
    };
  
    const handleSelectSpell = (spellId, selectedName) => {
      setSelectedSpells((prevSelectedSpells) => [
        ...prevSelectedSpells,
        { spellId, selectedName },
      ]);
    };
  
    const handleSubmit = () => {
      // Aqui você pode fazer algo com os feitiços selecionados, como verificar se o nome está correto
      console.log(selectedSpells);
    };
  
    return (
      <ContainerSpells>
        <h1>Book of Spell</h1>
        <div className="container-interno">
          {spells && spells.length > 0 ? (
            <>
              <ul>
                {spells.slice(startIndex, endIndex).map((item) => (
                  <li key={item.id}>
                    <h2>{item.name}</h2>
                  </li>
                ))}
              </ul>
              <ul>
                {spells.slice(startIndex, endIndex).map((item) => (
                  <li key={item.id}>
                    <h3>{item.description}</h3>                   
                    <input
                      type="radio"
                      onChange={(e) =>
                        handleSelectSpell(item.id, e.target.value)
                      }
                    />
                  </li>
                ))}
              </ul>
              <div className="pagination">
                <button onClick={previousPage} disabled={startIndex === 0}>
                  Previous
                </button>
                <button
                  onClick={nextPage}
                  disabled={endIndex >= spells.length}
                >
                  Next
                </button>
                <button onClick={handleSubmit}>Submit</button>
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