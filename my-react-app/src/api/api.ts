import axios from "axios";

export const baseURL: string = "https://testbackend.nc-one.com";

const api = axios.create({
    baseURL: baseURL,
})

export const getProducts = () => {
    return api.get('/image')
        .then((response) => response.data);
}

export const getProductInfo = (id: number) => {
    return api.get(`/image?id=${id}`)
        .then ((response) => response.data);
}