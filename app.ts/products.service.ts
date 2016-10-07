import {Injectable} from '@angular/core';
import {Product} from './product';
import {PRODUCTS} from './productlist';

@Injectable()
export class ProductService {

	getProducts(): Promise<Product[]> {
		return Promise.resolve(PRODUCTS);
	};

	sortProducts(products: Product[]): Product[] {
		return products.sort((a: Product, b:Product) => {
			let diffTotal = b.countTotal - a.countTotal;
			if (diffTotal !== 0) return diffTotal;
			return a.name > b.name? 1 : -1;
		});
	}

}