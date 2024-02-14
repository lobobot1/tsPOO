import { Category } from "../models/category.models"
import { Product } from "../models/product.model"
import axios from "axios";

export class BaseHttpService<TypeClass> {
    private data: TypeClass[] = [];

    constructor(
        private url: string
    ) {}

    async getAll() {
        const {data} = await axios.get<TypeClass[]>(this.url);
        return data;
    }

    async update<ID, DTO>(id: ID, changes: DTO): Promise<Product> {
        const { data } = await axios.put(`${this.url}/${id}`, changes);
        return data;
      }
}

/* const service = new BaseHttpService<string>();

const service2 = new BaseHttpService<Category>(); */

const url = "https://api.escuela.co/api/v1/products"

const products = new BaseHttpService<Product>(url);