import QuizItem from './QuizItem';
import {useState, useEffect, useRef} from 'react';
import '../Styles/QuizPage.css';
import useQuestions from '../Utils/useQuestions';

function QuizPage() {
    const [slides, setSlides] = useState([]);
    const {randomQuestions} = useQuestions();
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const scoreModal = useRef();
    const quizPage = useRef();
    let correctAnswersSoFar = 0;
    let counter = 0;


    useEffect(() => {
        setSlides([...document.getElementsByClassName('slide')]);
    },[randomQuestions])
      

    function handleAnswer(data) {
      if(data.correctAnswer) {
          correctAnswersSoFar++;
          counter++
          if(counter < slides.length) {
            slides.forEach(slide => {
              slide.style.translate = `-${counter * 100}%`;
            })
          }else {
            setCorrectAnswers(correctAnswersSoFar);
            scoreModal.current.classList.add('visible');
            quizPage.current.style.pointerEvents = 'none';
          }
      }
    }

    return(
        <section id="quiz-page" ref={quizPage}>
            {/* {questions.map((questionData, index) => {
               return <QuizItem questionData={questionData} handleAnswer={handleAnswer} key={index}/>
            })} */}
            {/* {randomizeArr(questions).map((questionData, index) => {
               return <QuizItem questionData={questionData} handleAnswer={handleAnswer} key={index}/>
            })} */}
            {randomQuestions.length > 1 ? randomQuestions.map((questionData, index) => {
               return <QuizItem questionData={questionData} handleAnswer={handleAnswer} key={index}/>
            }): null}

            {/* <dialog className="wrong-answer-modal">
              <img src="" alt="" />
            </dialog> */}
            <dialog ref={scoreModal} className="score-modal" open>
              You got {correctAnswers} out of {randomQuestions.length} correct, that's <span>{(correctAnswers/randomQuestions.length)*100}%</span>!
            </dialog>
        </section>
    )
}

export default QuizPage