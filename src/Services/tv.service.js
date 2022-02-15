import {urls} from "../Config/urls";
import axiosService from "./axios.service";
import {API_KEY} from "./API_KEY";


const tvService = {
    getAllPopular: () => axiosService.get(`${urls.tv}/popular?api_key=${API_KEY}&language=en-US&page=1`).then(value => console.log(value)),
    getByTerm: (term) => axiosService.get(`${urls.tv}/${term}?api_key=${API_KEY}&language=en-US&page=1`).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.tv}/${id}?api_key=${API_KEY}&language=en-US&page=1`).then(value => value.data),

}

export default tvService