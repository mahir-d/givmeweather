import React, { Component } from 'react';
import { Jumbotron, Alert } from 'reactstrap';
import axios from 'axios';
import CardComponent from './CardComponent';




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
    _isMounted = false;
    constructor(props) {
        super(props);

        this.state = {
            error: "",
            cityData: undefined,
            cityFData: undefined
        }
        this.onSearch = this.onSearch.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
    }


    componentDidMount() {
        this._isMounted = true
    }
    componentWillUnmount() {
        this._isMounted = false
    }

    async onSearch(event) {
        event.preventDefault();


        try {
            let name = event.target.cityName.value;

            let city = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${name}&units=metric&appid=57f314dd60cef03e4c65e4cc3785db13`)
            if (this._isMounted === true) { this.setState({ cityData: city.data }) }

            let cityF = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${name}&units=imperial&appid=57f314dd60cef03e4c65e4cc3785db13`)
            this.setState({
                cityFData: cityF.data
            })



        } catch (e) {
            console.log(e);
            if (this._isMounted === true) { this.setState({ error: "City not found", cityData: undefined, cityFData: undefined }) }
        }

    }

    onHandleChange(event) {
        if (event.target.value.length === 0) {
            this.setState({
                error: "Please Enter a City Name",
                cityData: undefined,
                cityFData: undefined
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
            <div >

                <Jumbotron fluid>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <h1 className="text-center">Search Your City</h1>
                            </div>
                        </div>


                        <form onSubmit={this.onSearch}>

                            <div className="row">
                                <div className="col-8 offset-2 form-group">
                                    <input type="text" onChange={this.onHandleChange} className="form-control" id="cityName" name="cityName" placeholder="Enter City Name" />
                                </div>

                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-4 text-center">
                                    <button color="primary" type="submit" className="btn btn-primary">Get Weather</button>
                                </div>
                            </div>

                        </form>


                    </div>
                </Jumbotron>

                <HandleError error={this.state.error}></HandleError>
                <CardComponent city={this.state.cityData} cityF={this.state.cityFData} ></CardComponent>
            </div>
        )
    }


}

export default SearchComponent