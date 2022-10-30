import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import useQuestions from '../Utils/useQuestions';
import '../Styles/AddQuestionPage.css';

function AddQuestionPage() {
    const {addQuestion} = useQuestions();
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [question, setQuestion] = useState('');
    const [radioButtons, setRadioButtons] = useState([])
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');

    useEffect(() => {
        setRadioButtons(document.querySelectorAll('.radio-button'))
    }, []);

    radioButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            radioButtons.forEach(button => button.classList.remove('selected'))
            e.target.classList.add('selected')
            setCorrectAnswer(e.target.value-1);
        })
    })

    function handleForm() {
        if(correctAnswer && question !== '') {
            const questionInfo = {
                    question: question,
                    options: [
                        {
                            answer: option1? option1: '',
                            correctAnswer: false,
                        },{
                            answer: option2? option2: '',
                            correctAnswer: false
                        },{
                            answer: option3? option3: '',
                            correctAnswer: false
                        },{
                            answer: option4? option4: '',
                            correctAnswer: false
                        },
                    ]
                }
            questionInfo.options[correctAnswer].correctAnswer = true;
            addQuestion(questionInfo)
        }else {
            alert('Please check that the required inputs are populated.')
        }
    }


    return( 
        <section id="add-question-page">
            <h2>Add a question</h2>
            <form>
                <div className="form-item-div">
                    <label htmlFor="question">The Question: </label>
                    <input type="text" value={question} id="question" className="question-input" onInput={e => {setQuestion(e.target.value)}} />
                </div>
                <div className="form-item-div">
                    <label htmlFor="options-amount-input">Please put in the different options below, if there are less than 4 options then leave the extra inputs empty.</label>
                    <div className="options-wrapper">
                        <div className="option-div">
                            <textarea type="text" value={option1} onInput={(e) => setOption1(e.target.value)} className="option" placeholder="Option 1"></textarea>
                            <div className="radio-div">
                                <input type="radio" name="correct-answer-button" value={1} id="second-choice-radio" className='radio-button' />
                                <label htmlFor="first-choice-radio" className="radio-label">Correct Answer</label>
                            </div>
                        </div>
                        <div className="option-div">
                            <textarea type="text" value={option2} onInput={(e) => setOption2(e.target.value)} className="option" placeholder="Option 2"></textarea>
                            <div className="radio-div">
                                <input type="radio" name="correct-answer-button" value={2} id="fourth-choice-radio" className='radio-button' />
                                <label htmlFor="second-choice-radio" className="radio-label">Correct Answer</label>
                            </div>
                        </div>
                        <div className="option-div">
                            <textarea type="text" value={option3} onInput={(e) => setOption3(e.target.value)} className="option" placeholder="Option 3"></textarea>
                            <div className="radio-div">
                                <input type="radio" name="correct-answer-button" value={3} id="third-choice-radio" className='radio-button' />
                                <label htmlFor="third-choice-radio" className="radio-label">Correct Answer</label>
                            </div>
                        </div>
                        <div className="option-div">
                            <textarea type="text" value={option4} onInput={(e) => setOption4(e.target.value)} className="option" placeholder="Option 4"></textarea>
                            <div className="radio-div">
                                <input type="radio" name="correct-answer-button" value={4} id="fourth-choice-radio" className='radio-button' />
                                <label htmlFor="fourth-choice-radio" className="radio-label">Correct Answer</label>
                            </div>
                        </div>
                    </div>
                </div>
                {!correctAnswer ? <Link onClick={handleForm}>Create</Link> : null}
                {correctAnswer ? <Link to="/questions" onClick={handleForm}>Create</Link> : null}
            </form>
        </section>
    )
}

export default AddQuestionPage;