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
    <padrao>
        <section className= 'home-download' >
            <figure>
              <img src={logo} alt="logo Studfy" />              
            </figure>
            <div className='texto'>
              <h2>Baixe agora o melhor organizador de rotinas para estudantes</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione neque vel iure. Eos, expedita? Dolores eveniet explicabo maxime recusandae pariatur quibusdam suscipit ipsam ipsa mollitia, cupiditate dolor ut incidunt consectetur.</p>
              <Btn text="Download" type='padrao' link=''/>
            </div>
        </section>
      
        <section className='home-sobre'>
            <figure>
              <img src={logo} alt="logo Studfy" />              
            </figure>
            
            <div className='texto'>
              <h2>informações sobre o app</h2>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab totam exercitationem at accusantium placeat harum perferendis impedit tempore? Optio placeat aut corrupti incidunt numquam molestias odit fugiat rem perspiciatis hic!</p>
              <Btn text="+ Sobre" type='padrao' link='/sobre'/>
            </div>
        </section>
      
        <section className='home-depoimentos'>
          <div className='home-depoimentos-destaque'>
            <div>
              <Carrosel/>
            </div>
          </div>
            <div className='texto texto-depoimento'>
              <h2>Ver mais depoimentos</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab totam exercitationem at accusantium placeat harum perferendis impedit tempore? Optio placeat aut corrupti incidunt numquam molestias odit fugiat rem perspiciatis hic!</p>
              <Btn text="depoimentos" type='padrao' link='/depoimentos'/>
            </div>
        </section>

        <section className='home-quemSomos'>
          <div>
            <h2>QUEM SOMOS</h2>
          </div>
          <div className='home-quemSomos-cards'>
            <Cards img={cortada} nome="Daniel Campillo" titulo='Desenvolvedor'/>
            <Cards img={cortada} nome="Diogenes Costa" titulo='Desenvolvedor'/>
            <Cards img={cortada} nome="Miguel Oliveira" titulo='Analista'/>
            <Cards img={cortada} nome="Nicolas Vieira" titulo='Designer'/>
            <Cards img={cortada} nome="Thiago Gomes" titulo='Desenvolvedor'/>
          </div>
            
        </section>  
    </padrao>
  )
}

export default Home