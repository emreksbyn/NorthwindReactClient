import axios from "axios";

const BASE_URL = "http://localhost:8080/api/products"

export default class ProductService {
    getProducts() {
        return axios.get(`${BASE_URL}/getAll`)
    }

    getByProductByName(productName) {
        return axios.get(`${BASE_URL}/getByProductName?productName=${productName}`)
    }

    getByProductById(productId) {
        return axios.get(`${BASE_URL}/getByProductId?id=${productId}`)
    }
}