import axios from '../utils/axios';
class MoviesService {
  getMovies(movie) {
    return axios.get(`/movies/${movie}`);
  }
}

export default new MoviesService();
