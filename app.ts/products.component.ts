import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from './product';

@Component({
	selector: 'product-list',
	templateUrl: './app/templates/products.component.html',
	styleUrls: ['./app/templates/products.styles.css']
})
export class ProductsComponent {
	title = 'Produkte';
	@Input() products: Product[];
	@Output() onAdded = new EventEmitter<Product>();
	addToList(product: Product): void {
		this.onAdded.emit(product);
	}
}
