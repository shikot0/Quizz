import {useState, createContext} from 'react';
import data from './data.json'

// const QuestionsContext = createContext();

// export function QuestionsProvider({children}) {
//     const [questions,setQuestions] = useState(data)

//     return (
//         <QuestionsContext.Provider value={{questions, setQuestions}}>
//             {children}
//         </QuestionsContext.Provider>
//     );
// }


// export default QuestionsContext;

const GlobalContext = createContext();

export function GlobalProvider({children}) {
    const [questions,setQuestions] = useState(data);
    const [navBarIsVisible, setNavBarIsVisible] = useState(true); 

    return (
        <GlobalContext.Provider value={{questions, setQuestions, navBarIsVisible, setNavBarIsVisible}}>
            {children}
        </GlobalContext.Provider>
    );
}


export default GlobalContext;