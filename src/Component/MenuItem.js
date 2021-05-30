import React from 'react';
import {Card,CardImg,CardImgOverlay,CardBody,CardTitle} from 'reactstrap'

const MenuItem = (props) => {
    return (
        <>
            <Card style={{margin:"10px", cursor:"pointer"}} onClick={props.DishSelect}>
                <CardBody>
                    <CardImg width="100%" alt={props.dish.name} src={props.dish.img}/>
                    <CardImgOverlay>
                        <CardTitle className="text-center">{props.dish.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </>
    );
};

export default MenuItem;