import axios from "axios"

const apiCep = axios.create({
    baseURL:"http://viacep.com.br/ws/"
})

export default apiCep