import {urls} from "../Config/urls";
import axiosService from "./axios.service";
import {API_KEY} from "./API_KEY";


const peopleService = {
    getAll: () => axiosService.get(`${urls.person}/popular?api_key=${API_KEY}&language=en-US&page=1`).then(value => value.data.results),
    getByName: (term, id) => axiosService.get(term ? `search/person?api_key=${API_KEY}&language=en-US&query=${term}&page=${id ? id : 1}&include_adult=false` : `${urls.person}/popular?api_key=${API_KEY}&language=en-US&page=${id ? id : 1}`).then(value => value.data.results),
    getById: (id) => axiosService.get(`${urls.person}/${id}?api_key=${API_KEY}&language=en-US`).then(value => value.data)
}

export default peopleService

