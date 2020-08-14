import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';
import '../App.css'


function CardComponent(props) {



    if (props.city) {
        const forecast = props.city.list.map((city) => {
            return (
                <div key={city.dt} className="row">
                    <Card className="col-8 offset-md-2 card">
                        <CardImg className="imgs" top width="auto" src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt={city.weather[0].description} />
                        <CardBody>

                            <CardTitle>{city.name}</CardTitle>
                            <CardSubtitle>{city.weather[0].description}

                            </CardSubtitle>
                            <CardText>Current Temperature: <span>{city.main.temp}</span></CardText>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Humidity <span>{city.main.humidity}</span></li>
                                <li className="list-group-item">Wind Speed <span>{city.wind.speed}</span></li>
                                <li className="list-group-item">High/Low <span>{city.main.temp_max}/{city.main.temp_min}</span></li>

                            </ul>


                        </CardBody>
                        <CardFooter>{city.dt_txt}</CardFooter>
                    </Card>

                </div>)
        })
        return (

            <div className="container">
                {forecast}

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