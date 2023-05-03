import React from 'react'
import './Cards.css'

const Cards = (props) => {
  return (
    <div className='cards'>
        <div className='cards-content'>
            <figure className='cards-img'>
                <img src={props.img} alt={`foto do rosto do ${props.nome}`} />
            </figure>
            <div className='cards-texto'>
                <h2>{props.nome}</h2>
                <p>{props.titulo}</p>
            </div>
        </div>
    </div>
  )
}

export default Cards