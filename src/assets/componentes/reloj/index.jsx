import './style.css'
import { useEffect, useState } from 'react'


export default function NormalReloj () {
    
    const [hour, setHour] = useState('00')
    const [minutes, setMinutes] = useState('00')
    const [seconds, setseconds] = useState('00')
    
    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date()
            const h = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
            const m = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
            const s = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
            setHour(h)
            setMinutes(m)
            setseconds(s)
        }, 1000)

        return () => clearInterval(interval)
    }, [hour, minutes, seconds])
            

    return (
      <div className='reloj'>
        <p className='status'>Reloj</p>
        <span>
          <span className='hour'>{hour}:</span>
          <span className='minute'>{minutes}:</span>
          <span className='second'>{seconds}</span>
        </span>
      </div>
    )
}