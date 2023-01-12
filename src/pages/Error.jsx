import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/Header'

function Error() {
  return (
    <div className='mainContainer'>
        <Header />
        <div className='errorContainer'>
            <span>404</span>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
    </div>
  )
}

export default Error