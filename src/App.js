import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Location from './components/Location'
import {getLocation} from './API/location'

import './assets/styles/reset.css'
import './assets/styles/style.css'
import background from './assets/images/background2.png'
 

function App() {
  const [location, setLocation] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    getLocation().then((items) => {
      setLocation(items)
    }).catch(() => {
      navigate('/Error')
    })
  }, [navigate])

  return (
    <div className='mainContainer'>
      <Header />
      <div className='homeContainer'>
        <div>
          <img src={background} alt='' />
        </div>
        <div className='location-container'>
          {location.map((location) => {
            return (
              <Link to={`/Location/${location.id}`} key={location.id}>
                <Location location={location} />
              </Link>
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App