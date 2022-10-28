import Answer from './Answer';

function QuizItem({questionData, handleAnswer}) {
    function handleTheme(e) {
        document.querySelector('body').classList.toggle('alternate-theme')
    }

    return(
        <div className="slide">
            <div className="quiz-item" onDoubleClick={handleTheme}>
                <h3 className="question">{questionData.question}</h3>
                <div className="answers-wrapper">
                    {questionData.options.map((data,index) => {
                        return <Answer data={data} key={index} handleAnswer={handleAnswer}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default QuizItem;