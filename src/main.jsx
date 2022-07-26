import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import NavBar from './components/NavBar'
import Curriculum from './pages/Curriculum'
import Bookmarks from './pages/Bookmarks'
import Contact from './pages/Contact'
import Portifolio from './pages/Portifolio'
import Publications from './pages/Publications'
import './styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './pages/Error'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path = "/" element={<App />}/>
        <Route path = "/curriculum" element={<Curriculum />}/>
        <Route path = "/bookmarks" element={<Bookmarks />}/>
        <Route path = "/portifolio" element={<Portifolio />}/>
        <Route path = "/publications" element={<Publications />}/>
        <Route path = "/contact" element={<Contact />}/>
        <Route path = "*" element={<Error />}/> 
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
)
