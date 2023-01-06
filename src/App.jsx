import './App.css'
import NormalReloj from './assets/componentes/reloj'
import PomodoroReloj from './assets/componentes/pomodoro'

function App (){
  return (
    <div className="App">
      <div className='panel'>
        <button className='btn'>Pomodoro</button>
      </div>
      <NormalReloj />
      <PomodoroReloj />  
    </div>
  )
}

export default App
