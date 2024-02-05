import { ProductHttpService } from "./services/product-http.servise";


(async ()=>{
    const ProductService = new ProductHttpService();
    const products = await ProductService.getAll()

})
