import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Bars from 'react-loading-icons/dist/esm/components/bars'

export default function Book5() {
    return (

        <div >
            <Navbar />
            <div style={{width:"100%",height:"100%",backgroundColor:'#CBC3E3'}}>
            <Bars stroke="#6f42c1" style={{display: 'inline-block', width: '100%',textAlign:'center',marginTop:'250px',marginBottom:'250px'}} />
            </div>


            <Footer />
            
        </div>
     
    )
}
