import {Link} from 'react-router-dom';
import useQuestions from '../Utils/useQuestions';

function QuizItem({questionData, index}) { 
    const {deleteQuestion} = useQuestions();

    function handleMouseMove(e) {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.target.style.setProperty('--mouse-x', `${x}px`);
        e.target.style.setProperty('--mouse-y', `${y}px`);
    }

	return(
		<div className="question-item">
            <Link to={`/edit-question/${questionData.id}`} key={index}>
			    <h3 className='reflective-item' onMouseMove={handleMouseMove}>{index+1}: {questionData.question}</h3>
            </Link>
            <button className="delete-question-button" aria-label="Delete Question Button" onClick={(e) => {deleteQuestion(questionData.id); e.target.parentElement.remove()}}></button>
		</div>
	)
}

export default QuizItem;
