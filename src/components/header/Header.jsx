import { Link } from 'react-router-dom'
import  './header.css'

function Header() {
  return (
    <div>
        <nav className='container'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/amirxon">Brands</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header