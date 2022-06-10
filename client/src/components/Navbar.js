import React, { useEffect, useState } from 'react'
import '../css/new-card.css'
import '../css/libro.css'
import { Link } from 'react-router-dom'
import { IoSearch } from 'react-icons/io5'
import { CgProfile } from 'react-icons/cg'
import {BsFillHeartFill} from 'react-icons/bs'
import Form from 'react-bootstrap/Form'
import brandlogo from '../logos/brandlogo.svg'
import {MdOutlineLogout} from 'react-icons/md'



export default function Navbar() {
    const style={ height: '80px', marginTop: '1rem' }
   const [user, setUser] = useState(null)
    useEffect(()=>{
        setUser(localStorage.getItem('user'))
    })
const changeColorButton=(e)=>{
    e.target.style.color = 'red';
}

const logout = (e) =>{
    localStorage.clear()
    setUser(null)
}


    return (
        <div>
            <div className="container">
                <div className="navbar-container">
                    <header className="navbar-wrapper d-flex justify-content-between align-items-center p-4 px-0">
                        <div className="navbar-logo">
                            <div className="logo-wrapper">
                                <a href="./index.html"
                                    className="logo-font-style d-flex align-items-center text-decoration-none text-dark">
                                    {/* icon color change! */}
                                    <Link to='/' className="logo" alt="Libro"><img src={brandlogo} style={style} /> </Link>
                                </a>
                            </div>
                        </div>
                        <Form action="" className="search-form">
                            <input type="search" name="" placeholder="axtarış..." id="search-box"></input>
                            <label htmlFor="search-box"><IoSearch style={{ fontSize: "2rem" }} /> </label>
                        </Form>
                        <div className="navbar-icons fs-1 d-flex justify-content-center align-items-center">

                         
                            <a id="search-btn"><IoSearch style={{fontSize: '3rem'}}  /></a>
                            <Link to='/favbook' title="Bəyənilənlər"> <BsFillHeartFill onMouseOver={changeColorButton} style={{fontSize: '3rem',color:'#DB7093'}} /></Link>
                          <div>
                         {user? <MdOutlineLogout size={35}  onClick={logout} />:<Link to="/login"><CgProfile className='text-success' size={35} /></Link>} 
                         </div> 
                        </div>
                          
                    </header>
                </div>
            </div>
            <div className="navbar-nav bg-success">
                <div className="navbar-items d-flex justify-content-center align-items-center">
                    <a href="#aboutid" className="nav-item nav-link-style px-4 text-decoration-none fs-4 text-capitalize">
                        <span className="nav-link text-white">Haqqımızda</span>
                    </a>
                    <a href="#bestreading" className="nav-item nav-link-style px-4 text-decoration-none fs-4 text-capitalize">
                        <span className="nav-link text-white">çox oxunanlar</span>
                    </a>
                    <a href="#bestbooks" className="nav-item nav-link-style px-4 text-decoration-none fs-4 text-capitalize">
                        <span className="nav-link text-white">posterlər</span>
                    </a>
                    <a href="#bestseller" className="nav-item nav-link-style px-4 text-decoration-none fs-4 text-capitalize">
                        <span className="nav-link text-white">Çox satılanlar</span>
                    </a>
                    <a href="#footer" className="nav-item nav-link-style px-4 text-decoration-none fs-4 text-capitalize">
                        <span className="nav-link text-white">Əlaqə</span>
                    </a>
                </div>
            </div>
            <div className="bottom-navbar d-flex justify-content-center align-items-center bg-danger">
                <a href="#" className="bottom-navbar-nav fas fa-home" title="home"></a>
                <a href="#" className="bottom-navbar-nav fas fa-heart" title="heart"></a>
                <a href="#" className="bottom-navbar-nav fas fa-list" title="list"></a>
                <a href="#" className="bottom-navbar-nav fas fa-tags" title="tags"></a>
            </div>
        </div>
    )
}
