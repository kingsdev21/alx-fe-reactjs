import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'

function App() {
  

 
  return (
    
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element= {<Home />} />
        <Route path='/about' element= {<About/>} />
        <Route path='/contact' element={<Contact />}/>
        <Route path='/services' element={<Services />} />
        <Route></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
