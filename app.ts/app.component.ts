import {Component} from '@angular/core';
import {Product} from './product';
import {ProductService} from './products.service';

@Component({
	selector: 'shopping-list',
	template: `
		<h1>{{title}}</h1>
		<my-list (onAdded)="onAdded($event)" (onRemoved)="onRemoved($event)" [products]="products"></my-list>
		<product-list (onAdded)="onAdded($event)" [products]="products"></product-list>
	`,
	styleUrls: ['./app/templates/app.styles.css']
})
export class AppComponent {
	constructor(
		private productService: ProductService
	) {};
	title: string = 'Einkaufsliste';
	products: Product[];
	ngOnInit(): void {
		this
			.productService.getProducts()
			.then(products => {
				this.products = this.productService.sortProducts(products);
			});
	}
	onAdded(product: Product): void {
		this.changeCount(product, 1);
	}
	onRemoved(product: Product): void {
		this.changeCount(product, -1);
	}
	changeCount(product: Product, diff: number): void {
		let found = this.products.find(el => el.id === product.id);
		found.count += diff;
		found.countTotal += diff;
		this.products = this.productService.sortProducts(this.products);
	}
}
