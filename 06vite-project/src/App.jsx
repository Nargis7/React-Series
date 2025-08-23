import { useState } from 'react'
import { useEffect } from 'react'
import LoggerComponents from './components/LoggerComponents'
import TimerComponents from './components/TimerComponents'
import './App.css'
import DataFetcher from './components/DataFetcher'
import ResizeComponent from './components/ResizeComponent'
import MultiEffectComponent from './components/MultiEffectComponent'

function App() {
  return (
    <div>
      {/* <DataFetcher /> */}
      {/* <TimerComponents /> */}
      {/* <LoggerComponents /> */}
      {/* <ResizeComponent /> */}
      <MultiEffectComponent />
    </div>
  )
}

export default App

  
  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(1);
  // useEffect is a hook that allows you to perform side effects in function components
  // first -> side-effect function
  // second -> cleanup function
  // third -> dependencies

  // variation:1
  // runs on every render
  // useEffect(()=>{
  //   alert('Component rendered!')
  // })

  // variation: 2
  // runs only on first render
  // useEffect(()=>{
  //   alert('Component rendered!')
  // },[])

  // variation: 3
  // useEffect(() => {
  //   alert('Component unmounted!')
  // },[count])

  // variation: 4
  // multiple dependencies
  // useEffect(() => {
  //   alert('Count changed!')
  // },[count,total])


  // variation: 5
  // lets add cleanup function
  // useEffect(() => {
  //   alert('Component mounted!')
  //   return () => {
  //     alert('Component unmounted!')
  //   }
  // },[count])

  // function handleClick(){
  //   setCount(count + 1);
  //   // setTotal(total + 1);
  // }
//  return (
//   <div>
//     <button onClick={handleClick}>
//       click me
//     </button>
//     <br />
//     Count is : {count}
//     <br />
//     Total is : {total}
//   </div>
//  )

  // useEffect(() =>{
  //   first
  //   return () => {
  //     second
//     }
//   },[third])
  
//   return (
//     <div>hi</div>
//   )



