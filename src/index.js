import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route} from "react-router-dom"

import App from './App'
import About from './pages/About'
import LocationPage from './pages/LocationPage'
import Error from './pages/Error'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/About" element={<About />} />
      <Route path="/Location/:id" element={<LocationPage />} />
      <Route path="/404" element={<Error />} />
    </Routes>
  </BrowserRouter>
)

