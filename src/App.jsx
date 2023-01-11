import './App.css'
import { useState } from 'react'
import NormalReloj from './assets/componentes/reloj'
import PomodoroReloj from './assets/componentes/pomodoro'

function App (){

  const [pomodoroReloj, setPomodoro] = useState(false)
  const [normalReloj, setNormalReloj] = useState(true)

  const toogleClock = () => {
    setPomodoro(!pomodoroReloj)
    setNormalReloj(!normalReloj)
  }

  return (
    <div className="App">
      <div className='panel'>
        <button onClick={toogleClock} className='btn'>Pomodoro</button>
      </div>
      {
        pomodoroReloj
          ? <PomodoroReloj />
          : <NormalReloj />
      }  
    </div>
  )
}

export default App
