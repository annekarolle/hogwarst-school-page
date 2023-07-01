import { useEffect, useState } from "react";
import { ContainerHeader } from "./headerStyle";

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

  const handleOptionClick = (option) => {
    setDropdownOpen(false);
  };

  return (
    <>
      <ContainerHeader>
        <div className="navegador">
          <div>
            <h1>Magic World</h1>
          </div>

          <div>
            <ul className="menuNav">
              <li>
                <button onClick={() => onChangeContent("home")}>Home</button>
              </li>
              <li>
                <div className="dropdown">
                  <button onClick={toggleDropdown}>Hogwarts</button>
                  {dropdownOpen && (
                    <ul className="dropdown-options">
                      <li  >
                        <a href="#magicworld" className="dropdown-options-link" onClick={() => onChangeContent("home")}>
                          About the School
                        </a>
                      </li>
                      <li >
                        <a href="#houses" className="dropdown-options-link" onClick={() => onChangeContent("home")}>
                          Houses
                        </a>
                      </li>
                      <li  >
                        <a href="#subjcts" className="dropdown-options-link" onClick={() => onChangeContent("home")}>
                          {" "}
                          Staff
                        </a>
                      </li>
                      <li  >
                        <a href="#teachers" className="dropdown-options-link" onClick={() => onChangeContent("home")}>
                          {" "}
                          Teachers / Staff
                        </a>
                      </li>
                     
                      {/* <li  >
                        <a href="#year" className="dropdown-options-link">
                          {" "}
                          School Year
                        </a>
                      </li> */}
                      <li  >
                        <a href="#Quidditch" className="dropdown-options-link" onClick={() => onChangeContent("home")}>
                          {" "}
                          Quidditch
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
              <li>
                <button onClick={() => onChangeContent("spells")}>
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
