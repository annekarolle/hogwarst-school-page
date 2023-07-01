import { hogwarts } from "../../data/hogwarst"
import { ContainerGrades } from "./grades.style"

export const Grades = () =>{
    return (
        <ContainerGrades id="subjcts">
         <div className="about-subjects">
            <h2>Subjects</h2>
        {
            hogwarts.subjectsAndTeacer.map((item, index) => (
                <p>{item}</p>
            ))
        }
    </div>

    <div className="about-subjects">
        <h2>Evaluantion System</h2>
        {
            hogwarts.evaluantionSystem.map((item, index) => (
                <p>{item}</p>
            ))
        }
    </div>
    </ContainerGrades>
    )
}