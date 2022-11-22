import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import Header from './components/Header'
import Footer from './components/Footer'
import Location from './components/Location'
import {getLocation} from './API/location'

import './assets/styles/reset.css'
import background from './assets/images/background2.png'
import MainContainer from './assets/styles/MainContainer'
import { DEVICE } from './assets/styles/Device'
import { PRIMARYCOLORS } from './assets/styles/PrimaryColors'

const HomeContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem 7rem;
  @media ${DEVICE.tablet} {
    padding: 1rem;
  }
  img {
    box-sizing: border-box;
    width: 100%;
  }
  .location-container {
    display: flex;
    flex-wrap: wrap;
    background-color: ${PRIMARYCOLORS.lightGrey};
    margin: 2rem 0;
    padding: 3rem;
    border-radius: 25px;
    gap: 3rem;
    @media ${DEVICE.tablet} {
      justify-content: center;
    }
  }
`

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
    <MainContainer>
      <Header />
      <HomeContainer>
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
      </HomeContainer>
      <Footer />
    </MainContainer>
  )
}

export default App