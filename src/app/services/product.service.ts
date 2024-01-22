import { Product } from "../models/product.model";
import { CreateProductDto, UpdateProductDto } from "../dto/product.dto";
import { faker } from "@faker-js/faker";

export class ProductMemoryService {
  private product: Product[] = [];

  create(data: CreateProductDto) {
    const newProduct = {
      ...data,
      id: faker.datatype.number(),
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        image: faker.image.imageUrl(),
      },
    };
    return this.add(newProduct);
  }

  add(product: Product){
    this.product.push(product);
    return product;
  }

  update(id: Product["id"], changes: UpdateProductDto): Product {
    const index = this.product.findIndex((item) => item.id === id);
    const prevData = this.product[index];
    this.product[index] = {
      ...prevData,
      ...changes,
    };
    return this.product[index];
  }

  findOne(id: Product["id"]){
    return this.product.find(item => item.id === id);
  }

  get all(){
    return this.product;
  }
}
