import React, {Component} from 'react'
import Search from '../search/SearchForm'
import Spinner from '../spinner/Spinner'
import MovieList from '../movie/MovieList'

import { connect } from 'react-redux'

class Navbar extends Component {
  render(){
   const {loading} = this.props
  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">MovieApp</a>
        <Search />
      </nav>
      <div className='container' >
        {loading ? <h4>loading...</h4> : <MovieList />}</div>
    </div>
  );
  }
};

const mapStateToProps = state => ({
  loading: state.movies.loading
})

export default connect(mapStateToProps) (Navbar)
