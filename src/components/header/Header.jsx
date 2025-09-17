import { Link } from 'react-router-dom'
import  './header.css'

function Header() {
  return (
    <div className=''>
        {/* <nav className='container'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/amirxon">Brands</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
            </ul>
        </nav> */}
       
       <header className='container'>
<div className='header-top'>
  <img src="./logo.png" alt="" />

<div className="header-left">
  <p>+998 (93) 520 44 22 </p>

<button>оставить заявку</button>
</div>

</div>
<br />  

       </header>
       <br />
       <nav className='container'>
  <ul>
    <li><Link to="/Brend">о бренде</Link></li>
    <li><Link to="/*">продукциИ</Link></li>
    <li><Link to="/Home">преимущества</Link></li>
    <li><Link to="/*">открыть клуб</Link></li>
    <li><Link to="/contact">контакты</Link></li>
  </ul>
</nav>
    </div>
  )
}

export default Header