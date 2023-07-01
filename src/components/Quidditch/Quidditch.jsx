import { hogwarts } from "../../data/hogwarst";
import { ContainerQuidditch } from "./QuidditchStyle";
import field from "../../Assests/img/hp/the-hogwarts-quidditch-pitch-2560-x-1440-wallpaper-cu4o2lm454jgykp2.jpg";
import vassoura from "../../Assests/img/hp/vassoura.png";
import { motion } from "framer-motion";
import pomo from "../../Assests/img/hp/pomo.png";
import pomo2 from "../../Assests/img/hp/pomo - Copia.png";
import seeker from "../../Assests/img/hp/sub/seeker.png"
import chaser from "../../Assests/img/hp/sub/chaser.png"
import keeper from "../../Assests/img/hp/sub/keeper.png"
import beater from "../../Assests/img/hp/sub/beater.png"


export const Quidditch = () => {

  const quidditchPosition  = [
    {   id: 1,
        name:  "Seeker", 
        image: seeker ,     
        description: "The Seeker's role is to locate and catch the Golden Snitch, which is a small, fast, and winged ball. Capturing the Snitch awards a large number of points and usually ends the game."
    },
    {
        id:2,
        name:"Chaser",
        image: chaser ,   
        description:"There are three Chasers on each team. Their main objective is to score goals by throwing the Quaffle, a large red ball, through one of the opposing team's three goalposts. Chasers need to be skilled at passing, dodging opponents, and scoring accurately."
    }
    ,
    {
        id:3,
        name:"Keeper",
        image: keeper ,   
        description:"The Keeper's responsibility is to guard the team's goalposts and prevent the opposing team from scoring. They must be agile and have excellent reflexes to block incoming shots from the opposing Chasers."
    }
    ,
    {
        id:4,
        name:"Beaters",
        image: beater ,   
        description:"Each team has two Beaters. Their role is to hit Bludgers, which are heavy iron balls, towards the opposing team's players in order to disrupt their movements and strategies. Beaters need to have good aim, strength, and strategic thinking."
    }
  ]
  return (
    <ContainerQuidditch id="Quidditch">
      <div className="container-interno">
        <h1>Quidditch</h1>
        {hogwarts.quidditch.map((item) => (
          <p>{item}</p>
        ))}

        <div className="game-position">
          <ul>
            {quidditchPosition.map((item, index) => (
              <li key={index}>
                <div className="container-imagem-quidditch">
                  <motion.img src={item.image} alt="" initial={{ filter:"brightness(1)" }}
              animate={{  filter:"brightness(5)"}}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
              }}/>
                </div>               
               <div className="container-text-quidditch">
               <p>{item.description}</p>
               </div>
              </li>
            ))}
          </ul>
          <div className="container-imagem-game-position">
            <motion.img
              src={vassoura}
              alt=""
              initial={{ y: 0 }}
              animate={{ y: [-10, 0, -10] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
        </div>
      </div>

      <div className="container-imagem-field">
        <div className="container-overlay"></div>
        <img src={field} alt="" />
      </div>

      {/* <motion.img
        src={pomo}
        alt=""
        initial={{ y: -100, x: 0, opacity: 1 }}
        animate={{ y: [-100, 0, 100], x: [-150, 150, -100], opacity: [0, 1, 0] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
          delay: 4,  
        }}
        style={{ width: "3%", position: "absolute", top: "0", right: "0" }}
      />
      <motion.img
        src={pomo2}
        alt=""
        initial={{ y: -100, x: 0, opacity: 1 }}
        animate={{ y: [100, 0, -100], x: [-150, 150, -100], opacity: [1, 1, 0] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
          delay: 2,  
        }}
        style={{ width: "2%", position: "absolute", bottom: "0", left: "0" }}
      /> */}
    </ContainerQuidditch>
  );
};
