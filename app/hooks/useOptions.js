import { useSelector } from 'react-redux';

export default function useOptions() {
  const options = useSelector(state => state.movies.fieldSelector);

  return options;
};
