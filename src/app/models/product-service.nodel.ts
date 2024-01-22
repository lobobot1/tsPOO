import { CreateProductDto, UpdateProductDto } from "../dto/product.dto";
import { Product } from "./product.model";

export interface ProductService {
    getAll(): Product[];
    update(id: Product["id"], changes: UpdateProductDto): Product;
    create(dto: CreateProductDto): Product;
    findOne(id: Product["id"]): Product | undefined;
}