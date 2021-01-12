
import {httpClient} from './http-client';
import {ProductService} from "./products-services";

export const services = {
    productService: new ProductService(httpClient)
}

export const useServices =() => {
    return services;
}