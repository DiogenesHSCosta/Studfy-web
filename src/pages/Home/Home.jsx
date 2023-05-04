import React from 'react'
import { useEffect, useState} from 'react'

import './Home.css'
import logo from '../../assets/logosStudfy/LogoSombra.png'
import cortada from '../../assets/cortada.jpg'

import Btn from '../../Components/Btn/Btn.jsx'
import Cards from '../../Components/Cards/Cards.jsx'
import Carrosel from '../../Components/Carrossel/Carrosel'

const Home = () => {  

  return (
    <main>
        <section className= 'home home-download' >

            <div className='texto'>
              <h1>Baixe agora o melhor organizador de rotinas para estudantes</h1>
              <Btn text="Download" type='preenchido' link=''/>
            </div>
        </section>
      
        <section className='home home-sobre'>
            <figure>
              <img src={logo} alt="" />              
            </figure>
            
            <div className='texto'>
              <h1>informações sobre o app</h1>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab totam exercitationem at accusantium placeat harum perferendis impedit tempore? Optio placeat aut corrupti incidunt numquam molestias odit fugiat rem perspiciatis hic!</p>
              <Btn text="+ Sobre" type='preenchido' link='/sobre'/>
            </div>
        </section>
      
        <section className='home home-depoimentos'>
          <div className='home-depoimentos-destaque'>
            <div>
              <Carrosel/>
            </div>
          </div>
            <div className='texto texto-depoimento'>
              <h1>Ver mais depoimentos</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab totam exercitationem at accusantium placeat harum perferendis impedit tempore? Optio placeat aut corrupti incidunt numquam molestias odit fugiat rem perspiciatis hic!</p>
              <Btn text="depoimentos" type='preenchido' link='/depoimentos'/>
            </div>
        </section>

        <section className='home home-quemSomos'>
          <div className='home-quemSomos-cards'>
            <Cards img={cortada} nome="Daniel Campillo" titulo='Desenvolvedor'/>
            <Cards img={cortada} nome="Diogenes Costa" titulo='Desenvolvedor'/>
            <Cards img={cortada} nome="Miguel Oliveira" titulo='Analista'/>
            <Cards img={cortada} nome="Nicolas Vieira" titulo='Designer'/>
            <Cards img={cortada} nome="Thiago Gomes" titulo='Desenvolvedor'/>
          </div>
            
        </section>  
    </main>
  )
}

export default Home