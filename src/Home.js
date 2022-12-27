import React from 'react'
import "./Home.css";
import Product from './Product';

export default function Home() {
  return (
    <div className='home'>
      <div classname="home__container">
        <img className='home_image'
         src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71dbxIcDioL._SX3000_.jpg" alt="" />
      
      <div className='home_row'>
        <Product tittle="gaming headphones with mic"price="7.99" rating={3}image="https://m.media-amazon.com/images/I/71rmFKMuT2L._AC_SY200_.jpg"/>
        <Product tittle="Xbox 360 black" price="500"rating={4} image="https://m.media-amazon.com/images/I/61-jjE67uqL._AC_SY200_.jpg" />
      </div>
      <div className='home_row'>
      <Product tittle="Wakefit mattress" price="50"rating={4} image="https://m.media-amazon.com/images/I/71B0vbMooUL._AC_SY200_.jpg" />
      <Product tittle="Body wash" price="5"rating={4} image="https://m.media-amazon.com/images/I/612cESaz2aL._AC_SY200_.jpg" />
      <Product tittle="Apple 2022 10.9-inch iPad (Wi-Fi, 64GB) - Blue (10th Generation)" price="490"rating={4} image="https://m.media-amazon.com/images/I/61uA2UVnYWL._AC_SY110_.jpg" />
      
      </div>
      <div className='home_row'>
      <Product tittle="Sony Digital Vlog Camera ZV 1 " price="1000"rating={5} image="https://m.media-amazon.com/images/I/31pfDWmdnVL._AC_SY200_.jpg" />
      <Product tittle="Handheld 3-Axis Smartphone Gimbal Stabilizer with Grip Tripod LED Fill Light" price="100"rating={2} image="https://m.media-amazon.com/images/I/61Gj7P7JBJS._AC_UL480_FMwebp_QL65_.jpg" />
      <Product tittle="AUGEN Super Hero Captian Action America Figure Limited Edition Bobblehead " price="10"rating={4} image="https://m.media-amazon.com/images/I/41UEWaZDj2S._AC_SY110_.jpg" />
      <Product tittle="Klaxon Noah Wood & Metal Coffee Table - Asian Walnut & Black (DIY)" price="150"rating={3} image="https://m.media-amazon.com/images/I/71Y8g-MtZrL._AC_SY200_.jpg" />
      </div>
      
      </div>
    </div>
  )
}
