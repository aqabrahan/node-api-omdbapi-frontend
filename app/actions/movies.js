import MoviesService from '../services/movies';
import * as types from '../constants/ActionTypes';

export const getMovies = (users) => dispatch => {
  users.forEach((item,i) => {
    let ps = [];
    item.movies.forEach((movie, index) => {
      const p = new Promise((resolve, reject) => {
        MoviesService.getMovies(movie)
        .then(r => resolve(r.data))
        .catch(err => reject(err));
      });
      ps.push(p);
    })
    Promise.all(ps).then(values => {
      dispatch({
        type: types.ADD_MOVIES,
        data: {movies: values, index: i}
      })
    });
  });

}

export const addOption = (option) => dispatch => {
  dispatch({
    type: types.ADD_OPTION,
    data: option
  });
}
export const removeOption = (option) => dispatch => {
  dispatch({
    type: types.REMOVE_OPTION,
    data: option
  })
}
