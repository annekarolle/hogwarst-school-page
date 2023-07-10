import { useEffect, useState } from "react";
import { ContainerHeader } from "./headerStyle";
import { useNavigate } from "react-router-dom";

export const HeaderComp = ({ onChangeContent }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);   
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest(".dropdown")) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const navigate = useNavigate();

  // const handleOptionClick = (option) => {
  //   setDropdownOpen(false);
  // };

  return (
    <>
      <ContainerHeader>
        <div className="navegador">
          <div>
            <h1 onClick={() => navigate("/home")} className="btn-logo">Magic School</h1>
          </div>

          <div>
            <ul className="menuNav">
              <li>
                <button onClick={() => navigate("/home")}>Home</button>
              </li>
              <li>
                <div className="dropdown">
                  <button onClick={toggleDropdown}>Hogwarts</button>
                  {dropdownOpen && (
                    <ul className="dropdown-options">
                      <li  >
                        <a href="#magicworld" className="dropdown-options-link"  onClick={() => navigate("/home/#magicworld")}>
                          About the School
                        </a>
                      </li>
                      <li >
                        <a href="#houses" className="dropdown-options-link"  onClick={() => navigate("/home/#houses")}>
                          Houses
                        </a>
                      </li>
                      <li  >
                        <a href="#subjcts" className="dropdown-options-link"  onClick={() => navigate("/home/#subjcts")}>
                          {" "}
                          Subjects
                        </a>
                      </li>
                      <li  >
                        <a href="#teachers" className="dropdown-options-link"  onClick={() => navigate("/home/#teachers")}>
                          {" "}
                          Teachers / Staff
                        </a>
                      </li>               
                      <li  >
                        <a href="#Quidditch" className="dropdown-options-link" onClick={() => navigate("/home/#Quidditch")}>
                          {" "}
                          Quidditch
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
              <li>
                <button onClick={() => navigate("/BookOfSpells")}>
                  Book of Spells
                </button>
              </li>
      
      
            </ul>
          </div>
        </div>
      </ContainerHeader>
    </>
  );
};
