import React from 'react';
import {Card,CardImg,CardText,CardImgOverlay,CardBody,CardTitle, Button} from 'reactstrap'
import CommentForm from '../CommentForm/CommentForm';
import LoadComent from '../LoadComent/LoadComent';
import {Link} from "react-router-dom"
import './DishDetails.css'

const DishDetails = (props) => {
    return (
        <>
            <Card style={{marginTop:"10px"}}>
                <CardImg top src = {props.dish.img} alt={props.dish.name}/>
                <CardBody style ={{textAlign:"left"}}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>${props.dish.price}</CardText>
                    <CardText>{props.dish.description}</CardText>
                <Link to="/order">  <Button className="btn-btn-danger d-block mx-auto">Order Now</Button></Link>
                    <hr/>
                    <LoadComent comments={props.comments}/> <hr/>
                    <h3>Give Feedback</h3>
                    <CommentForm dishId={props.dish.id}/>
                </CardBody>
            </Card>
        </>
    );
};

export default DishDetails;