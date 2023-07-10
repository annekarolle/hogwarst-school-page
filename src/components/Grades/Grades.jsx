import { hogwarts } from "../../data/hogwarst"
import { ContainerGrades } from "./grades.style"
import pergaminho  from "../../Assests/img/hp/sub/34544.png"
import pergaminho2  from "../../Assests/img/hp/sub/345442.png"
import {motion} from "framer-motion"

export const Grades = () =>{
    return (
        <ContainerGrades id="subjcts">
              <h2>Subjects</h2>
         <div className="about-subjects subjects">
          
         <div className="container-imagem">
        <img className="imagem-1" src={pergaminho} alt="" />
        <motion.img className="imagem-2" src={pergaminho2} alt="" initial={{ filter:"brightness(1)" }}
              animate={{  filter:"brightness(1.5)"}}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
              }} />
        </div>
       <div>
       {
            hogwarts.subjectsAndTeacer.map((item, index) => (
                <p>{item}</p>
            ))
        }
       </div>
    </div>

    <div className="about-subjects">       
        {
            hogwarts.evaluationSystem.map((item, index) => (
                <>
                <h3 style={{filter:"brightness(2)"}}>{item.name}</h3>
                <p>{item.description}</p>
                </>
            ))
        }
    </div>
    </ContainerGrades>
    )
}