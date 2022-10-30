import QuestionItem from './QuestionItem';
import {Link} from 'react-router-dom';
import useQuestions from '../Utils/useQuestions';
import Loader from './Loader';
import '../Styles/QuestionListPage.css';

function QuestionListPage() {
    const {questions} = useQuestions();

    return(
        <section id="question-list-page">
            <h2>Questions:</h2>
            {!questions ? <Loader/> : null}
            <div className="question-items-grid">
                {questions ? questions.map((questionData, index) => {
                    return(
                        <QuestionItem key={index} questionData={questionData} index={index}/>
                    )
                }): null}
                <Link to="/add-question" className="question-item add-question-button">
                    <img src={`${process.env.PUBLIC_URL}/logo-add-item-section.svg`} alt="" />
                </Link>
            </div>
        </section>
    )
}

export default QuestionListPage;