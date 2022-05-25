import { React } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Card} from "react-bootstrap";
import "./Products.css";



const Products = (props) => {
    const clickHandler=()=> {
        alert("Added to cart Successfully!")
     };

    return (
        <center>

        
            <Card className="Card">
                <Card.Img className="imgclass" src={props.img}  alt="imgtitle"/>
            <Card.Title className="titleclass">{props.title}</Card.Title>
            <Card.Title className="author_class">{props.author}</Card.Title>
            <Card.Title className="star" >{props.star_one}{props.star_two}{props.star_three}{props.star_four}{props.star_five}</Card.Title>
            <Card.Title><div><div className="rate">{props.rupee}</div>
            <div className="discount">{props.discount}</div><div className="offClass">(10% Off)</div></div></Card.Title>
            <Button variant="secondary" className="btn_click" onClick={clickHandler}>Add to Cart</Button>
            </Card>
            </center>
            
                        
                    );
                };


                
                export default Products;