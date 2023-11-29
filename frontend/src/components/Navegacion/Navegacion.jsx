import React, {useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import './Navegacion.css'
import * as Icon from 'react-icons/fa'
import { Badge,Nav } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
function Navegacion() {
const [click, setClick] = useState(false);
//const [button, setButton] = useState(true);

const hadleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);
// const showButton = () => {
//   if (window.innerWidth <= 960) {
//     setButton(false);
//   } else {
//     setButton(true);
//   }
// };

// useEffect(() => {
//   showButton();
// }, []);

// window.addEventListener('resize', showButton);
  return (
    <>
    <nav className='navbar'>
    <div className='navbar-container'>
          <Link onClick={closeMobileMenu} className='navbar-logo'> Isaroro
         <img src="logo.png" alt="" className='navbar-logo'/> 
          </Link>     

    
    <div className='menu-icon' onClick={hadleClick}>
    {click ? <Icon.FaTimes/> : <Icon.FaBars/>} 
    </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'><Link className='nav-links' to="/"  onClick={closeMobileMenu}>Home</Link></li>
        </ul>
     </div>
    </nav>
       
    </>
  )
}

export default Navegacion