import React, { useState } from 'react'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import '../../css/libro.css'
import '../../css/new-card.css'
import store from '../../redux/store'
export default function BestSeller(props) {

const [isHovered, setIsHovered] = useState(false);
const addtoFav=()=>{
store.dispatch({type:"ADD_TO_CARD",payload:{post: props}})
}
  return (
    <div>
        
        <div className="carousel slide" data-bs-ride="carousel" id="slider4">
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
                <div className="product-card">
                    <div className="product-card-container">
                        <div className="product-wrapper">
                            <div className="product-card-info">
                                <div className="product-card-images">
                                    <div onClick={addtoFav} 
                                    className="offer" 
                                     onMouseEnter={() => setIsHovered(!isHovered)}
                                     onMouseLeave={() => setIsHovered(!isHovered)}>
                                         {isHovered ?(
                                               <span
                                               className="position-absolute top-1 end-0 bg-success text-white p-3 rounded-circle fs-5"><AiFillHeart size={23} /></span>
                                         ):(
                                         <span className="position-absolute top-1 end-0 bg-success text-white p-3 rounded-circle fs-5"><AiOutlineHeart size={23}/></span>)
}
                                      
                                    </div>
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
