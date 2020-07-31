import React, { Component } from "react";
import Rating from "@material-ui/lab/Rating";
import { Link } from "react-router-dom";

export default class Item extends Component {
  state = {
    _id: '',
    title: "Interestelar",
    type: "Movie",
    actors: ['Lazaro', 'Inixio', 'Elena', 'Angelito'],
    img: "/movies/interestelar.jpg",
    description: "This is the description of interestelar",
    mark: "4.5",
    rates: "5"
  };

  render() {
    return (
      <div className="card">
        <h2 className="card-header text-center pt-4">{this.state.title}</h2>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 text-center">
              <img src={this.state.img} alt={this.state.title} />
            </div>
            <div className="col-md-6">
              <p className="pt-4">
                <b>Sinopsis: </b> 
                {this.state.description}
              </p>
              <p className="pt-4">
                <b>Type: </b>
                {this.state.type}
              </p>
              <p className="pt-4">
                <b>Actors: </b>
                <ul>
                  {this.state.actors.map((actor) =>(
                    <li>{actor}</li> 
                  ))}
                </ul>
              </p>
            </div>
          </div>

          <hr />
          <div className="text-center">
            <h1>4</h1>
            <Rating tname="size-large" defaultValue={this.state.mark} size="large" />
            <p>({this.state.rates} ratings)</p>
          </div>
        </div>

        <div className="card-footer">
          <p className="text-center">
            <b>You must have an account to rate</b>
          </p>
          <Link to="/login">
            <p className="text-center">Login</p>
          </Link>
        </div>
      </div>
    );
  }
}
