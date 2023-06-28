import React from 'react'
import './Rodape.css'
import { Link } from 'react-router-dom'
import Btn from '../Btn/Btn.jsx'
import logo from '../../assets/logosStudfy/LogoSombra.png'

const Rodape = () => {
  return (
    <footer className='rodape'>
      <div className='rodape-content'>
        <div>
          <figure>
            <img src={logo} alt="logo Studfy" />              
          </figure>
        </div>

        <div>
          <p>Veja mais</p>
            <ul>
              <Link to='/'><li>Home</li></Link>
              <Link to='/sobre'><li>sobre</li></Link>
              <Link to='/app'><li>app</li></Link>
            </ul>
        </div>

        <div>
          <p>Quem somos</p>
            <ul>
              <Link to='/depoimentos'><li>Depoimentos</li></Link>
              <Link to='/quem-somos'><li>Quem Somos</li></Link>
            </ul>
        </div>

        <div>
          <Btn type="voltar" text="voltar" link=""></Btn>
        </div>
      </div>
      <div className='rodape-copy'>
        <p>&copy 2023 Copyright - Studfy</p>
      </div>
    </footer>
  )
}

export default Rodape