import QuizItem from './QuizItem';
import {useState, useEffect, useContext} from 'react';
import '../Styles/QuizPage.css';
import QuestionsContext from '../GlobalContext';

function QuizPage() {
    const {questions} = useContext(QuestionsContext)
    const [slides, setSlides] = useState([]);
    // const [correctAnswers, setCorrectAnswers] = useState(0);
    let correctAnswers = 0;
    let counter = 0;

    useEffect(() => {
        setSlides(document.querySelectorAll('.slide'))
    },[])
  
    function handleAnswer(data) {
      if(data.correctAnswer) {
          // setCorrectAnswers(prev => {
          //   console.log(prev)
          //   return prev+1
          // });
          correctAnswers++;
          counter++;
          if(counter < slides.length) {
            slides.forEach(slide => {
              slide.style.translate = `-${counter * 100}%`;
            })
          }else {
            alert(`You got ${correctAnswers} out of ${slides.length} answers correct!`);
          }
      }
    } 
    return(
        <section id="quiz-page">
            {questions.map((questionData, index) => {
               return <QuizItem questionData={questionData} handleAnswer={handleAnswer} key={index}/>
            })}
            {/* <dialog className="wrong-answer-modal">
              <img src="" alt="" />
            </dialog> */}
        </section>
    )
}

export default QuizPage