import React from "react";
import Moment from 'react-moment';
// import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";


export function MealTile({ id, title, type, date, price, photo_url }) {
    return (
        <div className='tile-full'>
            {/* <a href={'/find/projects/' + id}> */}

            <Row className="flex-wrap-reverse">
                <Col size='md-12'>
                    <img className='img-fluid tile-image' src={photo_url} alt={title}></img>
                    {/* <div className='tile-date'><Moment format="YYYY/MM/DD">{date}</Moment></div> */}
                    <div className='tile-date'>
                    <Moment className="time" format="LLL" date={date}/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col size="md-12 tile-content">
                    <div className="tile-title"><strong>{title}</strong></div>
                    <div className="price-cate"><span className='meal-price'>${price}</span><span className="tile-category">{type}</span></div>
                    
                </Col>
            </Row>
                            
            {/* </a> */}
        </div>
    );
}

// export default MealTile;
