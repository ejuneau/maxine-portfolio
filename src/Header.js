import { Link, NavLink } from 'react-router-dom';
import Hamburger from './Hamburger';
import { useState } from 'react';

export default function Header() {

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)

  }

  return(
    <header>
      <Link to="/">Maxine Sophia Wolff</Link>
      <nav>
        <NavLink to="/" onClick={hamburgerOpen&&toggleHamburger}>Home</NavLink>
        <NavLink to="/Credits" onClick={hamburgerOpen&&toggleHamburger}>Credits</NavLink>
        <NavLink to="/Contact" onClick={hamburgerOpen&&toggleHamburger}>Contact</NavLink>
      </nav>
      <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger hamburgerOpen={hamburgerOpen} toggleHamburger={toggleHamburger} />
      </div>
    </header>
  )
}