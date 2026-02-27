import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './components/App.jsx'
import Profil from './components/profil/Profil.jsx'
import NotFound from './components/util/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/profil' element={<Profil />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
