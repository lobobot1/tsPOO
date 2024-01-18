import axios from 'axios';
import { Product } from "./models/product.model"

(async () => {

    async function getProducts(): Promise<Product[]> {
        const promise = await axios.get('https://api.escuelajs.co/api/v1/products');
        return promise?.data;
    }

})();