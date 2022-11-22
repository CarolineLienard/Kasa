import React, { useEffect, useState  } from 'react'
import { useParams } from 'react-router'
import { getLocationById } from '../API/location'
import styled from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Dropdown from '../components/Dropdown'
import Slider from '../components/Slider'
import Tag from '../components/Tag'

import MainContainer from '../assets/styles/MainContainer'
import star from '../assets/icons/star-fill.svg'
import emptyStar from '../assets/icons/star-empty.svg'
import { DEVICE } from '../assets/styles/Device'

const LocationPageContainer = styled.div `
    padding: 1.5rem 7rem;
    @media ${DEVICE.mobileL} {
        padding: 2rem;
    }   
    .location-information {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin-top: 2rem;
        @media ${DEVICE.mobileL} {
            flex-direction: column;
        }  
        .location-title {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            .title {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
            }
            .tags-container {
                display: flex;
                gap: 0.8rem;
            }
        }
    }
    .location-description {
        display: flex;
        gap: 3rem;
        margin: 2rem 0;
        @media ${DEVICE.mobileL} {
            flex-direction: column;
            gap: 2rem;
            margin-top: 3.5rem;
        }  
    }
`

const Profile = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1.5rem;
    @media ${DEVICE.mobileL} {
        flex-direction: row-reverse;
        align-items: center;
        gap: 7rem;
        margin-top: 0.8rem;
    }  
    .profile-title {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        .profile-name {
            display: flex;
            flex-direction: column;
            text-align: right;
            gap: 0.4rem;
        }
        .profile-picture {
            width: 64px;
            height: 64px;
            background-color: lightgray;
            border-radius: 50%;
        }
    }
    .star-container {
        display: flex;
        gap: 4px;
    }
`

function LocationPage() {
    const {id} = useParams()
    const [data, setData]= useState({})
    
    useEffect(()=>{
        getLocationById(id).then((data) =>{
            setData(data)
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
        <MainContainer>
            <Header />
            <LocationPageContainer>
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

                    <Profile>
                        <div className='profile-title'>
                            <div className='profile-name'>
                                <p>{data.host?.name}</p>
                            </div>
                            <img src={data.host?.picture} className='profile-picture' alt='' />
                        </div>
                        <div className='star-container'>
                            {data.rating && handleRating(data.rating)}
                        </div>
                    </Profile>
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
            </LocationPageContainer>
            <Footer />
        </MainContainer>
    )
}

export default LocationPage