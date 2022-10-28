import {useContext, useEffect} from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import QuizPage from './QuizPage';
import QuestionListPage from './QuestionListPage';
import AddQuestionPage from './AddQuestionPage';
import GlobalContext from './GlobalContext';

function App() {

  const {navBarIsVisible} = useContext(GlobalContext);

  useEffect(() => {
    if(navBarIsVisible) {
      const main = document.querySelector('main');
      main.classList.add('navbar-visible')
    }
  }, [navBarIsVisible])

  console.log(`${process.env.PUBLIC_URL}/logo-menu.svg`)
  return (
    <>
      <main>
        <nav>
          <Link to="/" className="nav-link">Quiz</Link>
          <Link to="questions" className="nav-link">List of Questions</Link>
        </nav>
        <button className="nav-button"><img src={`${process.env.PUBLIC_URL}/logo-menu.svg`} alt="" /></button>
        <Routes>
          <Route exact path="/" element={<QuizPage/>}/>
          <Route path="/questions" element={<QuestionListPage/>}/>
          <Route path="/add-question" element={<AddQuestionPage/>}/>
        </Routes>
      </main>
      </>
    
  );
}

export default App;
