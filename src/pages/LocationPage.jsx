import React, { useEffect, useState  } from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router'
import { getLocationById } from '../API/location'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Dropdown from '../components/Dropdown'
import Slider from '../components/Slider'
import Tag from '../components/Tag'

import star from '../assets/icons/star-fill.svg'
import emptyStar from '../assets/icons/star-empty.svg'


function LocationPage() {
    const {id} = useParams()
    const [data, setData]= useState({})
    let navigate = useNavigate()
    
    useEffect(()=>{
        getLocationById(id).then((data) =>{
            setData(data)
        }).catch(() => {
            navigate('/Error')
          })
    }, [])

    function handleRating(rating) {
        let diff = 5 - parseInt(rating)
        return (
            <>
                {[...Array(parseInt(rating))].map((e, i) => <img key={i} src={star} alt='' />)}
                {[...Array(diff)].map((e, i) => <img key={i} src={emptyStar} alt='' />)}
            </>
        )
    }

    return (
        <div className='mainContainer'>
            <Header />
            <div className='locationPageContainer'>
                <Slider options={data.pictures} />
                <div className='location-information'>
                    <div className='location-title'>
                        <div className='title'>
                            <h2>{data.title}</h2>
                            <h3>{data.location}</h3>
                        </div>
                        <div className='tags-container'>
                            {data.tags?.map((tags, i) => {
                                return (
                                    <Tag key={i} tagName={tags} />
                                )
                            })}
                        </div>
                    </div>

                    <div className='profile'>
                        <div className='profile-title'>
                            <div className='profile-name'>
                                <p>{data.host?.name}</p>
                            </div>
                            <img src={data.host?.picture} className='profile-picture' alt='' />
                        </div>
                        <div className='star-container'>
                            {data.rating && handleRating(data.rating)}
                        </div>
                    </div>
                </div>

                <div className='location-description'>
                    <Dropdown 
                        dropdownTitle="Description"  
                        dropdownContent={data.description}
                    />
                    <Dropdown
                        dropdownTitle="Équipements"
                        dropdownContent={data.equipments}
                        mode={'list'}
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LocationPage