import React, { useState,useEffect} from 'react'
import store from '../redux/store'
import Footer from './Footer'
import Navbar from './Navbar'
import FavBookList from './FavBookList'
export default function FavBooks() {
    const [card,setCard]=useState([])
    useEffect(()=>{
        const favourite=store.getState()
        setCard(favourite.favcard)
    })
    console.log(card)
    return (
    <div >
       <Navbar/>
       <div style={{display: 'flex',flexDirection: 'row', justifyContent: 'center'}}>
      
       {    card.map((el)=>{return <FavBookList {...el}/>})}
       </div>
       <Footer/> 
    </div>
  )
}
