import { StaffContainer } from "./style.staff";
import { hogwarts, staff } from "../../data/hogwarst";
import Flying from "../../Assests/img/hp/sub/jogador.png";
import Arithmancy from "../../Assests/img/hp/sub/arithmancy.png";
import Astronomy from "../../Assests/img/hp/sub/5244626.png";
import muggle from "../../Assests/img/hp/sub/duck.png";
import cat from "../../Assests/img/hp/sub/transfiguration.png";
import book from "../../Assests/img/hp/sub/history.png";
import divination from "../../Assests/img/hp/sub/divination.png";
import Charms from "../../Assests/img/hp/sub/charms.png";
import Herbology from "../../Assests/img/hp/sub/herbology.png";
import criatura from "../../Assests/img/hp/sub/criatura.png";
import potion from "../../Assests/img/hp/sub/potion.png";
import runes from "../../Assests/img/hp/sub/runes.png";
import defesa from "../../Assests/img/hp/sub/defesa.png";
import { motion } from "framer-motion";

export const Staff = () => {
  const teacher = [
    {
      id: 1,
      teacher: "Septima Vector",
      subject: "Arithmancy",
      image: Arithmancy,
    },
    {
      id: 2,
      teacher: "Firenze",
      subject: "Astronomy",
      image: Astronomy,
    },
    {
      id: 3,
      teacher: "Rubeus Hagrid",
      subject: "Care of Magical Creatures",
      image: criatura,
    },
    {
      id: 4,
      teacher: "Filius Flitwick",
      subject: "Charms",
      image: Charms,
    },
    {
      id: 5,
      teacher: "Rolanda Hooch",
      subject: "Flying",
      image: Flying,
    },
    {
      id: 6,
      teacher: "Severus Snape",
      subject: "Defence Against the Dark Arts",
      image: defesa,
    },
    {
      id: 7,
      teacher: "Aurora Sinistra",
      subject: "Divination",
      image: divination,
    },
    {
      id: 8,
      teacher: "Pomona Sprout",
      subject: "Herbology",
      image: Herbology,
    },
    {
      id: 9,
      teacher: "Cuthbert Binns",
      subject: "History of Magic",
      image: book,
    },
    {
      id: 10,
      teacher: "Charity Burbage",
      subject: "Muggle Studies",
      image: muggle,
    },
    {
      id: 11,
      teacher: "Severus Snape",
      subject: "Potions",
      image: potion,
    },
    {
      id: 12,
      teacher: "Clodagh Dromgoole",
      subject: "Study of Ancient Runes",
      image: runes,
    },
    {
      id: 13,
      teacher: "Minerva McGonagall",
      subject: "Transfiguration",
      image: cat,
    },
  ];

  return (
    <StaffContainer >       
      <h2>Teachers</h2>
      <ul className="teachers" id="teachers">
        {teacher.map((item, index) => (
          <motion.li
            key={index}
            initial={{ y: 0 }}
            animate={{ y: [-item.id + 1, 0, -item.id] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <div className="container-imagem-subjet">
              <motion.img
                src={item.image}
                alt=""
                initial={{ transform: "scale(1)" }}
                animate={{ transform: "scale(1.1)" }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
            </div>

            <h3>{item.teacher}</h3>
            <span>{item.subject}</span>
          </motion.li>
        ))}
      </ul>
      <h3 className="subject-extra">Extra Curricular Subjects</h3>        
      <ul className="subjects">
        {hogwarts.extraCurricularSubjects.map((item, index) => (
             <li key={index}>              
                {item}
                </li>
        ))}
      </ul>

      <h3 className="subject-extra">Extra Curricular Activity</h3>        
      <ul className="subjects">
        {hogwarts.extraCurricularActivity.map((item, index) => (
             <li key={index}>              
                {item}
                </li>
        ))}
      </ul>

      <h2>Staff</h2>
      <ul className="staff" id="staff">
        {staff.map((item, index) => (
          <li
            key={index}
           
          >
            <h3>{item.name}</h3>
            <span>{item.function}</span>
          </li>
        ))}
      </ul>
    </StaffContainer>
  );
};
