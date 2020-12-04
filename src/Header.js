
import React from "react";
import SearchIcon from  '@material-ui/icons/Search';
import { Link } from "react-router-dom";



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


        </div>
    );
}
  
export default Header;
