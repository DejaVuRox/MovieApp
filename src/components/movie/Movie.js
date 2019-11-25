import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Movie extends Component {
  render() {
    const {movie} = this.props;
    return (
      <div className="col-sm-4 mb-5">
        <div className="card" style={{ width: "18rem" }}>
          <img src={movie.Poster} className="card-img-top" alt="movie cover" />
          <div className="card-body">
            <h5 className="card-title">
              {movie.Title} - {movie.Year}
            </h5>
            <Link to={'/movie/' + movie.ImdbID} className="btn btn-primary">
              Movie Details
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie
