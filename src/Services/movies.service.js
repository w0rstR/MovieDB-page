import {urls} from "../Config/urls";
import axiosService from "./axios.service";
import {API_KEY} from "./API_KEY";


const moviesService = {
    getAllPopular: () => axiosService.get(`${urls.movie}/popular?api_key=${API_KEY}&language=en-US&page=1`).then(value => value.data),
    getUpComing: () => axiosService.get(`${urls.movie}/upcoming?api_key=${API_KEY}&language=en-US&page=1`).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.movie}/${id}?api_key=${API_KEY}&language=en-US&page=1`).then(value => value.data),
    getAllGenres: () => axiosService.get(`genre/movie/list?api_key=${API_KEY}&language=en-US`).then(value => value.data.genres),
    getByGenres: (genreId, pageId) => axiosService.get(`discover/movie?api_key=${API_KEY}&with_genres=${genreId}&page=${pageId}`).then(value => value.data.results)
}

export default moviesService