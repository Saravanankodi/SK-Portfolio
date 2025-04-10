import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ContactAddress from './components/ContactAddress'
import Navbar from './components/Navbar'
import HeaderWithToggleNav from './components/ToggleMenu'
import Contact from './pages/Contact'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skill from './pages/Skill'


function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/skill' element={<Skill/>}/>
      <Route path='/education' element={<Education/>}/>
      <Route path='/experience' element={<Experience/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
