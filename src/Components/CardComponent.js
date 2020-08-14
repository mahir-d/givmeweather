import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import '../App.css'


function CardComponent(props) {



    if (props.city) {
        return (

            <div className="container">
                <div className="row">
                    <Card className="col-8 offset-md-2">
                        <CardImg className="imgs" top width="auto" src="http://openweathermap.org/img/wn/10d@2x.png" alt="Card image cap" />
                        <CardBody>

                            <CardTitle>{props.city.name}</CardTitle>
                            <CardSubtitle>
                                Current Temperature: <span>{props.city.main.temp}</span>
                            </CardSubtitle>

                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Humidity <span>{props.city.main.humidity}</span></li>
                                <li className="list-group-item">Wind Speed <span>{props.city.wind.speed}</span></li>
                                <li className="list-group-item">High/Low <span>{props.city.main.temp_max}/{props.city.main.temp_min}</span></li>

                            </ul>


                        </CardBody>
                    </Card>

                </div>
            </div>
        )
    }
    else {
        return (
            <div>

            </div>
        )
    }




}

export default CardComponent;