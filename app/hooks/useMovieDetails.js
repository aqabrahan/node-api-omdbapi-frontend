import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../actions';

export default function useMovieDetails() {
  const users = useSelector(state => state.movies.users);
  const dispatch = useDispatch();
  useEffect(() => {
    let mounted = true;
    const fetchData = () => {
        if (mounted && users) {
          dispatch(getMovies(users));
        }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, []);

  return users;
};
