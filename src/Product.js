import React from 'react'
import "./Product.css";
export default function Product({tittle,price,rating,image}) {
  return (
    <div  className ="product" >
        <div className='product_info'>
                <p>{tittle}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product_rating'>
                {Array(rating).fill().map((_,i)=>
                (<p>⭐</p>
                ))}
            
            </div>
        </div>

   
        <img src={image} alt="" />  
        <button>Add to Cart</button>
        
    </div>
  )
}
