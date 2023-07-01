import { useState } from "react";
import { hogwarts } from "../../data/hogwarst";
import { SchoolYearContainer } from "./schoolYearStyle";
import { motion } from "framer-motion";

export const SchoolYear = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDescription = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <SchoolYearContainer id="year">
      <h1>School Year</h1>
      <ul>
        {hogwarts.schoolYear.map((item, index) => (
          <li
            key={index}           
          >
            <button onClick={() => toggleDescription(index)} className={activeIndex === index ? "selected" : ""}>
              {item.month.slice(0, 3).toUpperCase()}
            </button>
            {activeIndex === index && (
              <div className="school-year-description">                
                <p>{item.description}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </SchoolYearContainer>
  );
};


