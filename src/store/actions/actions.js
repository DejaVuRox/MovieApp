import { MOVIE_SEARCH, FETCH_MOVIES, GET_MOVIE, LOADING } from './actionTypes'
import axios from 'axios'
import { apiKey } from '../../components/API/API'

export const movieSearch = searchInput => {
  return dispatch => {
    dispatch({
      type: MOVIE_SEARCH,
      data: searchInput
    });
  };
};

export const fetchMovie = name => {
  return dispatch => {
    axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${name}`)
    .then(res => dispatch({
      type: FETCH_MOVIES,
      data: res.data.Search
    }))
    .catch(err => console.log(err))
  }
}

export const getMovie = id => {
  return dispatch => {
    axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
      .then(res => dispatch({
          type: GET_MOVIE,
          data: res.data
        })
      )
      .catch(err => console.log(err));
  }
}

export const setLoading = () => {
  return {
    type: LOADING
  }
} 