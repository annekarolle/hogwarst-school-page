import { createContext, useEffect, useState } from "react";
import harryPotterAPI from "../services/harryPotterAPI";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [house, setHouse] = useState([]);
  const [spells, setSpells] = useState({});
  const [enter, setEnter] = useState(false)

  useEffect(() => {
    const desiredHouse = 'gryffindor';

    getHouses(desiredHouse);
  
  }, []);

  const getHouses = async (house) => {
    await harryPotterAPI
      .get(`/characters`)
      .then((response) => {
        console.log(response.data);
        setHouse(response.data);
      })
      .catch((error) => {
        console.error(error);
      });


  };

  const getSpells = async () =>{
    await harryPotterAPI
    .get(`/Spells`)
    .then((response) => {
      console.log(response.data);
      setSpells(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  return (
    <AuthContext.Provider value={{ harryPotterAPI, enter, setEnter, house, setHouse, spells, setSpells, getSpells }}>
      {children}
    </AuthContext.Provider>
  );
};
