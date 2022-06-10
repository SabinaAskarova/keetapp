import React from 'react'
import './BestBooks.css'
export default function BestBooks() {
  return (
    <div id='bestbooks'>
        <div className="carousel slide section-padding all-features" id="slider2">
            <h2 className="nav-link-style text-capitalize d-flex fs-1 justify-content-center align-items-center mt-4 mb-4">ən yaxşı kitab posterlərimiz
               </h2>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="features">
                        <div className="features-wrapper">
                            <div className="features-left-container">
                                <img src="https://m.media-amazon.com/images/I/91CFcOQxEqL._AC_SL1200_.jpg"
                                    className="features-img" alt=""/>
                            </div>
                            <div className="features-right-container">
                                <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/06/19/11/books-one-hit-wonders-comp.jpg?quality=75&width=990&auto=webp&crop=982:726,smart"
                                    className="features-img" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="features">
                        <div className="features-wrapper">
                            <div className="features-left-container">
                                <img src="https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/03/0*iCcwV2OEUW-xgmk8.jpg"
                                    className="features-img" alt=""/>
                            </div>
                            <div className="features-right-container">
                                <img src="https://cdn11.bigcommerce.com/s-do0ookap9x/images/stencil/1280x1280/products/10108/13681/apiksmz1w__14948.1528308097.jpg?c=2"
                                    className="features-img" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#slider2" className="carousel-control-prev" data-bs-slide="prev" title="prev">
                <span className="carousel-control-prev-icon bg-dark text-white p-4"></span>
            </a>
            <a href="#slider2" className="carousel-control-next" data-bs-slide="next" title="next">
                <span className="carousel-control-next-icon bg-dark text-white p-4"></span>
            </a>
        </div>
    </div>
  )
}
