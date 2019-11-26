import { MOVIE_SEARCH, FETCH_MOVIES, GET_MOVIE, LOADING } from '../actions/actionTypes'

const initialState = {
    searchInput: '',
    movies: [],
    loading: false,
    movie: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_SEARCH:
      return {
        ...state,
        searchInput: action.data,
        loading: false
      };
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.data,
        loading: false
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: action.data,
        loading: false
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};


export default reducer
