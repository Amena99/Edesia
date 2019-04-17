import React from "react";
import Moment from 'react-moment';
// import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function MealPicTile({title, photo_url }) {
    return (
        <div className='tile-full'>
            <Row className="flex-wrap-reverse">
                <Col size='lg-12'>
                    <img className='img-fluid tile-image' src={photo_url} alt={title}></img>
                </Col>
            </Row>
        </div>
    );
}

export default MealPicTile;
