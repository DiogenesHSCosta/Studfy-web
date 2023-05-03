import React from 'react'
import './Btn.css'
import { Link } from 'react-router-dom'
const Btn = (props) => {

         // preenchido ou n  
    let info = `${props.type}`
                        
    return (
        <Link to={props.link} className='teste'>
            <button className={info}>
                {props.text}
            </button>
        </Link>
    )
}

export default Btn