import React, {Component} from 'react'
import Search from '../search/SearchForm'
import MovieList from '../movie/MovieList'
import { Link } from "react-router-dom";


import { connect } from 'react-redux'

class Navbar extends Component {
  render(){
   const {loading} = this.props
  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand">MovieApp</Link>
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
