import {React,useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BookHalf,Cart} from "react-bootstrap-icons";
import "./Navbar.css"

const Navbar = () => {
  
    

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light py-3 shadow-sm">
                <div className="container">
                    <div  className="navTitle" ><BookHalf/> Readers Avenue</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className= "navbar-nav ms-auto ms-2 me-lg-0" >
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                            <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                          <button className="btn btn-outline-secondary ms-2" type="submit" >Search</button>
                            
                        </form>
                        
                        <div className="cart__btn">
                        <button className="btn btn-outline-secondary mx-4" type="button" ><Cart/> Cart</button>
                        </div>
                        
                            
                        </ul>
                        

                        
                    </div>
                </div>
            </nav>

        </div>
    )

}

export default Navbar;