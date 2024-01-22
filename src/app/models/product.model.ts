import { Category } from './category.models';

export interface Product {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    images:      string[];
    category:    Category;
}