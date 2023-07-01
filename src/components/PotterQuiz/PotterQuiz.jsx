import { useEffect, useState } from "react";
import { questionComplete, questionsCompare } from "../../data/quiz";
import { ContainerTeste } from "./PotterQuizStyle";
import {BsFillArrowRightCircleFill} from "react-icons/bs"

import gryffindorIMG from "../../Assests/img/hp/gryfindor.png"
import hufflepuffIMG from "../../Assests/img/hp/huffypuffy.png"
import ravenclawIMG from  "../../Assests/img/hp/ravenclaw.png"
import slytherinIMG from  "../../Assests/img/hp/slytherin.png"
import { colors } from "../../data/colors";


export const PotterQuiz = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [respostas, setRespostas] = useState([]);
  const [perguntaSelecionada, setPerguntaSelecionada] = useState("");
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [imagem, setImagem] = useState("");

  const handleAnswerSelect = (alternative) => {
    const resposta = {
      question: questionComplete[questionIndex].question,
      answer: alternative,
    };
    setRespostas([...respostas, resposta]);
  };

  const handleNextQuestion = () => {
    if (questionIndex === questionComplete.length - 1) {
      setMostrarResultado(true);
    } else {
      const nextQuestionIndex = questionIndex + 1;
      setQuestionIndex(nextQuestionIndex);
      setPerguntaSelecionada(questionComplete[nextQuestionIndex].question);
      setCurrentColorIndex(currentColorIndex + 1);
    }
  };

  useEffect(() => {
    setPerguntaSelecionada(questionComplete[0].question);
  }, []);

  useEffect(() => {
    if (mostrarResultado) {
      const resultado = handleSortingHat();
      let img;

      if (resultado === "Gryffindor") {
        img = gryffindorIMG;
      } else if (resultado === "Hufflepuff") {
        img = hufflepuffIMG;
      } else if (resultado === "Ravenclaw") {
        img = ravenclawIMG;
      } else if (resultado === "Slytherin") {
        img = slytherinIMG;
      }

      setImagem(img);
    }
  }, [mostrarResultado]);

  const handleSortingHat = () => {
    let gryffindor = 0;
    let hufflepuff = 0;
    let ravenclaw = 0;
    let slytherin = 0;

    for (let i = 0; i < questionsCompare.length; i++) {
      for (let j = 0; j < respostas.length; j++) {
        if (questionsCompare[i].question === respostas[j].question) {
          if (questionsCompare[i].Gryffindor === respostas[j].answer) {
            gryffindor += 1;
          }
          if (questionsCompare[i].Hufflepuff === respostas[j].answer) {
            hufflepuff += 1;
          }
          if (questionsCompare[i].Ravenclaw === respostas[j].answer) {
            ravenclaw += 1;
          }
          if (questionsCompare[i].Slytherin === respostas[j].answer) {
            slytherin += 1;
          }
        }
      }
    }

    const lista = [
      { valor: gryffindor, casa: "Gryffindor" },
      { valor: hufflepuff, casa: "Hufflepuff" },
      { valor: ravenclaw, casa: "Ravenclaw" },
      { valor: slytherin, casa: "Slytherin" },
    ];

    lista.sort((a, b) => b.valor - a.valor);
    const resultado = lista[0].casa;
    console.log(resultado, lista);
    return resultado;
  };



  return mostrarResultado ? (
    <div className="modal-answer">
      <div>
        <img src={imagem} alt="" />
      </div>
      <h2>Resultado: {handleSortingHat()}</h2>
    </div>
  ) : (
    // <div
    //   style={{
    //     backgroundColor: colors[currentColorIndex],
    //     width: "100%",
    //     height: "100%",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //   }}
    // >
    <div>
      <ContainerTeste>
        <ul>
          <h2 style={{ color: colors[currentColorIndex], filter: "brightness(5)" }}>{perguntaSelecionada}</h2>
          {questionComplete[questionIndex].alternatives.map((alternative, alternativeIndex) => (
            <li key={alternativeIndex}>
              <label style={{ color: colors[currentColorIndex], filter: "brightness(3)" }}>
                <input
                  type="radio"
                  name={`question_${questionIndex}`}
                  value={alternative}
                  onChange={() => handleAnswerSelect(alternative)}
                  checked={respostas.some(
                    (resposta) =>
                      resposta.question === questionComplete[questionIndex].question &&
                      resposta.answer === alternative
                  )}
                />
                {alternative}
              </label>
            </li>
          ))}
        </ul>
        {questionIndex < questionComplete.length - 1 ? (
          <button
            onClick={handleNextQuestion}
            className="btn-next-question"
            style={{ color: colors[currentColorIndex], filter: "brightness(5)" }}
          >
            <BsFillArrowRightCircleFill />
          </button>
        ) : (
          <button
            onClick={() => handleNextQuestion()}
            className="btn-finish"
            style={{ color: colors[currentColorIndex], filter: "brightness(5)" }}
          >
            Finish test
          </button>
        )}
      </ContainerTeste>
    </div>
  );
};