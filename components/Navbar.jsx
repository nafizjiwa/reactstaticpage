

import image from '../src/React-icon.svg';


export default function Navbar(){
    return (
    <header className='header'>
        <nav className='navbar'>
          <img className = 'image' src = {image} alt="React logo"/>
          <span>Fun React Facts</span>
        </nav>
    </header>
    );
    
}
