import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import {Power} from "react-bootstrap-icons";
import "./Logout.css";
import { useDispatch, useSelector } from "react-redux";
import {logout, selectUser } from "../features/userSlice";

const LogoutIcon = () => {
    const user = useSelector(selectUser);

    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();

        
        dispatch(logout());
    }
  
 

    return(
        <div>
        <br/><h1>Welcome to Readers Avenue <em>{user.name}</em></h1><br/>
        <Button variant="secondary" className="logout__btn" onClick={(e) => handleLogout(e)}><Power/> Logout</Button>
        </div>
    )
}

export default LogoutIcon;