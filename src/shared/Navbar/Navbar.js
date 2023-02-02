import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Star} from '../../assets/svg/star.svg';
import Badge from '@mui/material/Badge';
import { useSelector } from "react-redux";



function Navbar () {

        let badgeContent = useSelector((state) => state.favoriteStore.favorites);
        let size = Object.keys(badgeContent).length;
        return(
            <>
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid" id="header">
                    <Link className="navbar-brand text-white fs-1 " to="/" id="logo">Movies App</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse"  id="navigation">
                        <ul className="navbar-nav  mb-2 mb-lg-0 ">
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={"/"}> Home </Link> 
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" to={"/Movies"}> Movies </Link> 
                            </li>
                            
                        </ul>
                        <ul className="ms-auto">
                            <li className="nav-item">
                                <Link to="/favorites" className="nav-link  favorites-btn">
                                <Badge
                                    color="secondary"
                                    badgeContent={size}
                                    classes={{ badge: "badge-style" }}
                                >
                                    <Star className="svg-filter-grey" /> 
                                </Badge>
                                        
                                </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" to={"/Login"}> Log in </Link> 
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" to={"/Signup"}> Sign up </Link> 
                            </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        
        )

        
}

export default Navbar;