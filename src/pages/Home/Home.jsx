import React from 'react'
import { useEffect, useState} from 'react'

import './Home.css'
import logo from '../../assets/logosStudfy/LogoSombra.png'

import Btn from '../../Components/Btn/Btn.jsx'

const Home = () => {  

  return (
    <main>
        <section className= 'home home-download' >

            <div className='texto'>
              <h1>Baixe agora o melhor organizador de rotinas para estudantes</h1>
              <Btn text="Download" type='preenchido' link=''></Btn>
            </div>
        </section>
      
        <section id='sobre' className='home home-sobre'>
            <figure>
              <img src={logo} alt="" />              
            </figure>
            
            <div className='texto'>
              <h1>informações sobre o app</h1>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab totam exercitationem at accusantium placeat harum perferendis impedit tempore? Optio placeat aut corrupti incidunt numquam molestias odit fugiat rem perspiciatis hic!</p>
              <Btn text="+ Sobre" type='preenchido' link='/sobre'></Btn>
            </div>
        </section>
      
        <section className='home home-depoimentos'>
          <div className='home-depoimentos-destaque'>
            <div>
              <p>aqui vai um depoimento escolhido (Ou carrosel de depoimentos)</p>
            </div>
          </div>
            <div className='texto texto-depoimento'>
              <h1>ver mais depoimento</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab totam exercitationem at accusantium placeat harum perferendis impedit tempore? Optio placeat aut corrupti incidunt numquam molestias odit fugiat rem perspiciatis hic!</p>
              <Btn text="depoimentos" type='preenchido' link='/depoimentos'></Btn>
            </div>
        </section>

        <section className='home home-quemSomos'>
            <figure>
              <img src={logo} alt="" />              
            </figure>
            
            <div className='texto'>
              <h1>Quem somos</h1>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab totam exercitationem at accusantium placeat harum perferendis impedit tempore? Optio placeat aut corrupti incidunt numquam molestias odit fugiat rem perspiciatis hic!</p>
              <Btn text="Quem somos" type='preenchido' link='/quem-somos'></Btn>
            </div>
        </section>  
    </main>
  )
}

export default Home