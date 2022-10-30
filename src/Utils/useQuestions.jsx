import {useState, useEffect} from 'react';

console.clear();
const useQuestions = () => {
    const RESOURCE = 'http://localhost:8000/questions';
    const [questions, setQuestions] = useState([]);
    const [randomQuestions, setRandomQuestions] = useState([]);

    useEffect(() => {
        fetch(RESOURCE)
        .then(res => res.json())
        .then(data => {
            setQuestions(data);
            setRandomQuestions(getRandomQuestions(data));
        })
    },[RESOURCE])
    

    function getIndividualQuestion(id) {
        fetch(`${RESOURCE}/${id}`)
        .then(res => res.json())
        .then(data => data)
    }

    function addQuestion(question) {
        fetch(RESOURCE,{ 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(question),
        })
    }

    function editQuestion(id, question) {
        fetch(`${RESOURCE}/${id}`,{
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(question),
        })
    }

    function deleteQuestion(id) {
        fetch(`${RESOURCE}/${id}`,{
            method: "DELETE",
            // headers: { "Content-Type": "application/json" },
            // body: JSON.stringify(id)
        })
    }
    
    function getRandomQuestions(arr) {
        let originalArr = [...arr];
        let newArr = []      
        for(let i = originalArr.length; i>0; i--) {
            let randomIndex = Math.floor(Math.random() * originalArr.length);
            newArr.push(originalArr[randomIndex])
            originalArr.splice(randomIndex,1)
        } 
        console.log(newArr)
        return newArr  
    }
    
    return {questions, randomQuestions, addQuestion, editQuestion, deleteQuestion, getIndividualQuestion}
}

export default useQuestions;