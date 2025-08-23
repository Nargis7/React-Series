
import React, { useContext } from 'react'
// import React from 'react'
// import { UserContext } from '../App'
import { ThemeContext } from '../App'

const ChildC = () => {
  // const  user  = useContext(UserContext);
  const { theme , setTheme } = useContext(ThemeContext);
  function handleClick(){
    if(theme === "light"){
      setTheme("dark");
    }else{
      setTheme("light");
    }
  }

  return (
    <div>
      <button onClick={handleClick}>
        Toggle Theme
        </button>
      {/* data: {user.name} */}
        {/* {user.age} */}
    </div>
  )
}

export default ChildC
