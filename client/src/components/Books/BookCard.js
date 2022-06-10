import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Book.css'


export default function BookCard(props) {
    const [user, setUser] = useState(null)
    useEffect(() => {
        setUser(localStorage.getItem('user'))
    })
    // const logout = (e) => {
    //     localStorage.clear()
    //     setUser(null)
    // }
    return (
        <div className='container'>
            <div className="card-info">
                <div className="card-info-container rounded mx-3 mb-5">
                    <div className="card-carousel" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <a href="#" className="carousel-item active carousel-image-container" data-bs-interval="3000">
                                <img src={props.image}
                                    className="card-img" alt="hobbit" />
                            </a>



                        </div>
                    </div>
                    <div className="card-body p-3">
                        <div className="card-text-wrapper">
                            <span className="card-text fs-5 fw-bold">
                                {props.aboutbook}
                               
                            </span>
                        </div>
                        <span className="author fs-4 fw-bold text-dark text-capitalize d-block p-3 px-0">
                            müəllif : 
                            <span className="author-name text-capitalize text-dark fs-5 fw-normal"> {props.author}</span>
                        </span>
                        <span className="book-info text-capitalize text-dark fs-4 fw-bold d-block p-3 px-0">
                            kitabın adı :
                            <span className="book-name text-capitalize text-dark fs-5 fw-normal">{props.bookname}</span>
                        </span>
                        <span>
                            <a href="#" className="text-decoration-none">


                                <Link style={{textDecoration:"none"}} to={user ?  props.id == 1 ? '/book1' : props.id == 2 ? 'book2' : props.id == 3 ? 'book3' : props.id == 4 ? 'book4' : props.id == 5 ? 'book5' : '':'/login'}
                                    className="bg-success card-btn d-block rounded text-capitalize text-white fs-4 p-2 w-100">
                                    davamını oxu
                                </Link>
                            </a>
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}
