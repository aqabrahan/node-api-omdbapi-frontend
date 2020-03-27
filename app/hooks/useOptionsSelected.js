import { useSelector } from 'react-redux';

export default function useOptionsSelected() {
  const optionsSelected = useSelector(state => state.movies.fieldSelected);
  return optionsSelected;
};
