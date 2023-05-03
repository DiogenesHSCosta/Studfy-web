import { Link } from "react-router-dom";
import './NavBar.css'
import logo from '../../assets/logosStudfy/Logo.png'


export default function NavBar() {
  // const[muda, setMuda] = useState('vazio')
  // useEffect(() => {

  //   const intersectionObserver = new IntersectionObserver((entries) => {
  //     if (entries.some((entry) => entry.isIntersecting)) {
  //       console.log('apareceu', entries)
  //     }
  //   })
  //   intersectionObserver.observe(document.querySelector('.home-sobre'));
  //   return () => intersectionObserver.disconnect();

  // }, []);

  window.addEventListener('scroll', () =>{
    const header = document.querySelector('header')
    header.classList.toggle('animado', window.scrollY > 0)
  })

  return (
    <header className="cabecalho">
      <figure className="cabecalho-imagem">
        <img src={logo} alt="Logo do Studfy" />
      </figure>

      <nav >
        <ul className="cabecalho-lista">
            <Link to='/'><li>Home</li></Link>
            <Link to='/sobre'><li>Sobre</li></Link>
            <Link to='/app'><li>App</li></Link>
            <Link to='/depoimentos'><li>Depoimentos</li></Link>
            <Link to='/quem-somos'><li>Quem somos</li></Link>
        </ul>
      </nav>
    </header>
  );
}
