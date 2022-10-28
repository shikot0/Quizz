import {useState, useContext} from 'react';
import '../Styles/AddQuestionPage.css';
import QuestionsContext from '../GlobalContext';

function AddQuestionPage() {
    const {setQuestions} = useContext(QuestionsContext);
    const [numberOfOptions, setNumberOfOptions] = useState(2);
    return( 
        <section id="add-question-page">
            <h2>Add a question</h2>
            <form>
                <div className="form-item-div">
                    <label htmlFor="question-title">The Question: </label>
                    <input type="text" id="question-title-input" className="form-input" />
                </div>
                <div className="form-item-div">
                    <label htmlFor="options-amount-input">How many options should there be? </label>
                    <input type="number" id="options-amount-input" className="form-input" min="2" value={numberOfOptions} max="5" onInput={(e) => {setNumberOfOptions(e.target.value)}}/>
                </div>
                <button type="submit">Create</button>
            </form>
        </section>
    )
}

export default AddQuestionPage;