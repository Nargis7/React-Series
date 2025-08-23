import { useState } from 'react'
import { createContext } from 'react'

import './App.css'
import ChildA from './components/ChildA';

// step 1: create UserContext
// const UserContext = createContext();
const ThemeContext = createContext();
// step 2: wrap all the child inisde a provider
// step 3: provide a value
// step 4: consume the context
function App() {
  // const [user, setUser] = useState({ name: "nargis", age: 24 });
  const [theme, setTheme] = useState("light");

  return (

    <ThemeContext.Provider value={{ theme, setTheme }}>
    <div id='container' style={{backgroundColor: theme === "light" ? "aqua" : "#333"}}>
        <ChildA />
    </div>
    </ThemeContext.Provider>
  )
}


// export default App
// export { UserContext };

  // )
// }


export default App
// export { UserContext };
export { ThemeContext };
