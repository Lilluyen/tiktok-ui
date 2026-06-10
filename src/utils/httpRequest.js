import axios from "axios";


const httpRequest = axios.create({
    baseURL: 'http://localhost:9999/'
})

export const get = async (path, option = {}) => {
    const response = await httpRequest.get(path, option);
    return response.data
}

export default httpRequest;