import {useContext, useEffect} from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import QuizPage from './Components/QuizPage';
import QuestionListPage from './Components/QuestionListPage';
import AddQuestionPage from './Components/AddQuestionPage';
import EditQuestionPage from './Components/EditQuestionPage';
import GlobalContext from './GlobalContext';

function App() {
  const {navBarIsVisible,setNavBarIsVisible} = useContext(GlobalContext); 

  if(navBarIsVisible) {
    window.addEventListener('click', e => {
      if(e.target !== document.querySelector('nav') && e.target !== document.querySelector('.nav-button')) {
        setNavBarIsVisible(false)
      }
    })
  }

  useEffect(() => {
    const main = document.querySelector('main');
    if(navBarIsVisible) {
      main.classList.add('navbar-visible')
    }else {
      main.classList.remove('navbar-visible')
    }
  }, [navBarIsVisible])


  function handleTheme(e) {
    document.querySelector('body').classList.toggle('alternate-theme')
  }

  return (
    <>
      <main>
        <nav>
          <Link to="/" className="nav-link">Quiz</Link>
          <Link to="questions" className="nav-link">List of Questions</Link>
        </nav>
        <button className="nav-button" onClick={() => setNavBarIsVisible(prev => !prev)} aria-label="Menu Button"></button>
        <button className="theme-button" onClick={handleTheme}>Change theme</button>
        <Routes>
          <Route exact path="/" element={<QuizPage/>}/>
          <Route path="/questions" element={<QuestionListPage/>}/>
          <Route path="/add-question" element={<AddQuestionPage/>}/>
          <Route path="/edit-question/:id" element={<EditQuestionPage/>}/>
        </Routes>
      </main>
      </>
    
  );
}

export default App;
