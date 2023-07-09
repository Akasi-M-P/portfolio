import Logo from '/src/assets/logo.jpg'
import data from './data'
import {BsFillSunFill} from 'react-icons/bs'
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <img src={Logo} alt="Logo" />
        </a>
        <ul className="nav__menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button id="theme__icon">
          <BsFillSunFill />
        </button>
      </div>
    </nav>
  );
}

export default Navbar