import {useContext} from 'react';
import QuestionsContext from './GlobalContext';
import QuestionItem from './QuestionItem';
import './QuestionListPage.css'

function QuestionListPage() {
    const {questions} = useContext(QuestionsContext);
    return(
        <section id="edit-questions-page">
            <h2>Questions:</h2>
            <div className="question-items-grid">
                {questions.map((questionData, index) => {
                    return <QuestionItem key={index} questionData={questionData} number={index+1}/>
                })}
                <div className="question-item add-question-button">
                    <img src={`${process.env.PUBLIC_URL}/logo-add-item-section.svg`} alt="" />
                </div>
            </div>
        </section>
    )
}

export default QuestionListPage;