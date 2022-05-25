import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import flowerbook from '../assets/flowerbook.jpg';


const Home = () => {
    return (
        <div className="home">
            <div className="card bg-dark text-white border-0">
            <img src={flowerbook} className="card-img" alt="bookImg" height="550px"/>
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">BOOKS ARE A UNIQUELY PORTABLE MAGIC</h5>
                        <p className="card-text lead fs-2">Grab your Favourite books now!</p>

                        </div>
                        
                        
                    </div>
            </div>
            
        </div>

    )
}

export default Home;