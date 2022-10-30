import Answer from './Answer';

function QuizItem({questionData, handleAnswer}) {

    return(
        <div className="slide">
            <div className="quiz-item">
                <h3 className="question">{questionData.question}</h3>
                <div className="answers-wrapper">
                    {questionData.options.filter(item => {
                        if(item.answer !== '') {
                            return item
                        }
                        else {
                            return false
                        }
                    }).map((data,index) => {
                        return <Answer data={data} key={index} handleAnswer={handleAnswer}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default QuizItem;