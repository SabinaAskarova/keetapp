import React, { useEffect, useState } from 'react'
import store from '../redux/store'
import '../css/libro.css'
import '../css/new-card.css'
import '../pages/96e2a8f2-0045-42df-9c31-b9e6b70737b2.jpg'
import BestSeller from './BestSeller/BestSeller'


export default function Coxsatilankitab() {
  // console.log('coxsatilan')
  
const [card,setCard]=useState([])
console.log(card)
useEffect(()=>
{
  const post=store.getState()
  setCard(post.card)
  
})

  return (
    <div id='bestseller' style={{display: 'flex',flexDirection: 'row', justifyContent: 'center'}}>
       
         {    card.map((el)=>{return <BestSeller {...el}/>})}
      
 </div>
  )
}
