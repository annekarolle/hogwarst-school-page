import { useState } from "react";
import { ContainerInfo } from "./houseStyle";
import gri from "../../Assests/img/hp/gryffindor (1).png";
import huf from "../../Assests/img/hp/hufflepuff (1).png";
import ran from "../../Assests/img/hp/ravenclaw (1).png";
import sly from "../../Assests/img/hp/slytherin (1).png";
import founder1 from "../../Assests/img/hp/grifindofounder.png";
import founder2 from "../../Assests/img/hp/huffounder.png";
import founder3 from "../../Assests/img/hp/ranfounder.png";
import founder4 from "../../Assests/img/hp/slyfounder.png";
import { DiSqllite } from "react-icons/di";

export const House = () => {
  const [flippedIndexes, setFlippedIndexes] = useState(-1);
  const [founder, setFounder] = useState({});

  const handleClick = (index, name) => {
    // console.log(name);
    // setFlippedIndexes((prevState) => {
    //   const newFlippedIndexes = [...prevState];
    //   newFlippedIndexes[index] = !newFlippedIndexes[index];
    //   return newFlippedIndexes;
    // });
    setFlippedIndexes(index);
    const selectedHouse = houses.find((item) => item.founder === name);
    setFounder(selectedHouse);
    console.log(founder);
  };

  const houses = [
    {
      house: "Gryffindor",
      imagem: gri,
      colors: "Scarlet and Gold",
      imagemFounder: founder1,
      color: "#66151e",
      color2: "rgba(255, 215, 0, 1)",
      houseHistory:
        'Gryffindor valued bravery, daring, nerve, and chivalry. Its emblematic animal was the lion, its representative gemstone was rubies, and its colours were scarlet and gold. The founder of the House was Godric Gryffindor. Gryffindor corresponded to the element of fire. Famous Gryffindors included Albus Dumbledore, Harry Potter, and Minerva McGonagall. The significant object of Gryffindor was the Sword of Gryffindor. Their motto was "Forti Animo Estote".',
      founder: "Godric Gryffindor",
      founderHistory:
        "The founder of Gryffindor house. A fair man, he believed that any child who displayed magical abilities before their 11th birthday should be able to attend Hogwarts. Godric valued courage and bravery, believing these were the two most virtuous abilities a person can possess. Gryffindor was the original owner of the Sorting Hat, which he and his fellow founders enchanted to select people to be sorted into their houses, by seeing the qualities each founder valued the most.",
      possessions: [
        "Wand: Gryffindor owned a wand made of an unknown wood, length, core, and flexibility.",
        "Sword: Gryffindor owned a goblin-made sword made from goblin-wrought silver. Gryffindor used this sword in Muggle duelling.",
        "Sorting Hat: Gryffindor was said to have owned the Sorting Hat. He, alongside the other four founders, enchanted the Sorting Hat into a sentient artefact to sort students into appropriate Hogwarts Houses after his lifetime.",
      ],
      mascot: "Lion",
    },
    {
      house: "Hufflepuff",
      imagem: huf,
      colors: "Yellow and Black",
      imagemFounder: founder2,
      color: " #d0d002",
      color2: "#000000",
      houseHistory:
        "Hufflepuff valued hard work, dedication, patience, loyalty, and fair play. Its emblematic animal was the badger, its representative gemstone was yellow diamonds, and yellow and black were its colours. The founder of the House was Helga Hufflepuff. Hufflepuff corresponded to the element of earth. Famous Hufflepuffs included Hengist of Woodcroft, Newt Scamander, and Artemisia Lufkin. The significant object of Hufflepuff was Helga Hufflepuff's Cup.",
      founder: "Helga Hufflepuff",
      possessions: [
        "Wand: Hufflepuff owned a wand made of an unknown wood, length, core and flexibility.",
        "Hufflepuff's Cup: Hufflepuff owned a cup that was reputed to have special magical powers, though these were never revealed. It was eventually passed down through the Hufflepuff family to Hepzibah Smith. The cup was stolen by Tom Riddle and made into one of his horcruxes.",
      ],
      founderHistory:
        "The founder of Hufflepuff house. A kind and warm woman, she believed that, in order to be sorted into Hufflepuff house, a person must possess the values of loyalty, patience, and be hard-working above all else. It is also known that she brought the house-elves to Hogwarts. She owned a fine golden cup which was fairly innocuous aside from being her possession.",

      mascot: "Bagder",
    },

    {
      house: "Ravenclaw",
      imagem: ran,
      mascot: "Eagle",
      colors: "Blue and Bronze",
      imagemFounder: founder3,
      color: "#0e1c59",
      color2: "#ffffff",
      possessions: [
        "Wand: Ravenclaw owned a wand made of an unknown wood, length, core and flexibility.",
        "Diadem: Rowena owned a diadem enchanted, presumably by Ravenclaw herself, to enhance the wearer's wisdom. The diadem was stolen by her daughter Helena Ravenclaw and hidden in an Albanian forest. It was later found and turned into a Horcrux by Tom Riddle.",
      ],
      houseHistory:
        "Ravenclaw valued intelligence, knowledge, curiosity, creativity, and wit. Its emblematic animal was the eagle, its representative gemstone was sapphires, and its colours were blue and bronze. The founder of the House was Rowena Ravenclaw. Ravenclaw corresponded to the element of air. Famous Ravenclaws included Luna Lovegood, Gilderoy Lockhart, Ignatia Wildsmith, and Garrick Ollivander. The significant object of Ravenclaw was Rowena Ravenclaw's diadem.",
      founder: "Rowena Ravenclaw",
      founderHistory:
        "The founder of Ravenclaw house. A sharp and intelligent woman, intellect is a highly valued asset to the students of Ravenclaw house. Due to this, it is likely that Rowena wanted to make Hogwarts the very finest Wizarding school on earth, teaching those children with the highest intelligence. Rowena also had a daughter, Helena, who later became the Grey Lady of Hogwarts as a ghost.",
    },
    {
      house: "Slytherin",
      imagem: sly,
      mascot: "Serpet",
      colors: "Green and Silver",
      imagemFounder: founder4,
      color: "#073413",
      color2: "rgba(192, 192, 192, 1)",
      possessions: [
        "Wand: Slytherin owned a wand made of Snakewood with a Basilisk horn core. It was passed down through the generations until it was stolen from Gormlaith Gaunt by her niece Isolt Sayre, and later buried on the grounds of Ilvermorny School in North America",
        "Locket: Slytherin owned a locket which he passed down to his descendants. It was later turned into a Horcrux by his descendant Tom Riddle.",
        "Basilisk: Slytherin owned a Basilisk and kept it in the Chamber of Secrets",
        "Spellbook: Slytherin wrote a book which he kept in his Scriptorium, recounting his life and knowledge of the Dark Arts.",
        "Scriptorium: a secret office in the Dungeons of Hogwarts Castle, the knowledge of which was privy only to his descendants.",
        "Slytherin Lock: Sentient locks used to guard his Scriptorium, invented by Salazar himself",
        "Chamber of Secrets: the underground chamber which Slytherin constructed at Hogwarts to house his Basilisk",
      ],
      houseHistory:
        "Slytherin valued ambition, leadership, self-preservation, cunning, and resourcefulness and was founded by Salazar Slytherin. Its emblematic animal was the serpent, its representative gemstone was emeralds, and its colours were emerald green and silver. The founder of the House was Salazar Slytherin. Slytherin corresponded roughly to the element of water. Famous Slytherins included Merlin, Tom Riddle, Draco Malfoy, and Dolores Umbridge. The significant object of Slytherin was Salazar Slytherin's locket.",
      founder: "Salazar Slytherin",
      founderHistory:
        "The founder of Slytherin house. Sly and cunning, he believed strongly that only wizards of pure blood should be allowed to attend Hogwarts. Slytherin caused great dispute over this with the other founders, and it eventually caused a permanent rift with Gryffindor, which led to Slytherin's departure from the school. Almost a thousand years later, Slytherin's descendant, Tom Riddle, would seek to fulfill his desires of banishing Muggle-borns from Hogwarts. One of his personal effects, a locket, was later claimed by Voldemort, to be used as a Horcrux.",
    },
  ];

  return (
    <ContainerInfo id="houses">
      <div className="container-text-home">
        {houses.map((house, index) => (
          <div
            className="container-news"
            key={index}
            style={{ background: `${house.color}`, borderRadius: "50%" }}
          >
            <div
              className={`container-imagem ${
                flippedIndexes === index ? "flipped" : ""
              }`}
              onClick={() => handleClick(index, house.founder)}
            >
              {flippedIndexes === index ? (
                <div className="visible">
                  <h2
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    {house.founder}
                  </h2>
                  <img
                    src={house.imagemFounder}
                    alt=""
                    className="imagemFounder"
                    style={{ width: "100%" }}
                  />
                  {/* <p>{house.houseHistory}</p> */}
                </div>
              ) : (
                <img src={house.imagem} alt="" />
              )}
            </div>
          </div>
        ))}
      </div>
      {founder && Object.keys(founder).length > 0 && (
        <div className="container-Info-Houses">
          <div className="container-infos">
            <div className="text">
              <h1
                style={{ color: `${founder.color}`, filter: "brightness(3)" }}
              >
                {founder.house}
              </h1>

              <p>
                {founder.founder} - {founder.founderHistory}
              </p>
              <p>{founder.houseHistory}</p>

              <h3 style={{ filter: "brightness(2)" }}>Possession</h3>
              <ul>
                {founder.possessions.map((item, index) => (
                  <li key={index}>
                    {" "}
                    <span
                      style={{
                        filter: "brightness(2)",
                        fontSize: "15px",
                        color: `${founder.color}`,
                      }}
                    >
                      <DiSqllite />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="infos"
              style={{
                background: `${founder.color}`,
                borderLeft: `4px solid ${founder.color2}`,
              }}
            >
              <div className="container-imagem-infos">
                <img src={founder.imagem} alt="" />{" "}
              </div>
              <h2>{founder.founder}</h2>
              <p> Mascot: {founder.mascot}</p>
              <p>Colors: {founder.colors}</p>
            </div>
          </div>
          <div className="patterns">
            <div style={{ background: `${founder.color}` }}></div>
            <div style={{ background: `${founder.color2}` }}></div>
            <div style={{ background: `${founder.color}` }}></div>
            <div style={{ background: `${founder.color2}` }}></div>
            <div style={{ background: `${founder.color}` }}></div>
            <div style={{ background: `${founder.color2}` }}></div>
            <div style={{ background: `${founder.color}` }}></div>
            <div style={{ background: `${founder.color2}` }}></div>
            <div style={{ background: `${founder.color}` }}></div>
            <div style={{ background: `${founder.color2}` }}></div>
            <div style={{ background: `${founder.color}` }}></div>
            <div style={{ background: `${founder.color2}` }}></div>
          </div>
        </div>
      )}
    </ContainerInfo>
  );
};
