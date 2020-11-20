import React from "react";
import Axios from "axios";
import "./style.css";

export default class App extends React.Component {
    state = {
        confirmed: "loading",
        recovered: "loading",
        deaths: "loading",
        countries: []
    }
    
    componentDidMount() {
        this.getData();
    }
    
    async getData() {
        const defaultRes = await Axios.get("https://covid19.mathdro.id/api");
        const countries = Object.keys(defaultRes.data.countries);
    
        this.setState({
          confirmed: defaultRes.data.confirmed.value,
          recovered: defaultRes.data.recovered.value,
          deaths: defaultRes.data.deaths.value,
          countries: countries
        });
      }

    render() {
        return (
        <div className="container">
            <h1>Corona Update</h1>
            <div children="flex">
                <div className="box confirmed">
                    <h3>Confirmed Cases</h3>
                    <h4>{this.state.confirmed}</h4>
                </div>
                <div className="box recovered">
                    <h3>Recovered</h3>
                    <h4>{this.state.recovered}</h4>
                </div>
                <div className="box deaths">
                    <h3>Deaths</h3>
                    <h4>{this.state.deaths}</h4>
                </div>
            </div>
        </div>);
    }
}