import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import useQuestions from '../Utils/useQuestions';
import {Link} from 'react-router-dom';
import '../Styles/EditQuestionPage.css'

function EditQuestionPage() {
    const {id} = useParams();
    // const [questionData, setQuestionData] = useState([]);
    const {editQuestion} = useQuestions();

    const [newQuestion, setNewQuestion] = useState('');
    const [newOption1, setNewOption1] = useState('');
    const [newOption2, setNewOption2] = useState('');
    const [newOption3, setNewOption3] = useState('');
    const [newOption4, setNewOption4] = useState('');
    const [radioButtons, setRadioButtons] = useState([]);
    const [newCorrectAnswer, setNewCorrectAnswer] = useState('');


    useEffect(() => {
        setRadioButtons(document.querySelectorAll('.radio-button'))
    }, []);

    radioButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            radioButtons.forEach(button => button.classList.remove('selected'))
            e.target.classList.add('selected')
            setNewCorrectAnswer(e.target.value-1);
        })
    })

    useEffect(() => {
        fetch(`http://localhost:8000/questions/${id}`)
        .then(res => res.json())
        .then(data => {
            setNewQuestion(data.question);
            data.options[0] ? setNewOption1(data.options[0].answer): setNewOption1('');
            data.options[1] ? setNewOption2(data.options[1].answer): setNewOption2('');
            data.options[2] ? setNewOption3(data.options[2].answer): setNewOption3('');
            data.options[3] ? setNewOption4(data.options[3].answer): setNewOption4('');
        })
    }, [id])

    function handleForm() {
        console.log(newCorrectAnswer)
        if(newCorrectAnswer !== '' && newQuestion !== '') {
            const questionInfo = {
                    question: newQuestion,
                    options: [
                        {
                            answer: newOption1 ? newOption1: '',
                            correctAnswer: false,
                        },{
                            answer: newOption2 ? newOption2: '',
                            correctAnswer: false
                        },{
                            answer: newOption3 ? newOption3: '',
                            correctAnswer: false
                        },{
                            answer: newOption4 ? newOption4: '',
                            correctAnswer: false
                        },
                    ]
                }
            questionInfo.options[newCorrectAnswer].correctAnswer = true;
            editQuestion(id, questionInfo);
        }else {
            alert('Please check that the required inputs are populated.')
        }
    }

    return (
        <section id="edit-question-page">
            <h2>Edit the Question below</h2>
            <form>
                <div className="form-item-div">
                    <label htmlFor="#question">Question</label>
                    <input value={newQuestion} type="text" id="question" className="question-input" onChange={e => {setNewQuestion(e.target.value)}}/>
                </div>
                <div className="options-wrapper">
                        <div className="option-div">
                            <textarea type="text" value={newOption1} onInput={(e) => setNewOption1(e.target.value)} className="option" placeholder="Option 1"></textarea>
                            <div className="radio-div">
                                <input type="radio" name="correct-answer-button" value={1} id="second-choice-radio" className='radio-button' />
                                <label htmlFor="first-choice-radio" className="radio-label">Correct Answer</label>
                            </div>
                        </div>
                        <div className="option-div">
                            <textarea type="text" value={newOption2} onInput={(e) => setNewOption2(e.target.value)} className="option" placeholder="Option 2"></textarea>
                            <div className="radio-div">
                                <input type="radio" name="correct-answer-button" value={2} id="fourth-choice-radio" className='radio-button' />
                                <label htmlFor="second-choice-radio" className="radio-label">Correct Answer</label>
                            </div>
                        </div>
                        <div className="option-div">
                            <textarea type="text" value={newOption3} onInput={(e) => setNewOption3(e.target.value)} className="option" placeholder="Option 3"></textarea>
                            <div className="radio-div">
                                <input type="radio" name="correct-answer-button" value={3} id="third-choice-radio" className='radio-button' />
                                <label htmlFor="third-choice-radio" className="radio-label">Correct Answer</label>
                            </div>
                        </div>
                        <div className="option-div">
                            <textarea type="text" value={newOption4} onInput={(e) => setNewOption4(e.target.value)} className="option" placeholder="Option 4"></textarea>
                            <div className="radio-div">
                                <input type="radio" name="correct-answer-button" value={4} id="fourth-choice-radio" className='radio-button' />
                                <label htmlFor="fourth-choice-radio" className="radio-label">Correct Answer</label>
                            </div>
                        </div>
                    </div>
                    {newCorrectAnswer === ''? <Link onClick={handleForm}>Submit</Link>: null}
                    {newCorrectAnswer !== '' ? <Link to="/questions" onClick={handleForm}>Submit</Link> : null}
            </form> 
        </section>
    )
}

export default EditQuestionPage;