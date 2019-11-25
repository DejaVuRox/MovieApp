import React, { Component } from "react";
import { connect } from "react-redux";

import Movie from "./Movie";

export class MovieList extends Component {
  render() {
    const { movies } = this.props
    let movieInfo = []

    movieInfo = movies.length > 0
        ? movies.map((movie, index) => <Movie key={index} movie={movie} />)
        : null;
    return (
        <div className='row'>
            {movieInfo}
        </div>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies
})

export default connect(mapStateToProps)(MovieList);
