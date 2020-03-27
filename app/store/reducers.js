import * as types from '../constants/ActionTypes';
const INITIAL_STATE = {
  fieldSelector: ['Actors','Directors','Writers','Movies'],
  fieldSelected: [],
  users: [
    {
      name: 'Carlos',
      movies: ['tt0093058', 'tt0049406', 'tt0092099'],
      avatarUrl: null,
      movieDetails: []
    },
    {
      name: 'Martin',
      movies: ['tt0087928'],
      avatarUrl: 'https://vignette.wikia.nocookie.net/fallout/images/6/65/Freeman_Avatar.jpg',
      movieDetails: []
    },
    {
      name: 'Nicolas',
      movies: ['tt0095016', 'tt0099423', 'tt0337978', 'tt1606378'],
      avatarUrl: null,
      movieDetails: []
    },
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case types.GET_MOVIES: {
      const { data } = action;
      return {
        ...state,
        m: data
      };
    }
    case types.ADD_OPTION: {
      const { data } = action;
      return {
        ...state,
        fieldSelected: [
          ...state.fieldSelected, data
        ],
      };
    }
    case types.REMOVE_OPTION: {
      const { data } = action;
      return {
        ...state,
        fieldSelected: state.fieldSelected.filter(item => item !== data)
      };
    }
    case types.ADD_MOVIES: {
      const { data } = action;
      const us = state.users;
      us[data.index] = {
        ...us[data.index],
        movieDetails: data.movies
      };
      return {
        ...state,
        users: us
      };
    }

    default: {
      return state;
    }
  }
}