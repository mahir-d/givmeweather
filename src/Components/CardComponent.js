import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardFooter, Button
} from 'reactstrap';
import '../App.css'


function RenderCard({ unit, data, cityF }) {
    console.log(data)
    let forecast;
    if (unit === "cel") {
        forecast = data.list.map((c) => {
            return (



                <div key={c.dt} className="row">
                    <Card className="col-8 offset-md-2 card">
                        <CardImg className="imgs" top width="auto" src={`http://openweathermap.org/img/wn/${c.weather[0].icon}@2x.png`} alt={c.weather[0].description} />
                        <CardBody>

                            <CardTitle><strong>{data.city.name}</strong></CardTitle>
                            <CardSubtitle>{c.weather[0].description}

                            </CardSubtitle>
                            <CardText>Current Temperature: <span>{c.main.temp}</span> Celsius</CardText>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Humidity <span>{c.main.humidity}</span></li>
                                <li className="list-group-item">Wind Speed <span>{c.wind.speed}</span></li>
                                <li className="list-group-item">High/Low <span>{c.main.temp_max}/{c.main.temp_min}</span> Celsius</li>

                            </ul>


                        </CardBody>
                        <CardFooter>{c.dt_txt}</CardFooter>
                    </Card>

                </div>
            )
        })
    }



    else if (unit === "far") {
        forecast = cityF.list.map((city) => {
            return (



                <div key={city.dt} className="row">
                    <Card className="col-8 offset-md-2 card">
                        <CardImg className="imgs" top width="auto" src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt={city.weather[0].description} />
                        <CardBody>

                            <CardTitle><strong>{cityF.city.name}</strong></CardTitle>
                            <CardSubtitle>{city.weather[0].description}

                            </CardSubtitle>
                            <CardText>Current Temperature: <span>{city.main.temp}</span> Fahrenheit</CardText>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Humidity <span>{city.main.humidity}</span></li>
                                <li className="list-group-item">Wind Speed <span>{city.wind.speed}</span></li>
                                <li className="list-group-item">High/Low <span>{city.main.temp_max}/{city.main.temp_min} Fahrenheit</span></li>

                            </ul>


                        </CardBody>
                        <CardFooter>{city.dt_txt}</CardFooter>
                    </Card>

                </div>
            )
        })

    }




    return (
        <div>
            {forecast}
        </div>
    )


}


class CardComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            unit: "cel",
            btnText: "Celsius"
        }
        this.handleClick = this.handleClick.bind(this)

    }

    handleClick(event) {

        if (this.state.unit === "cel") {
            this.setState({
                unit: "far",
                btnText: "Fahrenheit"
            })
        }
        else {
            this.setState({
                unit: "cel",
                btnText: "Celsius"
            })
        }
    }

    render() {

        let show;
        if (this.props.city) {


            show = <div>
                <br />
                <div className="row">
                    <div className="col text-center">
                        <Button onClick={this.handleClick}>
                            {this.state.btnText}
                        </Button>
                    </div>
                </div>
                <RenderCard unit={this.state.unit} data={this.props.city} cityF={this.props.cityF}></RenderCard>
            </div>




        }
        else {

            show = <div></div>

        }

        return (
            <div className="container">


                <div className="row">
                    <div className="col">
                        {show}
                    </div>
                </div>
            </div>
        )
    }












}

export default CardComponent;