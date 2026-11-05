

import image from '../src/React-icon.svg';
import './Navbar.css';

export default function Navbar(){
    return (
    <header className='header'>
        <nav className='navbar'>
          <img className = 'image' src = {image} alt="React logo"/>
          <span>ReactFacts</span>
        </nav>
    </header>
    );
    
}
