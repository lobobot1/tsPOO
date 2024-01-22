import { ProductMemoryService } from "./services/product.service"

const productService = new ProductMemoryService();

productService.create({
    title: "Product 1",
    price: 100,
    description: "bla bla bla",
    categoryId: 1,
    images: []
});

