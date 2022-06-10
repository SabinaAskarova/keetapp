import React from 'react'

export default function FavBookList(props) {
  return (
    <div style={{display: "flex", flexWrap: "wrap"}} >
          <div  className="carousel slide" data-bs-ride="carousel" id="slider4">
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
                <div className="product-card">
                    <div className="product-card-container">
                        <div className="product-wrapper">
                            <div className="product-card-info">
                                <div className="product-card-images">
                                  
                                    <a href="#" className="product-link" title="product">
                                        <img src={props.image}
                                            className="product-img" alt=""/>
                                    </a>
                                </div>
                                <div className="product-card-body">
                                    <span className="product-info"><span className="book-info">Kitabın adı : </span> {props.bookname}
                                       </span>
                                    <span className="product-info"><span className="book-info">Müəllif : </span>{props.author}
                                       </span>
                                   
                                </div>
                            </div>
                        </div>                       
                    </div>
                </div>
            </div>
           
        </div>
      
    </div>
    </div>
  )
}
