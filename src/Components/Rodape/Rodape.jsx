import React from 'react'
import './Rodape.css'
import { Link } from 'react-router-dom'
import Btn from '../Btn/Btn.jsx'
import logo from '../../assets/logosStudfy/LogoSombra.png'

const Rodape = () => {
  return (
    <footer className='rodape'>
      <div className='rodape-content'>
        <figure>
          <img src={logo} alt="logo Studfy" />              
        </figure>

        <nav>
          <p>Veja mais</p>
            <ul className='rodape-lista'>
              <Link to='/'><li>Home</li></Link>
              <Link to='/sobre'><li>sobre</li></Link>
              <Link to='/app'><li>app</li></Link>
            </ul>
        </nav>

        <nav>
          <p>Quem somos</p>
            <ul className='rodape-lista'>
              <Link to='/depoimentos'><li>Depoimentos</li></Link>
              <Link to='/quem-somos'><li>Quem Somos</li></Link>
            </ul>
        </nav>

        <div>
          <Btn type="voltar" text="voltar" link=""></Btn>
        </div>
      </div>
      <div className='rodape-copy'>
        <p>&copy; 2023 Studfy</p>
      </div>
    </footer>
  )
}

export default Rodape