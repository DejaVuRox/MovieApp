import React, { Component } from 'react'
import { connect } from 'react-redux'

import { movieSearch, fetchMovie } from '../../store/actions/actions'

class SearchForm extends Component {

  inputHandler = (e) => {
    this.props.movieSearch(e.target.value)
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.fetchMovie(this.props.searchInput);
  }

    render() {
        return (
          <div>
            <form className="form-inline" onSubmit={this.submitHandler}>
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search for movies"
                aria-label="Search"
                onChange={this.inputHandler}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        );
    }
}

const mapStateToProps = state => ({
  searchInput: state.movies.searchInput
});

export default connect(mapStateToProps, {movieSearch, fetchMovie})(SearchForm)