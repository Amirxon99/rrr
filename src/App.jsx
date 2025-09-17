import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Brand from './pages/brand/Brand'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <div>
     <BrowserRouter>
       <Routes>
         <Route path='/home' element={<Home></Home>}></Route>
         <Route path='/Brend' element={<Brand></Brand>}></Route>
         <Route path='/contact' element={<Contact></Contact>}></Route>
         <Route path='/*' element={<h1>404 Not found</h1>}></Route>
       </Routes>
     </BrowserRouter>



    </div>
  )
}

export default App