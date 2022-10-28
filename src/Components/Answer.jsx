function Answer({data, handleAnswer}) {
    return (
        <button type="button" className="answer" onClick={() => {handleAnswer(data)}}>{data.answer}</button>
    )
}

export default Answer;