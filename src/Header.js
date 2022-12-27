import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import React from 'react';

export default function Header() {
    return (
        <div className="header">
            <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="description of image" />
            <div className="header_search">
                <input
                    className="header-searchInput"
                    type="text" />
                    <SearchIcon className='header_SearchIcon'/>
                {/* logo */}
            </div>
            <div className="header_nav">
              
                    <div className='header_options'>

                        <span 
                        className='header_options_LineOne'>Hello 
                        Slick</span>
                        <span 
                        className='header_options_LineTwo'> Sign 
                        In</span>
                     </div>

                    <div className='header_options'>
                        <span 
                        className='header_options_LineOne'>Returns
                        </span>
                        <span 
                        className='header_options_LineTwo'> & 
                        Order</span>
                    </div>
                    <div className='header_options'>
                        <span 
                        className='header_options_LineOne'>Your
                        </span>
                        <span 
                        className='header_options_LineTwo'>Prime
                        </span>
                    </div>
                    <div className='header_options_basket'>
                        <ShoppingBasketIcon/>
                        <span className='header_options_LineTwo
                        header_basketCount'>0</span>
                    </div>
               
               
            </div>
        </div>
    );
}
