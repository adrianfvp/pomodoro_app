import './styleP.css'
import { useEffect, useState } from 'react'


export default function PomodoroReloj () {
  const pomodoro = {
    timeStamp: 1671155714711,
    timeSetPomodoro: '30'
  }
    
    const [minutes, setMinutes] = useState('00')
    const [seconds, setseconds] = useState('00')
    
    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date()

            const timePomodoro = pomodoro.timeSetPomodoro * 60 * 1000
            const timePomodoroEnd = pomodoro.timeStamp + timePomodoro
            const timePomodoroEnd2 = timePomodoroEnd - actualTime

            const m = new Date(timePomodoroEnd2)
            const s = new Date(timePomodoroEnd2)
            
            const pMinutes = m.getMinutes() < 10 ? `0${date.getMinutes()}` : m.getMinutes()
            const pSeconds = s.getSeconds() < 10 ? `0${date.getSeconds()}` : m.getSeconds()

            setMinutes(pMinutes)
            setseconds(pSeconds)
        }, 1000)

        return () => clearInterval(interval)
    }, [minutes, seconds])
            

    return (
      <div className='reloj'>
        <p className='status'>Pomodoro</p>
        <span>
          <span className='minute'>{minutes}:</span>
          <span className='second'>{seconds}</span>
        </span>
      </div>
    )
}