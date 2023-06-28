import React from 'react'
import './Rodape.css'
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
              <li>Home</li>
              <li>Sobre</li>
              <li>App</li>
            </ul>
        </div>

        <div>
          <p>Quem somos</p>
            <ul>
                <li>Depoimentos</li>
                <li>Quem Somos</li>
            </ul>
        </div>

        <div>
          <Btn type="voltar" text="voltar" link=""></Btn>
        </div>
      </div>
      <div className='rodape-copy'>
        &copy 2023 Copyright - Studfy
      </div>
    </footer>
  )
}

export default Rodape