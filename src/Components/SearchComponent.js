import React, { Component } from 'react';
import { Jumbotron, Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';
import axios from 'axios';



function HandleError(props) {
    if (props.error) {
        return (
            <Alert color="danger">
                {props.error}
            </Alert>
        )
    }
    else {
        return (
            <div></div>
        )
    }

}

class SearchComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error: ""
        }
        this.onSearch = this.onSearch.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
    }

    async onSearch(event) {
        event.preventDefault();

        // let city = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${event.target.cityName.value}&appid=57f314dd60cef03e4c65e4cc3785db13`)
        try {
            let city = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${event.target.cityName.value}&appid=57f314dd60cef03e4c65e4cc3785db13`)
            console.log(city)
        } catch (e) {
            this.setState({ error: "City not found" })
        }

    }

    onHandleChange(event) {
        if (event.target.value.length === 0) {
            this.setState({
                error: "Please Enter a City Name"
            })

        }
        else {
            this.setState({
                error: ""
            })
        }
    }

    render() {
        return (
            <div className="container">
                <Jumbotron fluid>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <h1 className="text-center">Search Your City</h1>
                            </div>
                        </div>


                        <form onSubmit={this.onSearch}>
                            <div className="row">
                                <div className="col-8 offset-2 align-self-center form-group">
                                    <input type="text" onChange={this.onHandleChange} className="form-control" id="cityName" name="cityName" placeholder="Enter City Name" />
                                </div>

                            </div>
                            <div className="row ">
                                <div className="col offset-md-5">
                                    <button color="primary" type="submit" className="btn btn-primary">Get Weather</button>
                                </div>
                            </div>
                        </form>


                    </div>
                </Jumbotron>
                <HandleError error={this.state.error}></HandleError>
            </div>
        )
    }


}

export default SearchComponent