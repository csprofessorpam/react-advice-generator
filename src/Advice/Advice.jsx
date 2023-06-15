import React from 'react'
import './Advice.css'
import dice from '../assets/icon-dice.svg'
import axios from 'axios'

function Advice() {
    const [advice, setAdvice] = React.useState()

    //https://api.adviceslip.com/advice

    const getAdvice = () =>{
        console.log('get advice')
        axios.get(`https://api.adviceslip.com/advice`)
        .then(res => {
            console.log(res.data.slip)
            setAdvice(res.data.slip)
        })
        .catch(err => console.log(err))
    }
  return (
    <div className="advice-container">
        <div className="advice-content">
            <h4>ADVICE # {advice.id}</h4>
            <h2>{advice?.advice}</h2>
            <img src={dice}  className="dice-icon"
            onClick={getAdvice}/>
        </div>
    </div>
  )
}

export default Advice