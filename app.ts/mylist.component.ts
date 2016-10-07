import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from './product';
import {ProductService} from './products.service';

@Component({
	selector: 'my-list',
	templateUrl: './app/templates/mylist.component.html',
	styleUrls: ['./app/templates/mylist.styles.css']
})
export class MyListComponent {
	constructor(
		private productService: ProductService
	) {};
	@Input() products: Product[];
	@Output() onAdded = new EventEmitter<Product>();
	@Output() onRemoved = new EventEmitter<Product>();
	addToList(product: Product): void {
		this.onAdded.emit(product);
	}
	removeFromList(product: Product): void {
		this.onRemoved.emit(product);
	}
}
