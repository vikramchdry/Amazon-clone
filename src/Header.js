
import React from "react";
import SearchIcon from  '@material-ui/icons/Search';
//import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
//import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from "react-router-dom";

import { ShoppingCart } from "@material-ui/icons";



{/* Logo on the left*/}

{/* Search Box*/}


function Header() {

    return (
        
        <div className = "header">
            <Link to = "/"> 
            <img
            className = "header__logo" alt = ""

            src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png"

            />
            </Link>
            
        <div className="header__search">

            <input className="header__searchInput" type="text"/>


            <SearchIcon className="header__searchIcon" />

        </div>

         {/* This is for 1st link*/}
            {/* This is for 2st link*/}
            {/* This is for 3st link*/}
            {/* This is for 4st link*/}
            {/* This is for 5st link*/}

        <div className="header__nav">
            
            <Link to="/login">
            <div className="header__option">
                <span className="header__optionLineOne">Hello</span>
                <span className="header__optionLineTwo">SignIn</span>
            </div>
            </Link>

            <Link to='/orders'>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
            </Link>
        

            <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
            </div>

            <Link to="/checkout">
                <div className="header__optionBasket">
                
                <span><AddShoppingCartIcon  /></span>
                <span className="header__optionLineTwo header__basketCount">Cart</span>
                </div>
            </Link>
        </div>
    </div>
    );
}
  
export default Header;
