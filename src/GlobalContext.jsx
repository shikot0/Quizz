import {useState, createContext} from 'react';


const GlobalContext = createContext();

export function GlobalProvider({children}) {
    const [navBarIsVisible, setNavBarIsVisible] = useState(false); 

    return (
        <GlobalContext.Provider value={{navBarIsVisible, setNavBarIsVisible}}>
            {children}
        </GlobalContext.Provider>
    ); 
}


export default GlobalContext;