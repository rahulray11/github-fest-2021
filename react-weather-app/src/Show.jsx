import React from 'react';
import ExploreIcon from '@material-ui/icons/Explore';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import CloudIcon from '@material-ui/icons/Cloud';
const Show =(props)=>{
    return(
        <>
        <div className='city'>
         <ExploreIcon style={{fontSize:'6rem'}} />
         {props.city}
        </div>
        <div className='info'>
        <div className='mainTemp'>
            {props.temp}&#176;C
        </div>
        <div className='otherTemp'>
         Min.{props.minTemp}&#176;C |
         Max.{props.maxTemp}&#176;C
        </div>
        <div className='weather'>
            {props.weather}
           
            </div>
            </div>
        </>
    )
}
export default Show;