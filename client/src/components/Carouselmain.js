import React from 'react'
import '../css/libro.css'
import '../css/new-card.css'

export default function Carouselmain() {
    return (
        <div>
            <div className="carousel-container">
                <div className="carousel slide" data-bs-ride="carousel" id="slider1">
                    <ol className="carousel-indicators">
                        <li data-bs-target="#slider1" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#slider1" data-bs-slide-to="1"></li>
                        <li data-bs-target="#slider1" data-bs-slide-to="2"></li>
                        <li data-bs-target="#slider1" data-bs-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item-container">
                            <div className="carousel-item-images">
                                <div className="carousel-images-wrapper">
                                    <div className="carousel-item active" data-bs-interval="4000">
                                        <a href="#" className="carousel-bg-images">
                                            <img src={require ("../images/carouselbg/killmockbg.jpg")}
                                                className="carousel-bg-img" alt="carousel-bg-images" />
                                        </a>
                                        <a href="#" className="carousel-images">
                                            {/* here */}
                                            <img src={require ("../images/carouselimg/killmock.jpg")}
                                                className="carousel-img" alt="Hobbit" />
                                        </a>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="4000">
                                        <a href="#" className="carousel-bg-images">
                                            {/* here */}
                                            <img src={require ("../images/carouselbg/witcherbg.png")}
                                                className="carousel-bg-img" alt="carousel-bg-images" />
                                        </a>
                                        {/* here */}
                                        <a href="#" className="carousel-images">
                                            <img src={require ("../images/carouselimg/witcher.png")} className="carousel-img"
                                                alt="Hobbit" />
                                        </a>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="4000">
                                        <a href="#" className="carousel-bg-images">
                                            <img src={require ("../images/carouselbg/1984bg.jpg")}
                                                className="carousel-bg-img" alt="carousel-bg-images" />
                                        </a>
                                        <a href="#" className="carousel-images">

                                            {/* here */}
                                            <img src={require ("../images/carouselimg/1984.jpg")}
                                                className="carousel-img" alt="Hobbit" />
                                        </a>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="4000">
                                        <a href="#" className="carousel-bg-images">
                                            <img src={require ("../images/carouselbg/chessbg.jpg")}
                                                className="carousel-bg-img" alt="carousel-bg-images" />
                                        </a>
                                        <a href="#" className="carousel-images">
                                            <img src={require ("../images/carouselimg/chess.png")}
                                                className="carousel-img" alt="Hobbit" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#slider1" className="carousel-control-prev" data-bs-slide="prev" title="prev">
                        {/* <span className="carousel-control-prev-icon bg-success p-4"></span> */}
                    </a>
                    <a href="#slider1" className="carousel-control-next" data-bs-slide="next" title="next">
                        {/* <span className="carousel-control-next-icon bg-success p-4"></span> */}
                    </a>
                </div>
            </div>




        </div>
    )
}
