import React from 'react';
import {Card,CardImg,CardImgOverlay,CardBody,CardTitle} from 'reactstrap'
import './MenuItem.css'

const MenuItem = (props) => {
    return (
        <>  
            <Card className="menu-card" style={{margin:"10px", cursor:"pointer"}} onClick={props.DishSelect}>
                <CardBody>
                    <CardImg className="card-image" alt={props.dish.name} src={props.dish.img}/>
                    
                        <CardTitle className="text-center">{props.dish.name}</CardTitle>
                    
                </CardBody>
            </Card>
        </>
    );
};

export default MenuItem;