import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeaderComponent from './components/header'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'

const App = () => {
  return (    
    <BrowserRouter>   
      <HeaderComponent/>    
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/sobre-nos' element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App